import { motion } from 'motion/react';
import { ArrowRight, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/20 text-brand-blue text-sm font-semibold mb-6"
          >
            <Terminal size={16} />
            <span>Sistemas Web de Alta Performance</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 dark:text-white text-slate-900">
            Transformamos ideias em <span className="text-gradient">sistemas web</span> de alto desempenho.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-400 mb-10 max-w-xl">
            Desenvolvemos soluções robustas com PHP, Laravel e React para impulsionar o seu negócio no ambiente digital com segurança e escalabilidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#servicos"
              className="w-full sm:w-auto px-8 py-4 bg-gradient text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-brand-blue/30 transition-all hover:-translate-y-1"
            >
              Ver Serviços
              <ArrowRight size={20} />
            </a>
            <a
              href="#contato"
              className="w-full sm:w-auto px-8 py-4 glass dark:text-white text-slate-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all border border-white/30"
            >
              Fale Conosco
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass p-4 rounded-3xl shadow-2xl border-white/20 overflow-hidden">
            <img
              src="https://picsum.photos/id/180/800/600"
              alt="Plataforma de visualização de código e desenvolvimento de sistemas web de alta performance"
              className="rounded-2xl w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Floating UI Elements */}
            <div className="absolute top-10 -left-6 glass p-4 rounded-2xl shadow-xl animate-bounce">
              <div className="w-12 h-2 bg-brand-blue rounded-full mb-2" />
              <div className="w-8 h-2 bg-slate-400 rounded-full" />
            </div>
            <div className="absolute bottom-10 -right-6 glass p-4 rounded-2xl shadow-xl animate-bounce delay-300">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
            </div>
          </div>
          {/* Decorative Ring */}
          <div className="absolute -inset-4 border-2 border-dashed border-brand-blue/30 rounded-3xl animate-[spin_20s_linear_infinite]" />
        </motion.div>
      </div>
    </section>
  );
}
