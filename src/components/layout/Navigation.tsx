import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ShoppingBag } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import logo from "@/assets/logo.png";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "lv", label: "LV" },
  { code: "ru", label: "RU" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { totalItems } = useCart();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const navLinks = isHomePage
    ? [
        { name: t("collections"), href: "#collections" },
        { name: t("about"), href: "#about" },
        { name: t("bespoke"), href: "#bespoke" },
        { name: t("contact"), href: "#contact" },
      ]
    : [
        { name: t("collections"), href: "/shop", isLink: true },
        { name: t("about"), href: "/#about", isLink: true },
        { name: t("bespoke"), href: "/#bespoke", isLink: true },
        { name: t("contact"), href: "/#contact", isLink: true },
      ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setLangMenuOpen(false);
    if (langMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [langMenuOpen]);

  const NavLink = ({ link }: { link: { name: string; href: string; isLink?: boolean } }) => {
    if (link.isLink) {
      return (
        <Link
          to={link.href}
          className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
        >
          {link.name}
        </Link>
      );
    }
    return (
      <a
        href={link.href}
        className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
      >
        {link.name}
      </a>
    );
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <img 
              src={logo} 
              alt="Surat Diamond Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-display text-base sm:text-lg lg:text-xl tracking-wider text-foreground">
                Surat diamond
              </span>
              <span className="text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground uppercase">
                Premium Jewellery
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <NavLink key={link.name} link={link} />
            ))}
            <Link
              to="/shop"
              className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
            >
              Shop
            </Link>
          </div>

          {/* Right Side: Language + Cart */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLangMenuOpen(!langMenuOpen);
                }}
                className="flex items-center gap-1 px-3 py-2 text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-300 font-body border border-border/50 hover:border-primary/50"
              >
                {language.toUpperCase()}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${langMenuOpen ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 bg-card border border-border/50 shadow-lg"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={(e) => {
                          e.stopPropagation();
                          setLanguage(lang.code);
                          setLangMenuOpen(false);
                        }}
                        className={`block w-full px-6 py-3 text-sm tracking-wider uppercase font-body text-left transition-colors duration-300 ${
                          language === lang.code
                            ? "text-primary bg-primary/5"
                            : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Cart Icon */}
            <Link
              to="/checkout"
              className="relative p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile: Language + Cart + Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Language Switcher */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLangMenuOpen(!langMenuOpen);
                }}
                className="flex items-center gap-1 px-2 py-1.5 text-xs tracking-wider uppercase text-muted-foreground font-body border border-border/50"
              >
                {language.toUpperCase()}
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${langMenuOpen ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 bg-card border border-border/50 shadow-lg z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={(e) => {
                          e.stopPropagation();
                          setLanguage(lang.code);
                          setLangMenuOpen(false);
                        }}
                        className={`block w-full px-4 py-2 text-xs tracking-wider uppercase font-body text-left transition-colors duration-300 ${
                          language === lang.code
                            ? "text-primary bg-primary/5"
                            : "text-muted-foreground hover:text-primary"
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Cart */}
            <Link
              to="/checkout"
              className="relative p-2 text-muted-foreground"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border/50"
          >
            <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-4 sm:gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.isLink ? (
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base sm:text-lg tracking-[0.15em] uppercase text-foreground hover:text-primary transition-colors font-body"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base sm:text-lg tracking-[0.15em] uppercase text-foreground hover:text-primary transition-colors font-body"
                    >
                      {link.name}
                    </a>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link
                  to="/shop"
                  onClick={() => setIsOpen(false)}
                  className="text-base sm:text-lg tracking-[0.15em] uppercase text-foreground hover:text-primary transition-colors font-body"
                >
                  Shop
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};