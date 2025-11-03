import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LOGO from '@/assets/LOGO-Photoroom.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Clients', href: '#clients' },
    { label: 'Contact', href: '#contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-lg border-b border-border/30'
          : 'bg-primary/95 backdrop-blur-sm shadow-2xl'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 group cursor-pointer flex items-center gap-3">
  {/* Logo only */}
  <img
    src={LOGO} // <-- change to your actual logo path
    alt="SecureShield Logo"
    className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-105"
  />

  <div className="hidden sm:block">
    <h1
      className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
        isScrolled ? 'text-foreground' : 'text-primary-foreground'
      }`}
    >
      Srisamraksha
    </h1>
    <p
      className={`text-xs font-medium transition-colors duration-300 ${
        isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'
      }`}
    >
      Security Services Private Ltd
    </p>
  </div>
</div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 font-semibold transition-all duration-300 relative group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-primary-foreground/90 hover:text-primary-foreground'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-3/4 ${
                  isScrolled ? 'bg-accent' : 'bg-primary-foreground'
                }`}></span>
              </a>
            ))}
            <div className="ml-4">
              <Button className="bg-gradient-to-r from-[#cf150e] to-[#e61710] hover:from-[#b5120b] hover:to-[#cf150e]"
>
                <span className="relative z-10">Get Free Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/20 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2.5 rounded-lg transition-all duration-300 ${
              isScrolled
                ? 'text-gray-700'
                : 'text-primary-foreground'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7 transition-transform duration-300 rotate-90" />
            ) : (
              <div className="space-y-1.5 transition-all duration-300">
                <span className={`block w-5 h-0.5 transition-all duration-300 ${
                  isScrolled ? 'bg-gray-700' : 'bg-primary-foreground'
                }`}></span>
                <span className={`block w-7 h-0.5 transition-all duration-300 ${
                  isScrolled ? 'bg-gray-700' : 'bg-primary-foreground'
                }`}></span>
                <span className={`block w-5 h-0.5 transition-all duration-300 ${
                  isScrolled ? 'bg-gray-700' : 'bg-primary-foreground'
                }`}></span>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-1 border-t border-border/30">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3.5 font-semibold transition-all duration-300 relative group ${
                  isScrolled
                    ? 'text-gray-700 hover:text-gray-900'
                    : 'text-primary-foreground/90 hover:text-primary-foreground'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen ? 'slideInRight 0.4s ease-out forwards' : 'none',
                }}
              >
                {item.label}
                <span className={`absolute bottom-2 left-4 w-0 h-0.5 transition-all duration-300 group-hover:w-16 ${
                  isScrolled ? 'bg-accent' : 'bg-primary-foreground'
                }`}></span>
              </a>
            ))}
            <div className="px-4 pt-3">
              <Button className="bg-gradient-to-r from-[#cf150e] to-[#e61710] hover:from-[#b5120b] hover:to-[#cf150e]"
>
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
