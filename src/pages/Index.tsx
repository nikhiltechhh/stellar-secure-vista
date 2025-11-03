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
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutUs />
      <Choose />
      <Services />
      <Gallery />
      <Founder />
      <Clients />
      <Footer />
    </div>
  );
};

export default Index;
