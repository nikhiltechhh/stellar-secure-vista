import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LOGO from '@/assets/LOGO-Photoroom.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Clients', href: '#clients' },
    { label: 'Contact', href: '#contact' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Navigate to home and scroll to section
  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    if (href === '/') {
      navigate('/');
      return;
    }

    // Always navigate to home, then scroll after a short delay
    navigate(`/#${href.replace('#', '')}`);
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
          <div
            onClick={() => navigate('/')}
            className="flex-shrink-0 group cursor-pointer flex items-center gap-3"
          >
            <img
              src={LOGO}
              alt="Srisamraksha Logo"
              className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <h1
                className={`text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                Srisamraksha
              </h1>
              <p
                className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'text-muted-foreground'
                    : 'text-primary-foreground/80'
                }`}
              >
                Security Services
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`px-4 py-2 font-semibold transition-all duration-300 relative group ${
                  isScrolled
                    ? 'text-gray-700 hover:text-gray-900'
                    : 'text-primary-foreground/90 hover:text-primary-foreground'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-3/4 ${
                    isScrolled ? 'bg-accent' : 'bg-primary-foreground'
                  }`}
                ></span>
              </button>
            ))}
            <div className="ml-4">
              <a
  href="https://wa.me/918500199996"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="bg-gradient-to-r from-[#cf150e] to-[#e61710] hover:from-[#b5120b] hover:to-[#cf150e]">
    <span className="relative z-10">Get Free Quote</span>
  </Button>
</a>

            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2.5 rounded-lg transition-all duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-primary-foreground'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7 transition-transform duration-300 rotate-90" />
            ) : (
              <div className="space-y-1.5 transition-all duration-300">
                <span
                  className={`block w-5 h-0.5 transition-all duration-300 ${
                    isScrolled ? 'bg-gray-700' : 'bg-primary-foreground'
                  }`}
                ></span>
                <span
                  className={`block w-7 h-0.5 transition-all duration-300 ${
                    isScrolled ? 'bg-gray-700' : 'bg-primary-foreground'
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 transition-all duration-300 ${
                    isScrolled ? 'bg-gray-700' : 'bg-primary-foreground'
                  }`}
                ></span>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-[500px] opacity-100 mb-4'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-1 border-t border-border/30">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left px-4 py-3.5 font-semibold transition-all duration-300 relative group ${
                  isScrolled
                    ? 'text-gray-700 hover:text-gray-900'
                    : 'text-primary-foreground/90 hover:text-primary-foreground'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen
                    ? 'slideInRight 0.4s ease-out forwards'
                    : 'none',
                }}
              >
                {item.label}
                <span
                  className={`absolute bottom-2 left-4 w-0 h-0.5 transition-all duration-300 group-hover:w-16 ${
                    isScrolled ? 'bg-accent' : 'bg-primary-foreground'
                  }`}
                ></span>
              </button>
            ))}
            <div className="px-4 pt-3">
              <Button className="bg-gradient-to-r from-[#cf150e] to-[#e61710] hover:from-[#b5120b] hover:to-[#cf150e]">
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
