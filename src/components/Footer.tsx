import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import LOGO from "@/assets/LOGO-Photoroom.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--footer-bg))] text-[hsl(var(--footer-foreground))] border-t border-[hsl(var(--footer-border))]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
  src={LOGO}  // ← replace with your actual logo path
  alt="Company Logo"
  className="w-10 h-10 object-contain"
/>

              <span className="text-xl font-bold text-[hsl(var(--footer-foreground))]">Srisamraksha</span>
            </div>
            <p className="text-sm text-[hsl(var(--footer-muted))] leading-relaxed">
              Providing comprehensive security solutions to protect what matters most. Your safety is our priority.
            </p>
            <div className="flex space-x-3 pt-2">
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-[hsl(var(--footer-border))] hover:bg-accent flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-[hsl(var(--footer-border))] hover:bg-accent flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-[hsl(var(--footer-border))] hover:bg-accent flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-[hsl(var(--footer-border))] hover:bg-accent flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[hsl(var(--footer-foreground))]">Services</h3>
            <ul className="space-y-3">
              {[
                "Residential Security",
                "Commercial Security",
                "Surveillance Systems",
                "Access Control",
                "Security Consulting",
                "Emergency Response"
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-sm text-[hsl(var(--footer-muted))] hover:text-accent transition-colors duration-200 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[hsl(var(--footer-foreground))]">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Careers",
                "Blog",
                "Case Studies",
                "FAQ",
                "Support"
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-sm text-[hsl(var(--footer-muted))] hover:text-accent transition-colors duration-200 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[hsl(var(--footer-foreground))]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[hsl(var(--footer-muted))]">
                  Hyderabad<br />
                  India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="tel:+1234567890" 
                  className="text-sm text-[hsl(var(--footer-muted))] hover:text-accent transition-colors duration-200"
                >
                  +91 8500199996
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:info@secureguard.com" 
                  className="text-sm text-[hsl(var(--footer-muted))] hover:text-accent transition-colors duration-200"
                >
                  srisamrakshaservices@hotmail.com
                </a>
              </li>
            </ul>
            
            {/* Emergency Contact */}
            <div className="mt-6 p-4 bg-[hsl(var(--footer-border))] rounded-lg border border-accent/20">
              <p className="text-xs font-semibold text-accent mb-1">24/7 Emergency</p>
              <a 
                href="tel:+1800911" 
                className="text-lg font-bold text-[hsl(var(--footer-foreground))] hover:text-accent transition-colors duration-200"
              >
                +91 8500199996
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[hsl(var(--footer-border))]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[hsl(var(--footer-muted))] text-center md:text-left">
              © {currentYear} SecureGuard Security Services. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <a 
                href="#" 
                className="text-sm text-[hsl(var(--footer-muted))] hover:text-accent transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-sm text-[hsl(var(--footer-muted))] hover:text-accent transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-sm text-[hsl(var(--footer-muted))] hover:text-accent transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;