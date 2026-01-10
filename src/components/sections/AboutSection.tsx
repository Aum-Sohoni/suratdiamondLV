import { motion } from "framer-motion";
import { Diamond, Award, Heart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Diamond,
    title: "Surat Heritage",
    description: "Direct connections to Surat, the diamond capital of India, ensuring access to the finest stones.",
  },
  {
    icon: Award,
    title: "Expert Craftsmanship",
    description: "Every piece is crafted by master artisans with decades of experience in fine jewelry.",
  },
  {
    icon: Heart,
    title: "Ethical Sourcing",
    description: "Committed to conflict-free diamonds and sustainable, responsible practices.",
  },
  {
    icon: Globe,
    title: "Baltic Elegance",
    description: "Blending Indian diamond expertise with Latvian design sensibilities.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm tracking-[0.4em] uppercase font-body block mb-4">
              Our Story
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Where East Meets
              <br />
              <span className="text-gradient-gold">Baltic</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body text-lg leading-relaxed mb-8">
              <p>
                Surat Diamond Latvia was born from a vision to bring the legendary 
                diamond expertise of Surat, India's diamond heartland, to the 
                sophisticated markets of the Baltic region.
              </p>
              <p>
                From our elegant showroom in Riga's historic center, we offer an 
                exclusive selection of certified diamonds and bespoke jewelry that 
                honors both traditions—Indian precision cutting and European 
                design aesthetics.
              </p>
            </div>
            <Button variant="luxuryOutline" size="lg">
              Discover Our Heritage
            </Button>
          </motion.div>

          {/* Right Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group p-6 bg-card border border-border/50 hover:border-primary/30 transition-all duration-500"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4 transition-transform duration-500 group-hover:scale-110" />
                <h3 className="font-display text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
