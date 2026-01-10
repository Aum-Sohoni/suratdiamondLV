import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getProductById, products, Product } from "@/data/products";
import {
  ShoppingBag,
  ZoomIn,
  ZoomOut,
  X,
  ChevronLeft,
  ChevronRight,
  Check,
  Diamond,
  Sparkles,
  Gem,
  Palette,
  Scale,
  Circle,
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

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  const { addToCart } = useCart();
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">
            Product Not Found
          </h1>
          <Link to="/shop">
            <Button variant="luxuryOutline">Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getProductName = (p: Product) => {
    switch (language) {
      case "lv":
        return p.nameLv;
      case "ru":
        return p.nameRu;
      default:
        return p.name;
    }
  };

  const getProductDescription = (p: Product) => {
    switch (language) {
      case "lv":
        return p.descriptionLv;
      case "ru":
        return p.descriptionRu;
      default:
        return p.description;
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-EU", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${getProductName(product)} added to cart`);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Inquiry sent successfully! We'll contact you soon.");
    setShowInquiryForm(false);
    setInquiryForm({ name: "", email: "", message: "" });
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const specIcons = {
    carat: Diamond,
    cut: Sparkles,
    clarity: Gem,
    color: Palette,
    metal: Circle,
    weight: Scale,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 text-sm font-body text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link to="/shop" className="hover:text-primary transition-colors">
                {t("collections")}
              </Link>
              <span>/</span>
              <span className="text-foreground">{getProductName(product)}</span>
            </div>
          </motion.div>

          {/* Product Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-20">
            {/* Image with Zoom */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div
                className="relative aspect-square bg-card border border-border overflow-hidden cursor-zoom-in group"
                onClick={() => setIsZoomed(true)}
                onMouseMove={handleMouseMove}
              >
                <img
                  src={categoryImages[product.category]}
                  alt={getProductName(product)}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
                <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-5 h-5 text-foreground" />
                </div>
              </div>

              {/* Zoom Modal */}
              <AnimatePresence>
                {isZoomed && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setIsZoomed(false)}
                  >
                    <button
                      className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsZoomed(false)}
                    >
                      <X className="w-8 h-8" />
                    </button>
                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.9 }}
                      className="relative max-w-4xl max-h-[90vh] overflow-hidden"
                      onClick={(e) => e.stopPropagation()}
                      onMouseMove={handleMouseMove}
                    >
                      <div
                        className="w-full h-full overflow-hidden"
                        style={{
                          cursor: "crosshair",
                        }}
                      >
                        <img
                          src={categoryImages[product.category]}
                          alt={getProductName(product)}
                          className="w-full h-full object-contain transition-transform duration-200"
                          style={{
                            transform: `scale(2)`,
                            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                          }}
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col"
            >
              <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                {t(product.category)}
              </span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
                {getProductName(product)}
              </h1>
              <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
                {getProductDescription(product)}
              </p>

              <div className="font-display text-3xl text-foreground mb-8">
                {formatPrice(product.price)}
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {Object.entries(product.specifications).map(([key, value]) => {
                  const Icon = specIcons[key as keyof typeof specIcons];
                  return (
                    <div
                      key={key}
                      className="bg-card border border-border p-4 rounded-sm"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">
                          {key}
                        </span>
                      </div>
                      <span className="font-display text-foreground">
                        {value}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  variant="luxury"
                  onClick={handleAddToCart}
                  className="flex-1"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="luxuryOutline"
                  onClick={() => setShowInquiryForm(!showInquiryForm)}
                  className="flex-1"
                >
                  Make an Inquiry
                </Button>
              </div>

              {/* Inquiry Form */}
              <AnimatePresence>
                {showInquiryForm && (
                  <motion.form
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    onSubmit={handleInquirySubmit}
                    className="bg-card border border-border p-6 rounded-sm mb-8 overflow-hidden"
                  >
                    <h3 className="font-display text-xl text-foreground mb-4">
                      Inquiry Form
                    </h3>
                    <div className="grid gap-4">
                      <Input
                        placeholder="Your Name"
                        value={inquiryForm.name}
                        onChange={(e) =>
                          setInquiryForm({ ...inquiryForm, name: e.target.value })
                        }
                        required
                        className="bg-background"
                      />
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={inquiryForm.email}
                        onChange={(e) =>
                          setInquiryForm({ ...inquiryForm, email: e.target.value })
                        }
                        required
                        className="bg-background"
                      />
                      <Textarea
                        placeholder="Your message about this piece..."
                        value={inquiryForm.message}
                        onChange={(e) =>
                          setInquiryForm({ ...inquiryForm, message: e.target.value })
                        }
                        required
                        rows={4}
                        className="bg-background"
                      />
                      <Button type="submit" variant="luxury">
                        Send Inquiry
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* Features */}
              <div className="border-t border-border pt-6">
                <div className="grid gap-3 text-sm">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    <span>GIA Certified Diamond</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Complimentary Gift Packaging</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Free Shipping within Latvia</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Lifetime Warranty</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="font-display text-2xl sm:text-3xl text-foreground text-center mb-8">
                You May Also Like
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {relatedProducts.map((p) => (
                  <Link
                    key={p.id}
                    to={`/product/${p.id}`}
                    className="group"
                  >
                    <div className="bg-card border border-border rounded-sm overflow-hidden">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={categoryImages[p.category]}
                          alt={getProductName(p)}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-display text-sm sm:text-base text-foreground group-hover:text-primary transition-colors truncate">
                          {getProductName(p)}
                        </h3>
                        <p className="font-display text-foreground mt-1">
                          {formatPrice(p.price)}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;