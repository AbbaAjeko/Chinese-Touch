import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { useToast } from './ToastContext';

const FloatingWA: React.FC = () => {
  const { showToast } = useToast();

  const handleClick = () => {
    showToast("Opening WhatsApp...");
  };

  return (
    <a
      href={BUSINESS_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 animate-bounce-subtle"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} className="text-white fill-white" />
    </a>
  );
};

export default FloatingWA;
