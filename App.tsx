import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';
import ScrollToTop from './components/ScrollToTop';
import { ToastProvider } from './components/ToastContext';

function App() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-[#FAFAF9] text-stone-900 selection:bg-[#D41F26] selection:text-white overflow-x-hidden">
        <Navbar />
        
        <main>
          <Hero />
          <Features />
          <About />
          <Services />
          <Contact />
        </main>
        
        <Footer />
        <FloatingWA />
        <ScrollToTop />
      </div>
    </ToastProvider>
  );
}

export default App;
