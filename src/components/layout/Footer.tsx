import { Diamond } from "lucide-react";

const footerLinks = {
  collections: [
    { name: "Necklaces", href: "#" },
    { name: "Rings", href: "#" },
    { name: "Earrings", href: "#" },
    { name: "Bracelets", href: "#" },
  ],
  services: [
    { name: "Bespoke Design", href: "#" },
    { name: "Diamond Education", href: "#" },
    { name: "Ring Sizing", href: "#" },
    { name: "Aftercare", href: "#" },
  ],
  company: [
    { name: "Our Story", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <Diamond className="w-8 h-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-display text-xl tracking-wider text-foreground">
                  SURAT DIAMOND
                </span>
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                  Latvia
                </span>
              </div>
            </a>
            <p className="text-muted-foreground font-body leading-relaxed max-w-sm mb-6">
              Where Surat's legendary diamond heritage meets Baltic elegance. 
              Crafting moments of eternal brilliance in the heart of Riga.
            </p>
            <p className="text-xs tracking-wider text-muted-foreground uppercase font-body">
              Elizabetes iela 22, Riga LV-1050
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display text-foreground mb-6">Collections</h4>
            <ul className="space-y-3">
              {footerLinks.collections.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-body"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-body"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-body"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs font-body">
            © {new Date().getFullYear()} Surat Diamond Latvia. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-body">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
