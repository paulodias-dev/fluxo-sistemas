import { motion } from 'motion/react';

const techs = [
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
];

export default function Technologies() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-4">
            Stack Tecnológica
          </h3>
          <h4 className="text-2xl md:text-3xl font-bold dark:text-white text-slate-900">
            Dominamos as melhores ferramentas do mercado
          </h4>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 cursor-default"
            >
              <div className="w-16 h-16 p-3 glass rounded-2xl flex items-center justify-center">
                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
              </div>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
