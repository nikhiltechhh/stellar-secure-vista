import { ArrowLeft, Car, Shield, Users, Zap, Award, CheckCircle2, Phone } from "lucide-react";

const ValetParking = () => {
  const features = [
    { icon: Users, title: "Trained Valet Staff", desc: "Professional and courteous valet attendants" },
    { icon: Shield, title: "Vehicle Safety", desc: "Complete insurance coverage and secure parking" },
    { icon: Zap, title: "Efficient Management", desc: "Quick vehicle retrieval and seamless operations" },
    { icon: Award, title: "Customer Service", desc: "Premium service with attention to detail" }
  ];

  const benefits = [
    "Professional and uniformed valet attendants",
    "Comprehensive vehicle insurance coverage",
    "Advanced parking management system",
    "Quick and efficient vehicle retrieval",
    "Secure parking facilities",
    "Real-time vehicle tracking",
    "24/7 service availability",
    "Customer complaint resolution"
  ];

  const venues = [
    "Hotels & Resorts",
    "Wedding Venues",
    "Restaurants",
    "Shopping Malls",
    "Corporate Events",
    "Hospitals"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-[#cf150e] via-[#a01109] to-[#8b0e08]" />
        </div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-4 border-white rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-white rotate-45" />
        </div>
        
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center space-y-6 px-4 max-w-4xl">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4">
              <span className="text-white font-semibold flex items-center gap-2 justify-center">
                <Car className="w-4 h-4" />
                Premium Service
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl">
              Valet Parking Services
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              Professional Valet Solutions for Seamless Guest Experience
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#f9fafb" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#cf150e]/10 rounded-full border border-[#cf150e]/20">
                <Car className="w-4 h-4 text-[#cf150e]" />
                <span className="text-sm font-semibold text-[#cf150e]">Service Overview</span>
              </div>
              
              <h2 className="text-5xl font-bold bg-gradient-to-r from-[#cf150e] to-[#8b0e08] bg-clip-text text-transparent">
                Premium Valet Experience
              </h2>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p className="border-l-4 border-[#cf150e] pl-6 italic">
                  First impressions matter. Our professional valet parking services ensure your guests experience convenience and luxury from the moment they arrive at your establishment.
                </p>
                
                <p>
                  We provide trained, uniformed valet attendants who handle vehicles with care and professionalism. Our valet staff is skilled in managing high-traffic situations, ensuring smooth operations even during peak hours at events, hotels, restaurants, and commercial venues.
                </p>
                
                <p className="bg-[#cf150e]/5 p-6 rounded-lg border-l-4 border-[#cf150e]">
                  With comprehensive insurance coverage, advanced parking management systems, and a focus on customer satisfaction, we deliver valet services that enhance your guests' overall experience.
                </p>
              </div>
            </div>

            <div className="lg:sticky lg:top-8">
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Valet Service</h3>
                <div className="space-y-4">
                 <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
  <Phone className="w-6 h-6 text-[#cf150e]" />
  <div>
    <p className="text-sm text-gray-600">Call Us</p>
    <p className="font-semibold text-gray-900">+91 8500199996</p>
  </div>
</div>

<a href="tel:+918500199996" className="w-full block">
  <button className="w-full bg-[#cf150e] hover:bg-[#a01109] text-white px-6 py-4 rounded-lg transition-all duration-300 font-semibold">
    Request a Quote
  </button>
</a>

                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-[#cf150e] to-[#8b0e08] bg-clip-text text-transparent mb-4">
                Why Choose Our Valet Services
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Professional parking management with a personal touch
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:border-[#cf150e]/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="p-4 bg-[#cf150e]/10 rounded-xl w-fit mb-4 group-hover:bg-[#cf150e]/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-[#cf150e] group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Service Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#cf150e] flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#cf150e]/5 to-[#8b0e08]/5 p-8 rounded-2xl border border-[#cf150e]/20">
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Perfect For</h3>
              <div className="grid grid-cols-2 gap-4">
                {venues.map((venue, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 text-center hover:border-[#cf150e]/50 transition-all duration-300 hover:-translate-y-1"
                  >
                    <p className="font-medium text-gray-700">{venue}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default ValetParking;