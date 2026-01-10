import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Elizabetes iela 22, Riga LV-1050",
    detail: "Historic Art Nouveau District",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+371 2XXX XXXX",
    detail: "Mon-Sat, 10:00 - 19:00",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@suratdiamondlatvia.com",
    detail: "Response within 24 hours",
  },
  {
    icon: Clock,
    label: "Opening Hours",
    value: "Mon-Sat: 10:00 - 19:00",
    detail: "Private viewings by appointment",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm tracking-[0.4em] uppercase font-body block mb-4">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Begin Your Journey
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8">
              Whether you're seeking the perfect engagement ring or a bespoke 
              piece, our diamond experts are here to guide you.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-body tracking-wider uppercase text-muted-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground font-body transition-colors duration-300"
                    placeholder="Anna"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body tracking-wider uppercase text-muted-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground font-body transition-colors duration-300"
                    placeholder="Liepiņa"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-body tracking-wider uppercase text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground font-body transition-colors duration-300"
                  placeholder="anna@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-body tracking-wider uppercase text-muted-foreground mb-2">
                  Interest
                </label>
                <select className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground font-body transition-colors duration-300 cursor-pointer">
                  <option value="" className="bg-card">Select your interest</option>
                  <option value="engagement" className="bg-card">Engagement Rings</option>
                  <option value="bespoke" className="bg-card">Bespoke Jewelry</option>
                  <option value="collection" className="bg-card">Collection Pieces</option>
                  <option value="consultation" className="bg-card">Private Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-body tracking-wider uppercase text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground font-body transition-colors duration-300 resize-none"
                  placeholder="Tell us about your vision..."
                />
              </div>

              <Button variant="luxury" size="xl" className="w-full md:w-auto">
                Send Inquiry
              </Button>
            </form>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-card border border-border/50 hover:border-primary/30 transition-colors duration-500"
              >
                <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs tracking-wider uppercase text-muted-foreground font-body mb-1">
                    {item.label}
                  </p>
                  <p className="text-foreground font-body text-lg">
                    {item.value}
                  </p>
                  <p className="text-muted-foreground text-sm font-body">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <p className="text-xs tracking-wider uppercase text-muted-foreground font-body mb-4">
                Follow Our Journey
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 border border-border hover:border-primary hover:text-primary transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 border border-border hover:border-primary hover:text-primary transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
