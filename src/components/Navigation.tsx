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
          ? "bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <a href="#" className="text-xl font-bold text-white">
            Dev Pratap Singh
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/Dev_Pratap_Singh_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-400 transition"
            >
              <FileText size={16} />
              Resume
            </a>

            <a
              href="#contact"
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
              aria-label="Email"
            >
              <Mail size={18} className="text-white" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 pt-2 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-white transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://drive.google.com/file/d/11KqCCBThg79Mr3iAUKi3U1y4NCAljbL6/view?usp=sharing"
              className="flex items-center gap-2 w-fit px-4 py-2 rounded-lg bg-indigo-500 text-white font-medium"
            >
              <FileText size={16} />
              Resume
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 text-gray-300 hover:text-white"
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
