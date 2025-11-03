import { ArrowLeft, Flame, FileText, Wrench, GraduationCap, AlertTriangle, CheckCircle2, Phone } from "lucide-react";

const FireSafety = () => {
  const features = [
    { icon: FileText, title: "Fire Safety Audits", desc: "Comprehensive assessment of fire safety compliance" },
    { icon: Wrench, title: "Equipment Installation", desc: "Installation and maintenance of fire safety systems" },
    { icon: GraduationCap, title: "Emergency Training", desc: "Fire safety training and evacuation drills" },
    { icon: AlertTriangle, title: "Compliance Support", desc: "Ensuring adherence to fire safety regulations" }
  ];

  const benefits = [
    "Complete fire risk assessment",
    "Fire extinguisher installation & maintenance",
    "Smoke detector and alarm systems",
    "Emergency evacuation planning",
    "Fire safety training programs",
    "Fire NOC assistance",
    "Annual maintenance contracts",
    "24/7 emergency response support"
  ];

  const sectors = [
    "Commercial Buildings",
    "Industrial Plants",
    "Hospitals",
    "Schools & Colleges",
    "Hotels & Restaurants",
    "Residential Complexes"
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
                <Flame className="w-4 h-4" />
                Safety First
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl">
              Fire Safety Services
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              Comprehensive Fire Protection & Prevention Solutions
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
          <button className="mb-12 px-4 py-2 border border-gray-300 rounded-lg hover:border-[#cf150e] hover:text-[#cf150e] transition-all duration-300 flex items-center gap-2 group bg-white">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-2 transition-transform duration-300" />
            Back to Services
          </button>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#cf150e]/10 rounded-full border border-[#cf150e]/20">
                <Flame className="w-4 h-4 text-[#cf150e]" />
                <span className="text-sm font-semibold text-[#cf150e]">Service Overview</span>
              </div>
              
              <h2 className="text-5xl font-bold bg-gradient-to-r from-[#cf150e] to-[#8b0e08] bg-clip-text text-transparent">
                Complete Fire Safety Solutions
              </h2>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p className="border-l-4 border-[#cf150e] pl-6 italic">
                  Fire safety is not just a regulatory requirement—it's a critical responsibility to protect lives and property. Our comprehensive fire safety services help you prevent, prepare for, and respond to fire emergencies effectively.
                </p>
                
                <p>
                  We provide end-to-end fire safety solutions including risk assessments, equipment installation, regular maintenance, compliance support, and emergency training. Our certified professionals ensure your facility meets all fire safety standards and regulations.
                </p>
                
                <p className="bg-[#cf150e]/5 p-6 rounded-lg border-l-4 border-[#cf150e]">
                  From fire extinguishers and alarm systems to evacuation planning and staff training, we deliver integrated fire safety services that create a secure environment for your employees, customers, and assets.
                </p>
              </div>
            </div>

            <div className="lg:sticky lg:top-8">
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule Fire Audit</h3>
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
                Our Fire Safety Services
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Comprehensive solutions for fire prevention and protection
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
              <h3 className="text-3xl font-bold mb-6 text-gray-900">What We Provide</h3>
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
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Sectors We Serve</h3>
              <div className="grid grid-cols-2 gap-4">
                {sectors.map((sector, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 text-center hover:border-[#cf150e]/50 transition-all duration-300 hover:-translate-y-1"
                  >
                    <p className="font-medium text-gray-700">{sector}</p>
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

export default FireSafety;