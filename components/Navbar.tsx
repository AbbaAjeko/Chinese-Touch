import React, { useState, useEffect } from 'react';
import { Menu, X, Flower } from 'lucide-react';
import { COLORS, BUSINESS_INFO } from '../constants';
import { useToast } from './ToastContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { showToast } = useToast();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Location', href: '#location' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      // The logic: The last section whose top is above the "read line" (header + buffer) is active.
      const scrollY = window.scrollY;
      const headerOffset = 100; // Trigger point slightly below the header

      let current = 'home'; // Default fallback

      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const element = document.getElementById(sectionId);
        
        if (element) {
          // If the section's top is above our trigger line, it's a candidate
          if (element.offsetTop - headerOffset <= scrollY) {
            current = sectionId;
          }
        }
      }

      // Edge case: Check if we're at the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        current = 'location';
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80; // Matches h-20 (5rem)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setIsOpen(false);
      setActiveSection(targetId); // Instant feedback
    }
  };

  const handleBooking = () => {
    showToast("Launching WhatsApp to book your appointment...");
  };

  const logoTextClass = isScrolled ? 'text-stone-900' : 'text-white';
  const subLogoClass = isScrolled ? 'text-stone-500' : 'text-white/70';
  const mobileButtonClass = isScrolled ? 'text-stone-600' : 'text-white';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="flex items-center gap-2"
              onClick={(e) => handleNavClick(e, '#home')}
            >
              <Flower size={32} color={COLORS.red} fill={COLORS.red} className="opacity-100" />
              <div className="flex flex-col">
                <span className={`text-xl font-bold font-serif tracking-wide leading-none transition-colors duration-300 ${logoTextClass}`}>
                  CHINESE TOUCH
                </span>
                <span className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${subLogoClass}`}>
                  Massage Therapy
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                
                let linkClass = 'px-3 py-2 text-sm font-medium uppercase tracking-wider transition-colors duration-300 cursor-pointer ';
                
                if (isScrolled) {
                   linkClass += isActive ? 'text-[#D41F26] font-bold' : 'text-stone-600 hover:text-[#D41F26]';
                } else {
                   linkClass += isActive ? 'text-white font-bold' : 'text-white/90 hover:text-white';
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={linkClass}
                  >
                    {link.name}
                    {isActive && !isScrolled && (
                      <span className="block h-0.5 bg-white w-full mt-0.5 animate-fade-in"></span>
                    )}
                  </a>
                );
              })}
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleBooking}
                className="bg-[#D41F26] hover:bg-red-700 text-white px-6 py-2 rounded-none transition-all duration-300 font-medium uppercase tracking-wide text-xs shadow-[0_4px_14px_rgba(212,31,38,0.25)] hover:shadow-[0_6px_20px_rgba(212,31,38,0.35)]"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${mobileButtonClass}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
               const isActive = activeSection === link.href.substring(1);
               return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-3 py-4 rounded-md text-base font-medium text-center border-b border-stone-50 cursor-pointer ${
                    isActive 
                      ? 'text-[#D41F26] bg-stone-50 font-bold' 
                      : 'text-stone-600 hover:text-[#D41F26]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-4 pb-2 flex justify-center">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleBooking}
                className="bg-[#D41F26] text-white w-3/4 block py-3 text-center rounded text-sm font-bold uppercase tracking-widest shadow-md"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
