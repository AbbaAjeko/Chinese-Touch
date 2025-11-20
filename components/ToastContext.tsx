import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface ToastContextType {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  const showToast = (msg: string) => {
    if (timer) clearTimeout(timer);
    setMessage(msg);
    setIsVisible(true);
    const newTimer = setTimeout(() => setIsVisible(false), 4000);
    setTimer(newTimer);
  };

  const closeToast = () => {
    setIsVisible(false);
    if (timer) clearTimeout(timer);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div 
        className={`fixed top-24 right-4 sm:right-8 z-[100] transition-all duration-500 transform ease-out ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="bg-white border-l-4 border-[#25D366] text-stone-800 pl-4 pr-10 py-4 rounded-r shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex items-start gap-3 max-w-sm relative">
             <div className="bg-[#25D366]/10 p-2 rounded-full shrink-0">
               <MessageCircle size={20} className="text-[#25D366]" />
             </div>
             <div>
               <h4 className="font-bold text-sm text-stone-900 mb-0.5">Connecting to WhatsApp</h4>
               <p className="text-xs text-stone-500 leading-relaxed">{message}</p>
             </div>
             <button 
               onClick={closeToast}
               className="absolute top-2 right-2 text-stone-400 hover:text-stone-600 transition-colors"
             >
               <X size={14} />
             </button>
        </div>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};