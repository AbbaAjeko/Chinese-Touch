import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { ChevronRight } from 'lucide-react';
import { useToast } from './ToastContext';

const Hero: React.FC = () => {
  const { showToast } = useToast();

  const handleBooking = () => {
    showToast("Opening WhatsApp to book your session...");
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2000&auto=format&fit=crop"
          alt="Relaxing Spa Atmosphere"
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability - increased opacity for better contrast */}
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#FAFAF9]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-16">
        <div className="inline-block mb-4 px-4 py-1 border border-white/30 rounded-full bg-white/10 backdrop-blur-md">
           <span className="text-[#F1C40F] text-xs md:text-sm tracking-[0.2em] uppercase font-semibold shadow-black drop-shadow-sm">
            Dar es Salaam's Premier Spa
           </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-serif drop-shadow-lg">
          Authentic <span className="text-[#D41F26]">Chinese</span> Massage Therapy
        </h1>
        
        <p className="text-stone-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
          Relieve stress, restore balance, and rejuvenate your body with traditional Tui Na & therapeutic techniques in a serene environment.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleBooking}
            className="group relative px-8 py-4 bg-[#D41F26] text-white font-bold text-sm uppercase tracking-widest overflow-hidden rounded-sm transition-all hover:bg-red-700 w-full sm:w-auto flex items-center justify-center gap-2 shadow-lg"
          >
            <span className="relative z-10">Book via WhatsApp</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#services"
            className="px-8 py-4 border border-white text-white hover:bg-white hover:text-black font-bold text-sm uppercase tracking-widest rounded-sm transition-all w-full sm:w-auto shadow-lg"
          >
            View Services
          </a>
        </div>
      </div>
      
      {/* Decorative bottom separator blended to light bg */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFAF9] to-transparent z-20"></div>
    </section>
  );
};

export default Hero;
