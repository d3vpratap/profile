import { useState, useEffect } from "react";
import { Menu, X, Mail, FileText } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-surface/90 backdrop-blur-md border-b border-dark-border shadow-dark-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <a href="#" className="text-xl font-bold text-text-primary hover:text-accent transition-colors focus-visible:outline-accent">
            Home 👋
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-accent"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* <a
              href="https://drive.google.com/file/d/1kiWJg0elwpch63dc42L1iQqvAgas-Uai/view?usp=sharing"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white font-medium hover:bg-accent-light transition shadow-accent-glow hover:shadow-accent-glow-lg focus-visible:outline-accent"
            >
              <FileText size={16} />
              Resume
            </a> */}

            <a
              href="#contact"
              className="p-2 rounded-lg bg-dark-elevated hover:bg-dark-card border border-dark-border transition focus-visible:outline-accent"
              aria-label="Email"
            >
              <Mail size={18} className="text-text-primary" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary hover:text-accent transition-colors focus-visible:outline-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 pt-2 space-y-4 border-t border-dark-border mt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-text-secondary hover:text-text-primary transition focus-visible:outline-accent"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

        
            <a
              href="#contact"
              className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition focus-visible:outline-accent"
            >
              <Mail size={16} />
              Email Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
