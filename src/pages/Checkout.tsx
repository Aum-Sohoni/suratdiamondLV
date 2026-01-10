import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  CreditCard,
  ArrowLeft,
  Check,
} from "lucide-react";
import { toast } from "sonner";
import collectionNecklace from "@/assets/collection-necklace.jpg";
import collectionRing from "@/assets/collection-ring.jpg";
import collectionEarrings from "@/assets/collection-earrings.jpg";
import collectionBracelet from "@/assets/collection-bracelet.jpg";

const categoryImages: Record<string, string> = {
  necklaces: collectionNecklace,
  rings: collectionRing,
  earrings: collectionEarrings,
  bracelets: collectionBracelet,
};

const Checkout = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart();
  const [step, setStep] = useState<"cart" | "shipping" | "payment" | "complete">(
    "cart"
  );
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Latvia",
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-EU", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  };

  const getProductName = (product: any) => {
    switch (language) {
      case "lv":
        return product.nameLv;
      case "ru":
        return product.nameRu;
      default:
        return product.name;
    }
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("complete");
    clearCart();
    toast.success("Order placed successfully!");
  };

  if (items.length === 0 && step !== "complete") {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
              <h1 className="font-display text-3xl text-foreground mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-muted-foreground mb-8">
                Discover our exquisite collection of diamond jewelry
              </p>
              <Link to="/shop">
                <Button variant="luxury" size="lg">
                  Explore Collection
                </Button>
              </Link>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            {["cart", "shipping", "payment", "complete"].map((s, i) => (
              <div key={s} className="flex items-center gap-4">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    step === s || ["cart", "shipping", "payment", "complete"].indexOf(step) > i
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {["cart", "shipping", "payment", "complete"].indexOf(step) > i ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    i + 1
                  )}
                </div>
                {i < 3 && (
                  <div
                    className={`w-12 sm:w-20 h-px transition-colors ${
                      ["cart", "shipping", "payment", "complete"].indexOf(step) > i
                        ? "bg-primary"
                        : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </motion.div>

          {/* Cart Step */}
          {step === "cart" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                <h1 className="font-display text-2xl text-foreground mb-6">
                  Shopping Cart
                </h1>
                {items.map((item) => (
                  <motion.div
                    key={item.product.id}
                    layout
                    className="bg-card border border-border p-4 sm:p-6 rounded-sm flex gap-4 sm:gap-6"
                  >
                    <img
                      src={categoryImages[item.product.category]}
                      alt={getProductName(item.product)}
                      className="w-20 h-20 sm:w-28 sm:h-28 object-cover rounded-sm"
                    />
                    <div className="flex-1 flex flex-col">
                      <Link
                        to={`/product/${item.product.id}`}
                        className="font-display text-lg text-foreground hover:text-primary transition-colors"
                      >
                        {getProductName(item.product)}
                      </Link>
                      <span className="text-sm text-muted-foreground mb-2">
                        {item.product.specifications.carat} •{" "}
                        {item.product.specifications.clarity}
                      </span>
                      <span className="font-display text-foreground">
                        {formatPrice(item.product.price)}
                      </span>
                      <div className="flex items-center gap-4 mt-auto pt-4">
                        <div className="flex items-center border border-border rounded-sm">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 font-medium">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="font-display text-lg text-foreground hidden sm:block">
                      {formatPrice(item.product.price * item.quantity)}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border p-6 rounded-sm sticky top-28">
                  <h2 className="font-display text-xl text-foreground mb-6">
                    Order Summary
                  </h2>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>{formatPrice(totalPrice)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-display text-xl text-foreground">
                      <span>Total</span>
                      <span>{formatPrice(totalPrice)}</span>
                    </div>
                  </div>
                  <Button
                    variant="luxury"
                    size="lg"
                    className="w-full"
                    onClick={() => setStep("shipping")}
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Shipping Step */}
          {step === "shipping" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-2xl mx-auto"
            >
              <button
                onClick={() => setStep("cart")}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Cart
              </button>
              <h1 className="font-display text-2xl text-foreground mb-6">
                Shipping Information
              </h1>
              <form
                onSubmit={handleShippingSubmit}
                className="bg-card border border-border p-6 rounded-sm space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    value={shippingInfo.firstName}
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, firstName: e.target.value })
                    }
                    required
                    className="bg-background"
                  />
                  <Input
                    placeholder="Last Name"
                    value={shippingInfo.lastName}
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, lastName: e.target.value })
                    }
                    required
                    className="bg-background"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={shippingInfo.email}
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, email: e.target.value })
                  }
                  required
                  className="bg-background"
                />
                <Input
                  type="tel"
                  placeholder="Phone"
                  value={shippingInfo.phone}
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, phone: e.target.value })
                  }
                  required
                  className="bg-background"
                />
                <Input
                  placeholder="Address"
                  value={shippingInfo.address}
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, address: e.target.value })
                  }
                  required
                  className="bg-background"
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="City"
                    value={shippingInfo.city}
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, city: e.target.value })
                    }
                    required
                    className="bg-background"
                  />
                  <Input
                    placeholder="Postal Code"
                    value={shippingInfo.postalCode}
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, postalCode: e.target.value })
                    }
                    required
                    className="bg-background"
                  />
                </div>
                <Button type="submit" variant="luxury" size="lg" className="w-full">
                  Continue to Payment
                </Button>
              </form>
            </motion.div>
          )}

          {/* Payment Step */}
          {step === "payment" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-2xl mx-auto"
            >
              <button
                onClick={() => setStep("shipping")}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Shipping
              </button>
              <h1 className="font-display text-2xl text-foreground mb-6">
                Payment Details
              </h1>
              <form
                onSubmit={handlePaymentSubmit}
                className="bg-card border border-border p-6 rounded-sm space-y-4"
              >
                <div className="flex items-center gap-3 mb-4 p-4 bg-muted rounded-sm">
                  <CreditCard className="w-6 h-6 text-primary" />
                  <span className="text-foreground">Secure Payment</span>
                </div>
                <Input
                  placeholder="Card Number"
                  maxLength={19}
                  required
                  className="bg-background"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="MM/YY"
                    maxLength={5}
                    required
                    className="bg-background"
                  />
                  <Input
                    placeholder="CVC"
                    maxLength={4}
                    required
                    className="bg-background"
                  />
                </div>
                <Input
                  placeholder="Cardholder Name"
                  required
                  className="bg-background"
                />

                <Separator className="my-6" />

                <div className="space-y-2">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Order Total</span>
                    <span className="font-display text-foreground">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                </div>

                <Button type="submit" variant="luxury" size="lg" className="w-full">
                  Place Order - {formatPrice(totalPrice)}
                </Button>
              </form>
            </motion.div>
          )}

          {/* Complete Step */}
          {step === "complete" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8">
                <Check className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
                Thank You for Your Order!
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                Your order has been placed successfully. We'll send you a
                confirmation email shortly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/shop">
                  <Button variant="luxuryOutline" size="lg">
                    Continue Shopping
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="luxury" size="lg">
                    Return Home
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;