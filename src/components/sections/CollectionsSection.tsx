import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import necklaceImage from "@/assets/collection-necklace.jpg";
import ringImage from "@/assets/collection-ring.jpg";
import earringsImage from "@/assets/collection-earrings.jpg";
import braceletImage from "@/assets/collection-bracelet.jpg";

const collections = [
  {
    name: "Necklaces",
    description: "Elegant pendants & statement pieces",
    image: necklaceImage,
    items: "48 pieces",
  },
  {
    name: "Rings",
    description: "Engagement & eternity bands",
    image: ringImage,
    items: "72 pieces",
  },
  {
    name: "Earrings",
    description: "Studs, drops & chandeliers",
    image: earringsImage,
    items: "56 pieces",
  },
  {
    name: "Bracelets",
    description: "Tennis & bangle collections",
    image: braceletImage,
    items: "34 pieces",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const CollectionsSection = () => {
  return (
    <section id="collections" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-primary text-sm tracking-[0.4em] uppercase font-body block mb-4">
            Our Collections
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Curated Excellence
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Each piece in our collection represents the pinnacle of diamond 
            craftsmanship, sourced ethically and cut to perfection.
          </p>
        </motion.div>

        {/* Collections Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {collections.map((collection) => (
            <motion.a
              key={collection.name}
              href="#"
              variants={itemVariants}
              className="group relative overflow-hidden bg-card aspect-[3/4] cursor-pointer"
            >
              {/* Image */}
              <div className="absolute inset-0 image-shimmer">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-primary/80 text-xs tracking-[0.2em] uppercase mb-2 font-body">
                  {collection.items}
                </span>
                <h3 className="font-display text-2xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {collection.name}
                </h3>
                <p className="text-muted-foreground text-sm font-body mb-4">
                  {collection.description}
                </p>

                {/* Explore link */}
                <div className="flex items-center gap-2 text-primary opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-sm tracking-[0.15em] uppercase font-body">
                    Explore
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Border effect */}
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 transition-colors duration-500" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
