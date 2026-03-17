import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="glass p-6 rounded-2xl border-white/20 shadow-2xl flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-blue/20 rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                <Cookie size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold dark:text-white text-slate-900 mb-1">Privacidade e Cookies</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa política de privacidade.
                </p>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex gap-3">
              <button
                onClick={acceptCookies}
                className="flex-1 py-3 bg-brand-blue text-white rounded-xl font-bold hover:bg-brand-blue/90 transition-all"
              >
                Aceitar todos
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="flex-1 py-3 glass dark:text-white text-slate-900 rounded-xl font-bold hover:bg-white/10 transition-all"
              >
                Recusar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
