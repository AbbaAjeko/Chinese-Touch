import React from 'react';
import { Star, Clock, Gem, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Star className="w-8 h-8 text-[#D41F26]" />,
      title: "Expert Therapists",
      desc: "Authentic Chinese-trained professionals."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#D41F26]" />,
      title: "Clean & Serene",
      desc: "Impeccably hygienic, peaceful environment."
    },
    {
      icon: <Gem className="w-8 h-8 text-[#D41F26]" />,
      title: "Affordable Luxury",
      desc: "Premium experience at competitive rates."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#D41F26]" />,
      title: "Open Daily",
      desc: "10:00 AM – 10:00 PM, 7 Days a Week."
    }
  ];

  return (
    <section className="py-16 bg-[#FAFAF9] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center p-6 hover:bg-white hover:shadow-lg rounded-lg transition-all duration-300 group overflow-hidden">
              {/* Top gold border accent on hover */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-[#CA8A04] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="mb-4 p-3 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
                {feature.icon}
              </div>
              <h4 className="text-stone-900 font-serif font-bold text-lg mb-2">{feature.title}</h4>
              <p className="text-stone-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;