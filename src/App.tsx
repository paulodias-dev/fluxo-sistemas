import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';
import LegalModal from './components/LegalModal';

export default function App() {
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' | 'cookies' | null }>({
    isOpen: false,
    type: null,
  });

  const openLegal = (type: 'privacy' | 'terms' | 'cookies') => {
    setLegalModal({ isOpen: true, type });
  };

  const closeLegal = () => {
    setLegalModal({ ...legalModal, isOpen: false });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Technologies />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer onOpenLegal={openLegal} />
      <ScrollToTop />
      <CookieConsent onOpenLegal={openLegal} />
      
      <LegalModal 
        isOpen={legalModal.isOpen} 
        onClose={closeLegal} 
        type={legalModal.type} 
      />
    </div>
  );
}
