import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Choose from '@/components/Choose';
import Services from '@/components/Services';
import { Gallery } from '@/components/Gallery';
import Founder from '@/components/Founder';
import Clients from '@/components/Clients';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();

  // Smooth scroll to section when navigating to /#section
  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        // slight delay ensures DOM is ready
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Header />
      <Hero />

      {/* Add IDs that match your Header nav hrefs */}
      <section id="about">
        <AboutUs />
      </section>

      <section id="choose">
        <Choose />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="founder">
        <Founder />
      </section>

      <section id="clients">
        <Clients />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default Index;
