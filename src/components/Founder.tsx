import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import { Link } from "react-router-dom";
import founder from "@/assets/Founder.jpg";

const Founder = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Founder
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-lg:grid-cols-3 gap-8 items-center">
          {/* Left Image Placeholder */}
          <div className="hidden lg:block">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg transform group-hover:scale-105 transition-transform duration-300"></div>
              {/* <div className="relative bg-muted/50 border-2 border-primary/20 rounded-lg p-8 h-[400px] flex flex-col items-center justify-center">
                <Shield className="w-24 h-24 text-primary mb-4" />
                <p className="text-center text-sm text-muted-foreground font-medium">
                  10+ Years of Excellence
                </p>
              </div> */}
            </div>
          </div>

          {/* Center Content */}
          <div className="lg:col-span-1 space-y-6">
            {/* Founder Image Placeholder */}
            <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-4 border-primary/30 flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              <img
                src={founder}
                alt="Founder"
                className="w-full h-full object-cover relative z-10"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-xs md:text-sm font-semibold text-primary">Founder Photo</p>
              </div>
            </div>

            {/* Name and Title */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Mr. Naveen Reddy
              </h3>
              <p className="text-primary font-semibold text-lg">Founder & Managing Director</p>
              <p className="text-sm text-muted-foreground mt-1">Sri Samraksha Security Services Pvt. Ltd.</p>
            </div>

            {/* Brief Description */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over <span className="font-semibold text-foreground">10 years of hands-on experience</span> in security 
                and facility management, Mr. Naveen Reddy founded Sri Samraksha to deliver trustworthy, 
                disciplined, and professional security solutions.
              </p>
              
              {/* Quote */}
              <div className="relative border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg mt-6">
                <p className="italic text-foreground font-medium text-sm md:text-base">
                  "Security is not just about protection — it's about trust, discipline, and dedication."
                </p>
                <p className="text-right text-sm text-muted-foreground mt-2">— Naveen Reddy</p>
              </div>
            </div>

            {/* Read More Button */}
            <div className="text-center pt-4">
              <Link to="/founderdetails">
                <Button
  size="lg"
  className="group bg-[#cf150e] hover:bg-[#b5120b] text-white font-semibold px-8 py-4 shadow-lg hover:shadow-[#cf150e]/40 transition-all duration-300"
>
  Read Full Story
  <Award className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
</Button>

              </Link>
            </div>
          </div>

          {/* Right Image Placeholder */}
          {/* <div className="hidden lg:block">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 to-primary/5 rounded-lg transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-muted/50 border-2 border-primary/20 rounded-lg p-8 h-[400px] flex flex-col items-center justify-center">
                <Award className="w-24 h-24 text-primary mb-4" />
                <p className="text-center text-sm text-muted-foreground font-medium">
                  Trusted by Leading Organizations
                </p>
              </div>
            </div>
          </div> */}
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
          <div className="text-center p-4 bg-card rounded-lg border border-border">
            <p className="text-3xl font-bold text-primary">10+</p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border border-border">
            <p className="text-3xl font-bold text-primary">500+</p>
            <p className="text-sm text-muted-foreground">Clients Served</p>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border border-border">
            <p className="text-3xl font-bold text-primary">100%</p>
            <p className="text-sm text-muted-foreground">Satisfaction</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Founder;
