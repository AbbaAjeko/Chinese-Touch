import React from 'react';
import { BUSINESS_INFO, COLORS } from '../constants';
import { Flame, Droplets, Zap, Moon, Footprints, CircleDot } from 'lucide-react';
import { useToast } from './ToastContext';

interface ServiceProps {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
}

const servicesData: ServiceProps[] = [
  {
    title: "Full Body Chinese Massage",
    description: "Traditional Tui Na techniques to unblock qi and improve energy flow. Available in 60 or 90 minutes.",
    price: "80,000 – 120,000 TZS",
    icon: <Zap size={28} className="text-[#CA8A04]" />
  },
  {
    title: "Therapeutic Deep Tissue",
    description: "Intense pressure focusing on the deepest layers of muscle tissue to release chronic muscle tension.",
    price: "90,000 – 150,000 TZS",
    icon: <Flame size={28} className="text-[#CA8A04]" />
  },
  {
    title: "Foot Reflexology",
    description: "Ancient healing art applying pressure to specific points on the feet that correspond to body organs.",
    price: "50,000 – 80,000 TZS",
    icon: <Footprints size={28} className="text-[#CA8A04]" />
  },
  {
    title: "Head, Neck & Shoulder",
    description: "Focusing on the areas where we hold the most stress. Perfect for quick relief from office fatigue.",
    price: "40,000 – 70,000 TZS",
    icon: <Moon size={28} className="text-[#CA8A04]" />
  },
  {
    title: "Cupping Therapy",
    description: "Traditional suction technique to stimulate blood flow, remove toxins, and relieve pain.",
    price: "Add-on or Standalone",
    icon: <CircleDot size={28} className="text-[#CA8A04]" />
  },
  {
    title: "Hot Stone Massage",
    description: "Smooth, heated stones are placed on specific parts of the body to melt away tension.",
    price: "100,000 – 160,000 TZS",
    icon: <Droplets size={28} className="text-[#CA8A04]" />
  }
];

const Services: React.FC = () => {
  const { showToast } = useToast();

  const handleBooking = (serviceName: string) => {
    showToast(`Opening WhatsApp to book: ${serviceName}`);
  };

  return (
    <section id="services" className="py-24 bg-[#FAFAF9] bg-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#CA8A04] uppercase tracking-widest text-sm font-bold">Our Menu</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mt-2 mb-6">
            Therapeutic Services
          </h2>
          <div className="w-24 h-1 bg-[#D41F26] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-lg relative overflow-hidden hover:-translate-y-2"
            >
              {/* Hover Accent Top Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D41F26] to-[#CA8A04] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="mb-6 bg-stone-50 w-16 h-16 rounded-full flex items-center justify-center border border-stone-100 group-hover:bg-[#FFF9C4] group-hover:border-[#F1C40F]/50 transition-all duration-500">
                  <div className="transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(241,196,15,0.8)]">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-3 group-hover:text-[#D41F26] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-stone-500 mb-5 text-[13px] leading-relaxed min-h-[60px]">
                  {service.description}
                </p>
                
                <div className="pt-6 border-t border-stone-100 flex flex-col gap-4">
                  <span className="text-[#CA8A04] font-medium text-lg font-serif">
                    {service.price}
                  </span>
                  
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleBooking(service.title)}
                    className="w-full py-3 bg-white border border-[#D41F26] text-[#D41F26] text-center text-xs uppercase tracking-widest font-bold hover:bg-[#D41F26] hover:text-white transition-all duration-300 rounded-sm"
                  >
                    Book This Service
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;