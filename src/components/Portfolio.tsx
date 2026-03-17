import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, Github } from 'lucide-react';

const projects = [
  {
    id: 0,
    title: 'Sistema de ASO Online',
    category: 'Sistemas Web',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop', // Ilustrativa profissional
    description: 'Plataforma completa para gestão de Atestados de Saúde Ocupacional (ASO). Desenvolvida para automação de clínicas e empresas, permitindo o controle centralizado de fichas, exames, pacientes e agendamentos com alta performance.',
    techs: ['Laravel v12', 'MySQL', 'jQuery', 'JavaScript'],
    featured: true,
  },
  {
    id: 1,
    title: 'Ação Total Marketing',
    category: 'Marketing & Propaganda',
    image: '/images/acao-total.png',
    description: 'Estratégias de marketing digital e campanhas de publicidade focadas em resultados imediatos e mensuráveis para empresas de diversos setores.',
    techs: ['WordPress', 'SEO', 'Analytics'],
    featured: true,
  },
  {
    id: 2,
    title: 'Ferreira Santos',
    category: 'Websites Corporativos',
    image: '/images/ferreira-santos.png',
    description: 'Plataforma oficial da Ferreira Santos em Goiânia-GO, especializada em outsourcing de compras e gestão estratégica de suprimentos.',
    techs: ['PHP', 'WordPress', 'JavaScript'],
    featured: true,
  },
  {
    id: 3,
    title: 'American Sound',
    category: 'Portais & Media',
    image: '/images/american-sound.png',
    description: 'Hub digital para a American Sound em Anápolis-GO, referência em som automotivo de alta potência e projetos personalizados.',
    techs: ['WordPress', 'PHP', 'CSS3'],
    featured: true,
  },
  {
    id: 4,
    title: 'Dra. Keythlyn Lima',
    category: 'Jurídico',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop',
    description: 'Presença digital para advocacia especializada, com foco em atendimento personalizado, soluções jurídicas eficientes e advocacia preventiva.',
    techs: ['PHP', 'WordPress', 'Design Responsivo'],
    featured: false,
  },
  {
    id: 5,
    title: 'Portal Master Imobiliária',
    category: 'Sistemas Web',
    image: '/images/master-imobiliaria.png',
    description: 'Plataforma robusta para gestão e anúncio de imóveis em Brasília-DF. Inclui integração com AWS S3 para armazenamento de imagens, busca avançada com filtros dinâmicos e painel administrativo para controle total de leads e anúncios.',
    techs: ['Laravel v12', 'MySQL', 'jQuery', 'AWS S3', 'JavaScript'],
    featured: true,
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 dark:text-white text-slate-900"
            >
              Nosso <span className="text-gradient">Portfólio</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-700 dark:text-slate-400"
            >
              Conheça alguns dos projetos que desenvolvemos para empresas que buscam inovação e performance.
            </motion.p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="group relative glass rounded-3xl overflow-hidden cursor-pointer border-white/10"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-1 bg-brand-purple/20 text-brand-purple text-[10px] font-bold rounded-full uppercase">
                      Destaque
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white text-slate-900">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techs.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] px-2 py-1 glass rounded-md text-slate-600 dark:text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl glass rounded-3xl overflow-hidden shadow-2xl border-white/20"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 glass rounded-full text-white z-10 hover:bg-white/20 transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-full">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <span className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2 block">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl font-bold mb-6 dark:text-white text-slate-900">
                    {selectedProject.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-400 mb-8 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-bold mb-4 dark:text-white text-slate-900 uppercase tracking-wider">
                      Tecnologias Utilizadas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techs.map((tech) =>                          <span key={tech} className="px-3 py-1 glass rounded-lg text-xs font-medium dark:text-slate-300 text-slate-700">
                          {tech}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="flex-1 px-6 py-3 bg-gradient text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all">
                      <ExternalLink size={18} />
                      Ver Demo
                    </button>
                    <button className="px-6 py-3 glass dark:text-white text-slate-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
                      <Github size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
