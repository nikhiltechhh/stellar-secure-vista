import { Shield, Clock, Award, Users, Lock, HeadphonesIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Advanced Security Systems",
    description: "State-of-the-art technology with AI-powered threat detection and 24/7 monitoring for complete peace of mind."
  },
  {
    icon: Clock,
    title: "24/7 Rapid Response",
    description: "Our elite team responds within minutes. Round-the-clock protection ensuring your safety never sleeps."
  },
  {
    icon: Award,
    title: "Certified Professionals",
    description: "Licensed, trained, and background-checked security experts with decades of combined experience."
  },
  {
    icon: Users,
    title: "Trusted by Thousands",
    description: "Over 10,000 satisfied clients across residential, commercial, and industrial sectors nationwide."
  },
  {
    icon: Lock,
    title: "Comprehensive Coverage",
    description: "From surveillance to access control, we provide end-to-end security solutions tailored to your needs."
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Personal account manager and 24/7 customer support team always ready to assist you."
  }
];

const stats = [
  { value: "11+", label: "Years Experience" },
  { value: "100+", label: "Clients" },
  { value: "99.9%", label: "Uptime Rate" },
  { value: "24/7", label: "Monitoring" }
];

const Choose = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Our Security Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-leading protection backed by cutting-edge technology and unwavering commitment to your safety
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-[var(--shadow-card)] transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group p-8 hover:shadow-[var(--shadow-hover)] transition-all duration-300 animate-fade-in border-border hover:border-primary/50 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Choose;
