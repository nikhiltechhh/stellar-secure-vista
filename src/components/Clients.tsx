import React from 'react';

const Clients = () => {
  // Real Hyderabad-based companies with their logos
  const clients = [
    
    {
      name: 'Sunrise Hospitals',
      logo: 'https://sunrisehospitalskakinada.in/wp-content/uploads/2024/10/Asset-3.png',
      alt: 'Sunrise Hospitals Logo'
    },
   
    {
      name: 'Bajrang Jwellers',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpFN6RsPwrCzoBShuxhmvqyOYZlqy2GkFG8w&s',
      alt: 'Infosys Logo'
    },
    
    
    {
      name: 'Vijetha Hospitals',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbLHlZ38iYRTWK1q6TUU9cwBocw_sI3Ppi9g&s',
      alt: 'Amazon Logo'
    },
    {
      name: 'Balaji Jwellerys',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZzqVKgGLCT8DeyIlSIdz15XF1OvHNaYX7dWx4oDnoyiuJwGT8IsyeeKjZ7rTxoeYQAo&usqp=CAU',
      alt: 'Microsoft Logo'
    },
   
  ];

  // Duplicate clients for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className="w-full py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to partner with some of Hyderabad's most innovative organizations
          </p>
        </div>

        {/* Sliding Logos Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Logos Slider */}
          <div className="group relative flex overflow-hidden py-8">
            <div className="flex animate-scroll group-hover:pause-animation">
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 mx-6 sm:mx-8 md:mx-12"
                >
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8 w-40 h-28 sm:w-48 sm:h-32 flex items-center justify-center group-hover:scale-105">
                    <img
                      src={client.logo}
                      alt={client.alt}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .pause-animation {
          animation-play-state: paused;
        }

        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Clients;