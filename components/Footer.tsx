import React from 'react';
import { Flower, Instagram } from 'lucide-react';
import { COLORS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-6">
          <Flower size={24} color={COLORS.red} fill={COLORS.red} />
          <span className="text-lg font-bold font-serif tracking-wide text-white">
            CHINESE TOUCH
          </span>
        </div>
        
        <div className="flex space-x-6 mb-8">
          <a 
            href="https://www.instagram.com/touchbeautyspatz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#D41F26] transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
        </div>
        
        <p className="text-gray-600 text-sm text-center">
          &copy; {new Date().getFullYear()} Chinese Touch Massage Therapy. All rights reserved.
        </p>
        <p className="text-gray-700 text-xs mt-2">
          Dar es Salaam, Tanzania
        </p>
      </div>
    </footer>
  );
};

export default Footer;