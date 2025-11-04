"use client";

import { Building2, Cctv, Wrench, Car, Flame, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    title: "Corporate and Industrial Security",
    description: "Comprehensive security solutions for corporate offices, industrial facilities, and manufacturing units with trained personnel and advanced systems.",
    link: "/service1"
  },
  {
    icon: Cctv,
    title: "Residential & Commercial Security",
    description: "Round-the-clock protection for residential complexes, commercial buildings, and retail spaces ensuring safety and peace of mind.",
    link: "/service3"
  },
  {
    icon: Wrench,
    title: "Facility & Housekeeping Management",
    description: "Professional facility management and housekeeping services maintaining cleanliness, hygiene, and operational efficiency.",
    link: "/service4"
  },
  {
    icon: Car,
    title: "Valet Parking",
    description: "Premium valet parking services for hotels, restaurants, events, and commercial establishments with courteous and trained staff.",
    link: "/service5"
  },
  {
    icon: Flame,
    title: "Fire Safety",
    description: "Complete fire safety solutions including prevention systems, emergency response training, and compliance management.",
    link: "/service6"
  },
  {
    icon: Users,
    title: "Outsourcing Man Power",
    description: "Reliable manpower outsourcing services providing skilled and unskilled workforce tailored to your business requirements.",
    link: "/service2"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Security Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive security and facility management solutions tailored to protect what matters most to you
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden p-0 hover:shadow-[var(--shadow-hover)] transition-all duration-500 animate-fade-in border-2 border-border hover:border-primary/50 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-secondary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-secondary/5 group-hover:to-primary/10 transition-all duration-700" />
              
              {/* Animated Border Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent animate-pulse" />
              </div>
              
              <div className="relative z-10 p-8">
                {/* Icon with Animated Ring */}
                <div className="mb-6 relative inline-flex">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 group-hover:scale-150" />
                  <div className="relative p-4 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 group-hover:from-primary/25 group-hover:to-secondary/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <service.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                {/* Plain <a> Link */}
                <a 
                  href={service.link} // Must start with /
                  className="inline-flex items-center text-primary font-semibold group/link hover:gap-3 transition-all duration-300"
                >
                  <span className="relative">
                    Explore Service
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover/link:w-full transition-all duration-300" />
                  </span>
                  <span className="text-xl group-hover/link:translate-x-2 transition-transform duration-300">→</span>
                </a>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
