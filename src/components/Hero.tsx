import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Home, Building2, Users, Car, Flame, UserPlus } from 'lucide-react';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      image: hero1,
      title: 'Professional Security Solutions',
      subtitle: 'Protecting What Matters Most',
    },
    {
      image: hero2,
      title: 'Corporate & Industrial Security',
      subtitle: 'Advanced Protection Systems',
    },
    {
      image: hero3,
      title: '24/7 Monitoring & Support',
      subtitle: 'Your Safety, Our Priority',
    },
  ];

  const services = [
    {
      icon: Shield,
      title: 'Corporate & Industrial Security',
      color: 'from-primary to-primary/80',
    },
    {
      icon: Home,
      title: 'Residential & Commercial Security',
      color: 'from-secondary to-secondary/80',
    },
    {
      icon: Building2,
      title: 'Facility & Housekeeping Management',
      color: 'from-accent to-accent/80',
    },
    {
      icon: Car,
      title: 'Valet Parking',
      color: 'from-primary to-primary/70',
    },
    {
      icon: Flame,
      title: 'Fire Safety',
      color: 'from-destructive to-destructive/80',
    },
    {
      icon: UserPlus,
      title: 'Outsourcing Manpower',
      color: 'from-secondary to-secondary/70',
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen">
      {/* Carousel */}
      <div className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`max-w-3xl transition-all duration-1000 delay-200 ${
                  index === currentSlide
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-10 opacity-0'
                }`}
              >
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 bg-accent/20 backdrop-blur-sm text-accent-foreground border border-accent/30 rounded-full text-sm font-bold uppercase tracking-wider">
                    Premium Security Services
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight drop-shadow-2xl">
                  {slide.title}
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl text-primary-foreground/95 mb-8 font-light leading-relaxed drop-shadow-lg">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="group px-8 py-4 bg-gradient-to-r from-accent via-accent to-accent/90 text-accent-foreground font-bold rounded-lg shadow-2xl shadow-accent/50 hover:shadow-accent/70 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                    <span className="relative z-10">Get Started Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/30 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </button>
                  <button className="px-8 py-4 bg-background/10 backdrop-blur-md text-primary-foreground font-bold rounded-lg border-2 border-primary-foreground/40 hover:bg-background/20 hover:border-primary-foreground/60 hover:scale-105 transition-all duration-300 shadow-xl">
                    Learn More
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 bg-background/30 backdrop-blur-md text-primary-foreground p-4 sm:p-5 rounded-full hover:bg-accent hover:scale-110 transition-all duration-300 group shadow-2xl border border-primary-foreground/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:-translate-x-1" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 bg-background/30 backdrop-blur-md text-primary-foreground p-4 sm:p-5 rounded-full hover:bg-accent hover:scale-110 transition-all duration-300 group shadow-2xl border border-primary-foreground/20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3 bg-background/20 backdrop-blur-md px-4 py-2.5 rounded-full border border-primary-foreground/20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentSlide(index);
              }}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? 'w-12 bg-accent shadow-lg shadow-accent/50'
                  : 'w-8 bg-primary-foreground/50 hover:bg-primary-foreground/70 hover:w-10'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="relative -mt-32 z-30 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background/98 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-10 md:p-14 border border-border/50">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                What We Offer
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Comprehensive Security Solutions
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Delivering excellence in protection and safety management across all sectors
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-muted/50 to-muted/30 p-8 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-3 border border-border/50 hover:border-accent/30"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl`}>
                      <Icon className="w-8 h-8 text-primary-foreground" />
                      <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="relative text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300 mb-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="relative text-sm text-muted-foreground">
                      Professional and reliable solutions tailored to your needs
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
