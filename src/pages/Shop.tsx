import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { products, Product } from "@/data/products";
import { ShoppingBag } from "lucide-react";
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

const Shop = () => {
  const { t, language } = useLanguage();
  const { addToCart } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryFromUrl);

  const categories = ["all", "necklaces", "rings", "earrings", "bracelets"];

  // Sync URL with selected category
  useEffect(() => {
    const urlCategory = searchParams.get("category") || "all";
    if (urlCategory !== selectedCategory) {
      setSelectedCategory(urlCategory);
    }
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const getProductName = (product: Product) => {
    switch (language) {
      case "lv":
        return product.nameLv;
      case "ru":
        return product.nameRu;
      default:
        return product.name;
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-EU", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(t("addedToCart") || "Added to cart!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
              {selectedCategory === "all" 
                ? t("collections") 
                : t(selectedCategory)}
            </h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              {t("collectionsDescription")}
            </p>
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => handleCategoryChange(category)}
                className="capitalize text-xs sm:text-sm"
              >
                {category === "all" ? t("all") || "All" : t(category)}
              </Button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-sm overflow-hidden">
                  <Link to={`/product/${product.id}`}>
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={categoryImages[product.category]}
                        alt={getProductName(product)}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                    </div>
                  </Link>

                  <div className="p-4 sm:p-6">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                        {getProductName(product)}
                      </h3>
                    </Link>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-sm">
                        {product.specifications.carat}
                      </span>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-sm">
                        {product.specifications.clarity}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-display text-xl text-foreground">
                        {formatPrice(product.price)}
                      </span>
                      <Button
                        size="sm"
                        variant="luxuryOutline"
                        onClick={() => handleAddToCart(product)}
                        className="text-xs"
                      >
                        <ShoppingBag className="w-4 h-4 mr-1" />
                        {t("addToCart")}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg">
                {t("noProductsFound") || "No products found in this category."}
              </p>
              <Button
                variant="luxury"
                className="mt-4"
                onClick={() => handleCategoryChange("all")}
              >
                {t("viewAllProducts") || "View All Products"}
              </Button>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
