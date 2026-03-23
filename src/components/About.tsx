import { motion } from 'motion/react';
import { CheckCircle2, Users, Rocket, ShieldCheck } from 'lucide-react';

const differentials = [
  {
    title: 'Stack Completa',
    description: 'Domínio total do backend ao frontend, garantindo integração perfeita.',
    icon: CheckCircle2,
  },
  {
    title: 'Projetos Complexos',
    description: 'Experiência comprovada em sistemas de alta complexidade e escala.',
    icon: Rocket,
  },
  {
    title: 'Suporte Próximo',
    description: 'Atendimento humanizado e suporte técnico ágil para o seu negócio.',
    icon: Users,
  },
  {
    title: 'Hospedagem Própria',
    description: 'Infraestrutura exclusiva com maior controle, segurança e velocidade.',
    icon: ShieldCheck,
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-4 block">
              Sobre a Fluxo Sistemas
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 dark:text-white text-slate-900 leading-tight">
              Especialistas em <span className="text-gradient">Engenharia de Software</span> e Performance.
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-400 mb-8 leading-relaxed">
              Nascemos com a missão de elevar o padrão do desenvolvimento web no Brasil. Não entregamos apenas código, entregamos soluções estratégicas que resolvem problemas reais e escalam com o seu crescimento.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-400 mb-10 leading-relaxed">
              Nossa equipe é formada por desenvolvedores seniores apaixonados por arquitetura limpa e experiência do usuário, focados em utilizar o que há de mais moderno no ecossistema PHP e JavaScript.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {differentials.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 text-brand-blue">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold dark:text-white text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass p-3 rounded-[2.5rem] border-white/20 shadow-2xl">
              <img
                src="https://picsum.photos/id/160/800/1000"
                alt="Equipe da Fluxo Sistemas trabalhando em engenharia de software e arquitetura de sistemas"
                className="rounded-2xl w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl shadow-xl border-white/20 hidden md:block">
              <div className="flex gap-12">
                <div>
                  <div className="text-4xl font-extrabold text-gradient mb-1">10+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Anos de Exp.</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-gradient mb-1">150+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Projetos</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
