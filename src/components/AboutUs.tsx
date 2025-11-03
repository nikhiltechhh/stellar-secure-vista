import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Award, Users, CheckCircle2 } from "lucide-react";
import securityGuardsImage from "@/assets/aboutpic.jpeg";

const AboutUs = () => {
  const highlights = [
    { icon: Shield, text: "24/7 Professional Security" },
    { icon: Award, text: "Certified & Trained Personnel" },
    { icon: Users, text: "Trusted by 500+ Clients" },
  ];

  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-background via-secondary/20 to-background overflow-hidden -mt-36">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 slide-in-left">
            <div className="inline-block">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Professional Security Services</span>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-gradient leading-tight">
              About Our Company
            </h2>
            
            <div className="space-y-4">
              <p className="text-foreground/80 text-lg leading-relaxed">
                <span className="font-semibold" style={{ color: '#cf150e' }}>Sri Samraksha Security Services Pvt. Ltd.</span> is a trusted name in professional security and facility management solutions. With a commitment to safety, discipline, and excellence, we deliver reliable protection services tailored to the unique needs of our clients across industries.
              </p>
              <p className="text-foreground/70 text-base leading-relaxed">
                Our team consists of highly trained, experienced, and verified security personnel who uphold the highest standards of integrity, vigilance, and professionalism.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover-lift group"
                >
                  <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/about">
                <Button 
                  size="lg" 
                className="bg-gradient-to-r from-[#cf150e] to-[#cf150e]/90 hover:from-[#cf150e]/90 hover:to-[#cf150e] text-white font-semibold px-8 py-6 text-base shadow-xl hover:shadow-2xl shadow-[#cf150e]/40 hover:shadow-[#cf150e]/60 transition-all duration-300 hover-lift group"
   >
                  Read More
                  <CheckCircle2 className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg"
               className="border-2 border-[#cf150e] text-[#cf150e] hover:bg-[#cf150e] hover:text-white font-semibold px-8 py-6 text-base transition-all duration-300 hover-lift"

                >
                  Our Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Image with Dynamic Effects */}
          <div className="relative slide-in-right group">
            {/* Animated Red Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-24 bg-gradient-to-b from-accent via-accent to-accent/80 -ml-6 md:-ml-10 hidden sm:block transform group-hover:scale-105 transition-transform duration-500 shadow-2xl" />
            
            {/* Decorative Corner */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-4 border-r-4 border-accent/50 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-4 border-l-4 border-primary/50 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative ml-6 md:ml-10 transform group-hover:scale-[1.02] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500" />
              <img
                src={securityGuardsImage}
                alt="Professional security guards on duty"
                className="relative w-full h-auto rounded-lg shadow-elegant object-cover transform group-hover:shadow-2xl transition-all duration-500"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 bg-card/95 backdrop-blur-sm p-4 rounded-lg shadow-2xl border border-border/50 float-animation">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/20 rounded-full">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Since</p>
                    <p className="text-xl font-bold text-primary">2007</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
