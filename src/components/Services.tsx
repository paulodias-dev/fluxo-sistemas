import { motion } from 'motion/react';
import { Code2, Server, Lightbulb } from 'lucide-react';

const services = [
  {
    title: 'Criação de Sites e Sistemas',
    description: 'Desenvolvimento sob medida utilizando PHP, Laravel e ReactJS para criar interfaces modernas e backends robustos.',
    icon: Code2,
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Hospedagem Otimizada',
    description: 'Infraestrutura de alta performance, segura e escalável, garantindo que seu sistema esteja sempre online e rápido.',
    icon: Server,
    color: 'from-purple-500 to-pink-400',
  },
  {
    title: 'Consultoria Especializada',
    description: 'Acompanhamento completo, desde a arquitetura do projeto até o deploy final e estratégias de manutenção.',
    icon: Lightbulb,
    color: 'from-orange-500 to-yellow-400',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 dark:text-white text-slate-900"
          >
            Nossos <span className="text-gradient">Serviços</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-700 dark:text-slate-400"
          >
            Oferecemos soluções completas para transformar sua presença digital com tecnologia de ponta e foco em resultados.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl border-white/10 group cursor-default"
            >
              <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white text-slate-900">
                {service.title}
              </h3>
              <p className="text-slate-700 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
