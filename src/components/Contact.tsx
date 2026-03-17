import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';

const contactMethods = [
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    value: import.meta.env.VITE_CONTACT_WHATSAPP,
    link: import.meta.env.VITE_CONTACT_WHATSAPP_LINK,
    description: 'Resposta rápida e direta para orçamentos.',
    primary: true,
  },
  {
    icon: Mail,
    title: 'E-mail',
    value: import.meta.env.VITE_CONTACT_EMAIL,
    link: `mailto:${import.meta.env.VITE_CONTACT_EMAIL}`,
    description: 'Para propostas e documentação detalhada.',
  },
  {
    icon: MapPin,
    title: 'Localização',
    value: import.meta.env.VITE_CONTACT_LOCATION,
    description: 'Atendimento 100% remoto para todo o Brasil.',
  },
];

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 dark:text-white text-slate-900">
              Vamos iniciar seu <br />
              <span className="text-gradient">Próximo Projeto?</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Estamos prontos para transformar suas ideias em sistemas robustos. 
              Escolha o canal de sua preferência e fale diretamente conosco.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.link}
              target={method.link ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative glass p-8 rounded-[2rem] border-white/10 flex flex-col items-center text-center transition-all ${
                method.primary ? 'ring-2 ring-brand-blue/30 shadow-2xl shadow-brand-blue/10' : ''
              } ${!method.link ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                method.primary ? 'bg-gradient text-white shadow-lg shadow-brand-blue/20' : 'bg-slate-200 dark:bg-slate-800 text-brand-blue'
              }`}>
                <method.icon size={28} />
              </div>
              
              <h3 className="text-2xl font-bold mb-2 dark:text-white text-slate-900 flex items-center gap-2">
                {method.title}
                {method.link && <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400" />}
              </h3>
              
              <p className="text-slate-900 dark:text-white font-bold mb-4 break-all">
                {method.value}
              </p>
              
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {method.description}
              </p>

              {method.primary && (
                <div className="mt-8 w-full">
                  <span className="inline-flex items-center justify-center px-6 py-3 bg-gradient text-white rounded-xl font-bold text-sm shadow-md transition-shadow group-hover:shadow-lg">
                    Chamar no Whats
                  </span>
                </div>
              )}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-500 dark:text-slate-500 text-sm font-medium uppercase tracking-widest">
            Atendimento Seg. a Sex. • 08h às 18h
          </p>
        </motion.div>
      </div>
    </section>
  );
}
