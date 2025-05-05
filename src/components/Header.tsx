
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-3 glass" : "py-6 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2" aria-label="MemeAI Home">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-purple-500 to-teal-500 flex items-center justify-center text-white font-bold">
            M
          </div>
          <span className="text-xl font-medium tracking-custom">MemeAI</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          <a href="#features" className="text-sm text-white/80 hover:text-white transition">
            Features
          </a>
          <a href="#demo" className="text-sm text-white/80 hover:text-white transition">
            Try it
          </a>
          <a href="#testimonials" className="text-sm text-white/80 hover:text-white transition">
            Testimonials
          </a>
          <a href="#faq" className="text-sm text-white/80 hover:text-white transition">
            FAQ
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <Button className="bg-gradient-to-r from-purple-500 to-teal-500 hover:opacity-90 transition">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden glass mt-3 py-6 px-4 animate-in">
          <nav className="flex flex-col space-y-4 mb-6" aria-label="Mobile Navigation">
            <a 
              href="#features" 
              className="text-white/80 hover:text-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#demo" 
              className="text-white/80 hover:text-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Try it
            </a>
            <a 
              href="#testimonials" 
              className="text-white/80 hover:text-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="text-white/80 hover:text-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
          </nav>
          <div className="flex flex-col space-y-3">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-teal-500 hover:opacity-90 transition">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
