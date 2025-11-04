import { Button } from "@/components/ui/button";
import { Award, ArrowLeft, CheckCircle, Target, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import founderImg from "@/assets/Founder.jpg";

const FounderDetail = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          

          <div className="grid lg:grid-cols-2 gap-12 my-20 items-center">
            {/* Left: Image */}
            <div className="relative animate-fade-in">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl blur-2xl"></div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl transform rotate-3 scale-105"></div>
                <div className="relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-2xl border-4 border-primary/30 p-12 h-[450px] flex items-center justify-center shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent"></div>
                  <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden relative z-10 group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={founderImg}
                      alt="Founder"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-8 left-0 right-0 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <div className="inline-block bg-background/95 backdrop-blur-sm border-2 border-primary/40 px-8 py-3 rounded-full shadow-lg">
                      <p className="text-lg font-bold text-primary flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        Founder & Visionary Leader
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Title & Info */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold border border-primary/20">
                Leadership Profile
              </div>
              
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
                  Mr. Naveen Reddy
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-primary to-primary/50 rounded-full mb-6"></div>
              </div>
              
              <div className="space-y-2">
                <p className="text-2xl text-primary font-bold">
                  Founder
                </p>
                <p className="text-lg text-muted-foreground">
                  Sri Samraksha Security Services Private Limited
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/10 rounded-xl blur-sm group-hover:blur-md transition-all"></div>
                  <div className="relative flex items-center gap-3 bg-card border-2 border-primary/30 px-5 py-3 rounded-xl group-hover:border-primary/50 transition-all shadow-md">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    <span className="font-semibold text-foreground">10+ Years Experience</span>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/10 rounded-xl blur-sm group-hover:blur-md transition-all"></div>
                  <div className="relative flex items-center gap-3 bg-card border-2 border-primary/30 px-5 py-3 rounded-xl group-hover:border-primary/50 transition-all shadow-md">
                    <Award className="w-6 h-6 text-primary" />
                    <span className="font-semibold text-foreground">Industry Expert</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed pt-4">
                A visionary leader with a proven track record of excellence in security management, 
                dedicated to setting new standards in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-10">
            {/* Main Story */}
            <div className="space-y-8">
              {/* Journey Section */}
              <div className="group relative animate-fade-in -mt-24">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
                <div className="relative bg-card border border-border rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Target className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">
                      The Journey
                    </h2>
                  </div>
                  <div className="space-y-5 text-muted-foreground leading-relaxed text-base">
                    <p className="relative pl-4 border-l-2 border-primary/30">
                      <span className="font-bold text-foreground">Mr. Naveen Reddy</span>, the Founder of 
                      Sri Samraksha Security Services Private Limited, brings over <span className="font-bold text-primary">10 years 
                      of hands-on experience</span> in the security and facility management industry.
                    </p>
                    <p className="relative pl-4 border-l-2 border-primary/30">
                      Before establishing Sri Samraksha, he worked as a <span className="font-bold text-foreground">Managing Partner</span> in 
                      a reputed security agency, where he successfully managed large teams, developed strong client relationships, 
                      and ensured high operational standards across multiple projects and locations.
                    </p>
                    <p className="relative pl-4 border-l-2 border-primary/30">
                      His extensive field experience gave him deep insights into the challenges faced by both security personnel 
                      and clients, which became the foundation for creating a company that truly understands and addresses real-world 
                      security needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision Section */}
              <div className="group relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
                <div className="relative bg-card border border-border rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Heart className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">
                      The Vision
                    </h2>
                  </div>
                  <div className="space-y-5 text-muted-foreground leading-relaxed text-base">
                    <p className="relative pl-4 border-l-2 border-primary/30">
                      Driven by a vision to deliver <span className="font-bold text-foreground">trustworthy, disciplined, 
                      and professional security solutions</span>, he founded Sri Samraksha Security Services Pvt. Ltd. to set 
                      new benchmarks in reliability and client satisfaction.
                    </p>
                    <p className="relative pl-4 border-l-2 border-primary/30">
                      The company was built on core principles that were often overlooked in the industry—putting people first, 
                      maintaining transparency, and treating security as a service that demands both excellence and empathy.
                    </p>
                    <p className="relative pl-4 border-l-2 border-primary/30">
                      Under his leadership, Sri Samraksha stands committed to <span className="font-bold text-foreground">integrity, 
                      transparency, and continuous improvement</span>, ensuring complete safety and peace of mind for every client, 
                      from small businesses to large corporate establishments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote Highlight */}
              <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-l-4 border-primary rounded-2xl p-10 shadow-xl">
                  <div className="absolute top-6 left-6 text-7xl text-primary/30 font-serif leading-none">"</div>
                  <div className="relative pl-10">
                    <p className="text-2xl md:text-3xl font-bold text-foreground italic leading-relaxed mb-6">
                      Security is not just about protection — it's about trust, discipline, and dedication.
                    </p>
                    <div className="flex items-center justify-end gap-3">
                      <div className="h-px w-12 bg-primary/50"></div>
                      <p className="text-lg text-muted-foreground font-semibold">
                        Naveen Reddy, <span className="text-primary">Founder</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leadership Philosophy */}
              <div className="group relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
                <div className="relative bg-card border border-border rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <CheckCircle className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">
                      Leadership Philosophy
                    </h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { title: "Client-First Approach", desc: "Every decision is made with client safety and satisfaction as the top priority" },
                      { title: "Team Development", desc: "Investing in training and welfare of security personnel to build a motivated workforce" },
                      { title: "Operational Excellence", desc: "Maintaining the highest standards through regular audits and quality checks" },
                      { title: "Innovation", desc: "Embracing modern security technologies while preserving the human touch" },
                      { title: "Ethical Practices", desc: "Conducting business with complete transparency and integrity" },
                      { title: "Long-term Partnerships", desc: "Building lasting relationships based on trust and consistent performance" }
                    ].map((item, index) => (
                      <div key={index} className="group/item relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl opacity-0 group-hover/item:opacity-100 transition-all blur-sm"></div>
                        <div className="relative bg-muted/50 rounded-xl p-5 border border-border group-hover/item:border-primary/30 transition-all">
                          <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 lg:sticky lg:top-6 self-start">
              {/* Image Placeholder */}
              <div className="relative group animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              
              </div>

              {/* Key Achievements */}
              <div className="relative group animate-fade-in " style={{ animationDelay: '0.5s' }}>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
                <div className="relative bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="font-bold text-foreground text-xl mb-6 flex items-center gap-2">
                    <Award className="w-6 h-6 text-primary" />
                    Key Milestones
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "10+ years in security industry",
                      "Former Managing Partner",
                      "Founded Sri Samraksha",
                      "500+ satisfied clients",
                      "Zero-incident track record",
                      "Industry recognition awards"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 group/item">
                        <div className="mt-0.5 p-1 bg-primary/10 rounded-full group-hover/item:bg-primary/20 transition-all">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        </div>
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="relative group animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
                <div className="relative bg-gradient-to-br from-primary/15 to-primary/5 border-2 border-primary/30 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
                  <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-4">
                    <Award className="w-14 h-14 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-xl mb-3">Get in Touch</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Interested in our security solutions? Let's discuss how we can help.
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  
    </div>
  );
};

export default FounderDetail;
