import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ricardo Oliveira',
    role: 'CEO, TechNova',
    content: 'A Fluxo Sistemas transformou completamente nossa operação. O sistema que desenvolveram é rápido, intuitivo e extremamente estável. Recomendo fortemente!',
    image: 'https://picsum.photos/id/64/100/100',
  },
  {
    id: 2,
    name: 'Mariana Santos',
    role: 'Diretora de Marketing, SolarPlus',
    content: 'O suporte deles é o grande diferencial. Sempre prontos para ajudar e sugerir melhorias que realmente fazem sentido para o nosso negócio.',
    image: 'https://picsum.photos/id/65/100/100',
  },
  {
    id: 3,
    name: 'Carlos Eduardo',
    role: 'Fundador, EduConnect',
    content: 'Precisávamos de uma plataforma EAD complexa e eles entregaram com perfeição. A stack Laravel + React foi a escolha certa para nossa escalabilidade.',
    image: 'https://picsum.photos/id/66/100/100',
  },
  {
    id: 4,
    name: 'Beatriz Lima',
    role: 'Gerente de TI, LogiBrasil',
    content: 'A migração para a hospedagem deles reduziu nosso tempo de carregamento em 60%. A performance é simplesmente incrível.',
    image: 'https://picsum.photos/id/67/100/100',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white text-slate-900">
            O que dizem nossos <span className="text-gradient">Clientes</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="glass p-10 md:p-16 rounded-[3rem] border-white/10 text-center relative"
            >
              <div className="absolute top-8 left-8 text-brand-blue/20">
                <Quote size={80} />
              </div>
              
              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-10 italic leading-relaxed relative z-10">
                "{testimonials[current].content}"
              </p>
              
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-20 h-20 rounded-full border-4 border-brand-blue/30 mb-4 object-cover"
                  referrerPolicy="no-referrer"
                />
                <h4 className="text-xl font-bold dark:text-white text-slate-900">
                  {testimonials[current].name}
                </h4>
                <p className="text-brand-blue font-medium text-sm">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-3 glass rounded-full hover:bg-white/20 transition-all text-slate-700 dark:text-white"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    current === i ? 'bg-brand-blue w-8' : 'bg-slate-300 dark:bg-slate-700'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 glass rounded-full hover:bg-white/20 transition-all text-slate-700 dark:text-white"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
