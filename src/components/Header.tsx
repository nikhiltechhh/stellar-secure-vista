import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
          ? 'bg-background/98 backdrop-blur-xl shadow-xl border-b border-border/50'
          : 'bg-primary/95 backdrop-blur-sm shadow-2xl'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 group cursor-pointer">
            <div className="flex items-center gap-3">
              <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isScrolled 
                  ? 'bg-gradient-to-br from-primary to-primary/70 shadow-lg shadow-primary/30' 
                  : 'bg-background/20 backdrop-blur-sm border-2 border-primary-foreground/30'
              }`}>
                <Shield className={`w-7 h-7 transition-colors duration-300 ${
                  isScrolled ? 'text-primary-foreground' : 'text-primary-foreground'
                }`} />
                <div className="absolute inset-0 rounded-xl bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}>
                  SecureShield
                </h1>
                <p className={`text-xs font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'
                }`}>
                  Professional Security
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 font-semibold transition-all duration-300 relative group rounded-lg ${
                  isScrolled 
                    ? 'text-foreground/80 hover:text-foreground hover:bg-muted/50' 
                    : 'text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-3/4 ${
                  isScrolled ? 'bg-accent' : 'bg-primary-foreground'
                }`}></span>
              </a>
            ))}
            <div className="ml-4">
              <Button className="relative overflow-hidden group bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground font-bold px-6 py-2.5 shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105 border-0">
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
                ? 'text-foreground hover:bg-muted'
                : 'text-primary-foreground hover:bg-primary-foreground/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7 transition-transform duration-300 rotate-90" />
            ) : (
              <div className="space-y-1.5 transition-all duration-300">
                <span className={`block w-5 h-0.5 transition-all duration-300 ${
                  isScrolled ? 'bg-foreground' : 'bg-primary-foreground'
                }`}></span>
                <span className={`block w-7 h-0.5 transition-all duration-300 ${
                  isScrolled ? 'bg-foreground' : 'bg-primary-foreground'
                }`}></span>
                <span className={`block w-5 h-0.5 transition-all duration-300 ${
                  isScrolled ? 'bg-foreground' : 'bg-primary-foreground'
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
                className={`block px-4 py-3.5 font-semibold rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? 'text-foreground/80 hover:text-foreground hover:bg-muted'
                    : 'text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen ? 'slideInRight 0.4s ease-out forwards' : 'none',
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-3">
              <Button className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground font-bold py-3 shadow-lg shadow-accent/30">
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
