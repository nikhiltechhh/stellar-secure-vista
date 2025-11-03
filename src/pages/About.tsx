import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Target, Eye, TrendingUp, Award, Users2, Building2, Home, Factory, Calendar } from "lucide-react";
import aboutHeroImage from "@/assets/about2.jpeg";
import securityGuardsImage from "@/assets/aboutpic.jpeg";

const About = () => {
  const services = [
    { icon: Building2, title: "Corporate Security", desc: "Comprehensive protection for offices" },
    { icon: Home, title: "Residential Security", desc: "Community safety solutions" },
    { icon: Factory, title: "Industrial Security", desc: "24/7 industrial protection" },
    { icon: Calendar, title: "Event Security", desc: "Professional event management" },
  ];

  const reasons = [
    { icon: Shield, text: "Highly trained and verified security personnel" },
    { icon: TrendingUp, text: "Modern technology-driven security solutions" },
    { icon: Award, text: "Customized services for diverse industries" },
    { icon: Users2, text: "24/7 support and rapid response teams" },
  ];

  return (
    <div className="min-h-screen bg-background " >
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutHeroImage}
            alt="Sri Samraksha Security Services"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[3000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-accent/60" />
        </div>
        
        {/* Animated Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-4 border-white rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-white rotate-45" />
        </div>
        
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center space-y-6 animate-fade-in px-4 max-w-4xl">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4">
              <span className="text-white font-semibold">Established 2007</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              Your Trusted Partner in Security Excellence
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <div className="text-center px-6">
                <p className="text-4xl font-bold text-white">500+</p>
                <p className="text-sm text-white/80">Happy Clients</p>
              </div>
         
             
              <div className="w-px bg-white/30" />
              <div className="text-center px-6">
                <p className="text-4xl font-bold text-white">24/7</p>
                <p className="text-sm text-white/80">Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="hsl(var(--background))" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-background to-secondary/10">
        <div className="max-w-7xl mx-auto">
          <Link to="/">
            <Button variant="outline" className="mb-12 group hover:border-primary hover:text-primary transition-all duration-300">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-2 transition-transform duration-300" />
              Back to Home
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Full Content */}
            <div className="space-y-8 slide-in-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Who We Are</span>
              </div>
              
              <h2 className="text-5xl font-bold text-gradient">
                About Our Company
              </h2>
              
              <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
                <p className="border-l-4 border-accent pl-6 italic">
                  Sri Samraksha Security Services Pvt. Ltd. is a trusted name in professional security and facility management solutions. With a commitment to safety, discipline, and excellence, we deliver reliable protection services tailored to the unique needs of our clients across industries.
                </p>
                
                <p>
                  Our team consists of highly trained, experienced, and verified security personnel who uphold the highest standards of integrity, vigilance, and professionalism. Whether it's safeguarding corporate offices, residential communities, industrial premises, or events, we ensure complete peace of mind through our proactive and technology-driven security approach.
                </p>
                
                <p className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  At Sri Samraksha, we believe that true security goes beyond presence — it's about creating a safe environment where businesses and communities can thrive. Backed by modern management systems and continuous training, we strive to set benchmarks in safety and customer satisfaction.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative slide-in-right lg:sticky lg:top-8 group">
              <div className="absolute left-0 top-0 bottom-0 w-20 md:w-24 bg-gradient-to-b from-accent via-accent to-accent/80 -ml-6 md:-ml-10 hidden sm:block transform group-hover:scale-105 transition-transform duration-500 shadow-2xl" />
              
              <div className="relative ml-6 md:ml-10 space-y-6">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <img
                    src={securityGuardsImage}
                    alt="Professional security guards on duty"
                    className="relative w-full h-auto rounded-lg shadow-elegant object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="bg-gradient-to-br from-card to-card/50 p-8 rounded-xl shadow-elegant border border-border hover-lift backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Eye className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">
                        Our Mission
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">
                        To provide world-class security services that protect people, property, and peace of mind through professionalism, innovation, and unwavering commitment to excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gradient mb-4">Our Services</h3>
              <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                Comprehensive security solutions tailored to your needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-card to-card/50 rounded-xl border border-border hover:border-primary/50 shadow-lg hover-lift group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-4 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-foreground/60">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-border/50">
            <h3 className="text-4xl font-bold text-gradient mb-8 text-center">Why Choose Us?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card/80 backdrop-blur-sm rounded-xl hover-lift group"
                >
                  <div className="p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                    <reason.icon className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-foreground/80 font-medium pt-2 group-hover:text-primary transition-colors">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
