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
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50 z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className={`max-w-3xl transition-all duration-1000 delay-300 ${
                    index === currentSlide
                      ? 'translate-x-0 opacity-100'
                      : '-translate-x-10 opacity-0'
                  }`}
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl sm:text-2xl md:text-3xl text-primary-foreground/90 mb-8 font-light">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-accent-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                      Get Started
                    </button>
                    <button className="px-8 py-4 bg-background/10 backdrop-blur-sm text-primary-foreground font-semibold rounded-lg border-2 border-primary-foreground/30 hover:bg-background/20 hover:border-primary-foreground/50 transition-all duration-300">
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
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 bg-background/20 backdrop-blur-sm text-primary-foreground p-3 sm:p-4 rounded-full hover:bg-background/30 transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 bg-background/20 backdrop-blur-sm text-primary-foreground p-3 sm:p-4 rounded-full hover:bg-background/30 transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentSlide(index);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-12 bg-accent'
                  : 'w-6 bg-background/50 hover:bg-background/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="relative -mt-32 z-30 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-foreground">
              Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-muted to-muted/50 p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                         style={{ background: `linear-gradient(135deg, var(--accent), var(--primary))` }}></div>
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
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
