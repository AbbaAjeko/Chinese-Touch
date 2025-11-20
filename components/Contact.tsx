import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { useToast } from './ToastContext';

const Contact: React.FC = () => {
  const { showToast } = useToast();

  const handleBooking = () => {
    showToast("Launching WhatsApp chat...");
  };

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[#FAFAF9] rounded-xl overflow-hidden shadow-xl border border-stone-100">
          
          {/* Contact Info */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="text-[#CA8A04] uppercase tracking-widest text-sm font-bold mb-2">Visit Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">
              Contact & Location
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm border border-stone-100">
                  <MapPin className="text-[#D41F26]" size={24} />
                </div>
                <div>
                  <h4 className="text-stone-900 font-bold text-lg mb-1">Our Address</h4>
                  <p className="text-stone-600 leading-relaxed max-w-xs">
                    {BUSINESS_INFO.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm border border-stone-100">
                  <Clock className="text-[#D41F26]" size={24} />
                </div>
                <div>
                  <h4 className="text-stone-900 font-bold text-lg mb-1">Opening Hours</h4>
                  <p className="text-stone-600">Monday – Sunday</p>
                  <p className="text-stone-600">10:00 AM – 10:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm border border-stone-100">
                  <Phone className="text-[#D41F26]" size={24} />
                </div>
                <div>
                  <h4 className="text-stone-900 font-bold text-lg mb-1">Get in Touch</h4>
                  <a 
                    href={BUSINESS_INFO.whatsappUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleBooking}
                    className="text-stone-600 hover:text-[#D41F26] transition-colors block"
                  >
                    WhatsApp: {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <span className="text-xs text-[#CA8A04]">Tap to chat</span>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a 
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleBooking}
                className="w-full block text-center bg-[#D41F26] hover:bg-red-700 text-white font-bold py-4 px-8 uppercase tracking-widest rounded-sm transition-colors duration-300 shadow-lg"
              >
                Book Session Now
              </a>
            </div>
          </div>

          {/* Map - Standard view, no invert */}
          <div className="h-[400px] lg:h-auto w-full bg-stone-200 relative">
            <iframe
              src={BUSINESS_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%)" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chinese Touch Location"
              className="opacity-100"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
