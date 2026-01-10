import { motion } from "framer-motion";
import { Palette, Gem, Ruler, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Palette,
    number: "01",
    title: "Consultation",
    description: "Share your vision with our design team in a private session.",
  },
  {
    icon: Gem,
    number: "02",
    title: "Stone Selection",
    description: "Choose from our curated selection of certified diamonds.",
  },
  {
    icon: Ruler,
    number: "03",
    title: "Design & Craft",
    description: "Our master artisans bring your vision to life with precision.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Reveal",
    description: "Unveil your unique piece in an unforgettable presentation.",
  },
];

export const BespokeSection = () => {
  return (
    <section id="bespoke" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-primary text-sm tracking-[0.4em] uppercase font-body block mb-4">
            Bespoke Creation
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Your Vision, Our Craft
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Create a one-of-a-kind piece that tells your unique story. 
            Our bespoke service transforms your dreams into eternal brilliance.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="text-center">
                {/* Number */}
                <span className="text-5xl font-display text-primary/20 group-hover:text-primary/40 transition-colors duration-500">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mt-4 mb-6 border border-border group-hover:border-primary flex items-center justify-center transition-colors duration-500">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button variant="luxury" size="xl" className="sparkle">
            Start Your Bespoke Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
