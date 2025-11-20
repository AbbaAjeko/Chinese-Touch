import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    {
      url: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800&auto=format&fit=crop",
      alt: "Woman enjoying a relaxing back massage"
    },
    {
      url: "https://images.unsplash.com/photo-1537368910025-6cd63513b8af?q=80&w=800&auto=format&fit=crop",
      alt: "Man receiving therapeutic back massage"
    },
    {
      url: "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=800&auto=format&fit=crop",
      alt: "Detailed foot reflexology session"
    },
    {
      url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
      alt: "Woman relaxing in a serene spa environment"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-20 bg-[#FAFAF9] bg-pattern relative overflow-hidden">
      {/* Decorative Background Element - clean white wash over pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white -skew-x-12 transform translate-x-1/4 z-0 opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#CA8A04]"></div>
              <span className="text-[#CA8A04] uppercase tracking-widest text-sm font-semibold">Who We Are</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-6">
              Restoring Balance Through <br />
              <span className="italic text-[#D41F26] font-medium">Ancient Traditions</span>
            </h2>
            
            <p className="text-stone-600 text-lg leading-relaxed mb-6 font-light">
              {BUSINESS_INFO.name} brings authentic Chinese healing techniques to the heart of Dar es Salaam. Our sanctuary at Mbezi Beach is designed to transport you away from the bustling city into a state of pure relaxation.
            </p>
            
            <p className="text-stone-500 leading-relaxed mb-8">
              Our certified therapists specialize in Tui Na, acupressure, deep tissue, and relaxation massage. We believe in a holistic approach where physical touch helps to release tension, improve circulation, and promote overall wellness.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-stone-100 shadow-sm">
                <h4 className="text-[#D41F26] font-bold text-2xl mb-1">5+ Years</h4>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Experience</p>
              </div>
              <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-stone-100 shadow-sm">
                <h4 className="text-[#D41F26] font-bold text-2xl mb-1">1000+</h4>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Image Carousel (Replaces Grid) */}
          <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl group bg-stone-200">
             {images.map((img, index) => (
               <div 
                 key={index}
                 className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                   index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                 }`}
               >
                 <img 
                   src={img.url} 
                   alt={img.alt} 
                   className="w-full h-full object-cover"
                 />
                 {/* Subtle overlay gradient for contrast at bottom */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
               </div>
             ))}

             {/* Navigation Arrows */}
             <button 
               onClick={prevSlide}
               className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-[#D41F26] transition-all duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 shadow-lg border border-white/30"
               aria-label="Previous Image"
             >
               <ChevronLeft size={24} />
             </button>
             
             <button 
               onClick={nextSlide}
               className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-[#D41F26] transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 shadow-lg border border-white/30"
               aria-label="Next Image"
             >
               <ChevronRight size={24} />
             </button>

             {/* Indicators */}
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
               {images.map((_, index) => (
                 <button
                   key={index}
                   onClick={() => setCurrentSlide(index)}
                   className={`h-1.5 rounded-full transition-all duration-500 shadow-sm ${
                     index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                   }`}
                   aria-label={`Go to slide ${index + 1}`}
                 />
               ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;