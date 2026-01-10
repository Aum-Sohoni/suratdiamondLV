import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface CheckoutRequest {
  items: {
    name: string;
    nameLv?: string;
    nameRu?: string;
    price: number;
    quantity: number;
    image?: string;
  }[];
  customerEmail?: string;
  shippingInfo?: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  language?: string;
}

const logStep = (step: string, details?: unknown) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CREATE-CHECKOUT] ${step}${detailsStr}`);
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not set");
    logStep("Stripe key verified");

    const { items, customerEmail, shippingInfo, language = "en" } = await req.json() as CheckoutRequest;
    logStep("Received checkout request", { itemCount: items?.length, customerEmail, language });

    if (!items || items.length === 0) {
      throw new Error("No items provided for checkout");
    }

    const stripe = new Stripe(stripeKey, { apiVersion: "2025-08-27.basil" });

    // Check if customer already exists
    let customerId: string | undefined;
    const email = shippingInfo?.email || customerEmail;
    
    if (email) {
      const customers = await stripe.customers.list({ email, limit: 1 });
      if (customers.data.length > 0) {
        customerId = customers.data[0].id;
        logStep("Found existing customer", { customerId });
      }
    }

    // Create line items for Stripe checkout
    const lineItems = items.map((item) => {
      // Use localized name based on language
      let productName = item.name;
      if (language === "lv" && item.nameLv) {
        productName = item.nameLv;
      } else if (language === "ru" && item.nameRu) {
        productName = item.nameRu;
      }

      return {
        price_data: {
          currency: "eur",
          product_data: {
            name: productName,
            ...(item.image && { images: [item.image] }),
          },
          unit_amount: Math.round(item.price * 100), // Convert to cents
        },
        quantity: item.quantity,
      };
    });

    logStep("Created line items", { count: lineItems.length });

    const origin = req.headers.get("origin") || "http://localhost:5173";

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : email,
      line_items: lineItems,
      mode: "payment",
      success_url: `${origin}/checkout?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout?canceled=true`,
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["LV", "EE", "LT", "DE", "PL", "SE", "FI", "DK", "NO"],
      },
      metadata: {
        language,
        ...(shippingInfo && {
          shipping_name: `${shippingInfo.firstName} ${shippingInfo.lastName}`,
          shipping_phone: shippingInfo.phone,
        }),
      },
    });

    logStep("Checkout session created", { sessionId: session.id, url: session.url });

    return new Response(JSON.stringify({ url: session.url, sessionId: session.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in create-checkout", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
