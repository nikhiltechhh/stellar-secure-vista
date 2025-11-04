import React from 'react';
import { Users, Award, BadgeCheck, Shield } from 'lucide-react';
import security from '@/assets/Security1.png';

const ChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round the clock assistance for all your security needs'
    },
    {
      icon: Award,
      title: 'Expert Employees',
      description: 'Highly trained and experienced security professionals'
    },
    {
      icon: BadgeCheck,
      title: 'Verified Service',
      description: 'Certified and background-checked security personnel'
    },
    {
      icon: Shield,
      title: 'Secured Service',
      description: 'Comprehensive protection with advanced security measures'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-red-500 to-red-600 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Image Placeholder */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] order-2 lg:order-1">
            <img
              src={security}
              alt="Security Guard"
              className="w-full h-full object-cover object-center rounded-lg "
            />
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-center lg:text-left text-white mb-12">
              Why Choose Us
            </h2>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center sm:items-start text-center sm:text-left group hover:transform hover:scale-105 transition-transform duration-300"
                  >
                    {/* Icon Container */}
                    <div className="mb-4 p-5 bg-white bg-opacity-10 rounded-full group-hover:bg-opacity-20 transition-all duration-300">
                      <Icon className="w-10 h-10 md:w-12 md:h-12 text-white stroke-[1.5]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white text-opacity-90 text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ChooseUs;