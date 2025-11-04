import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import { Link } from "react-router-dom";
import founder from "@/assets/founder.JPG";
import Vamsi from "@/assets/Vamsi.jpeg";

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
          
            </div>
          </div>

         {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Founder Section */}
          <div className="space-y-6">
            {/* Founder Image */}
            <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-4 border-primary/30 flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              <img
                src={founder}
                alt="Founder"
                className="w-full h-full object-cover relative z-10"
              />
            </div>

            {/* Name and Title */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Mr. K. Naveen Reddy
              </h3>
              <p className="text-primary font-semibold text-lg">Founder</p>
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

          {/* Managing Director Section */}
          <div className="space-y-6">
            {/* MD Image Placeholder */}
            <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-4 border-primary/30 flex items-center justify-center overflow-hidden group">
  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>

  {/* Image fills entire circle */}
  <img
    src={Vamsi}
    alt="MD Photo"
    className="absolute inset-0 w-full h-full object-cover rounded-full"
  />

  {/* Text overlay (optional, appears on top) */}
  <div className="relative z-10 text-center">
    <p className="text-xs md:text-sm font-semibold text-primary"></p>
  </div>
</div>


            {/* Name and Title */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Mr. Vamshi Krishna Reddy
              </h3>
              <p className="text-primary font-semibold text-lg">Managing Director</p>
              <p className="text-sm text-muted-foreground mt-1">Sri Samraksha Security Services Pvt. Ltd.</p>
            </div>

            {/* Brief Description */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <p className="text-muted-foreground leading-relaxed mb-4">
                As Managing Director, Mr. Vamshi Krishna Reddy brings <span className="font-semibold text-foreground">strategic leadership</span> and 
                operational excellence to Sri Samraksha, ensuring the highest standards of security services and client satisfaction.
              </p>
              
              {/* Quote */}
              <div className="relative border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg mt-6">
                <p className="italic text-foreground font-medium text-sm md:text-base">
                  "Excellence in security comes from unwavering commitment to our clients and our team."
                </p>
                <p className="text-right text-sm text-muted-foreground mt-2">— Vamshi</p>
              </div>
            </div>

            {/* Read More Button */}
            {/* <div className="text-center pt-4">
              <Link to="/founderdetails">
                <Button
                  size="lg"
                  className="group bg-[#cf150e] hover:bg-[#b5120b] text-white font-semibold px-8 py-4 shadow-lg hover:shadow-[#cf150e]/40 transition-all duration-300"
                >
                  Read Full Story
                  <Award className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                </Button>
              </Link>
            </div> */}
          </div>
        </div>

       
        </div>
      </div>
    </section>
  );
};

export default Founder;
