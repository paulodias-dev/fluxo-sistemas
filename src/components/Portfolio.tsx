import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, Github } from 'lucide-react';

const projects = [
  {
    id: 0,
    title: 'Sistema SESMT para Atestados de Saúde Ocupacional',
    category: 'Sistemas Web',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
    description: 'Apresentamos um sistema completo e intuitivo desenvolvido para simplificar a gestão de atestados médicos em clínicas e departamentos SESMT. Nossa solução integrada automatiza processos, assegura a conformidade com as normas regulamentadoras e oferece uma visão estratégica e abrangente da saúde ocupacional dos colaboradores. Com ele, sua clínica ganha em eficiência, reduz a burocracia e eleva o padrão de cuidado, promovendo um ambiente de trabalho mais seguro e saudável.',
    techs: ['Laravel v12', 'MySQL', 'jQuery', 'JavaScript'],
    featured: true,
  },
  {
    id: 1,
    title: 'Agência de Marketing Digital',
    category: 'Marketing & Propaganda',
    image: '/images/acao-total.png',
    description: 'Somos uma agência de marketing e publicidade focada em gerar resultados rápidos e mensuráveis para o seu negócio. Por meio de estratégias de alto impacto e campanhas data-driven, atuamos para aumentar o alcance da sua marca, conquistar novos clientes e impulsionar as vendas com agilidade e eficiência. Se você busca crescimento imediato e retorno sobre o investimento, a nossa abordagem é a solução ideal.',
    techs: ['WordPress', 'SEO', 'Analytics'],
    featured: true,
  },
  {
    id: 2,
    title: 'Ferreira Santos',
    category: 'Suprimentos & Logística',
    image: '/images/ferreira-santos.png',
    description: 'Localizada em Goiânia-GO, a Ferreira Santos é especialista em outsourcing de compras e gestão de suprimentos. Nosso propósito é transformar a cadeia de fornecimento da sua empresa por meio de soluções inovadoras e personalizadas. Atuamos como um parceiro estratégico, otimizando processos, reduzindo custos e alavancando resultados para impulsionar o crescimento sustentável do seu negócio.',
    techs: ['PHP', 'WordPress', 'JavaScript'],
    featured: true,
  },
  {
    id: 3,
    title: 'American Sound',
    category: 'Projetos Automotivos',
    image: '/images/american-sound.png',
    description: 'Há mais de 15 anos, a American Sound revoluciona o mercado de som automotivo em Anápolis e região, consolidando-se como a principal referência em projetos de grande porte. Nosso compromisso com a qualidade e a inovação nos permite transformar veículos em verdadeiras potências sonoras. Com uma equipe altamente especializada, desenvolvemos projetos personalizados que traduzem em som a sua personalidade e atendem a todos os seus desejos com a mais alta tecnologia e excelência.',
    techs: ['WordPress', 'PHP', 'CSS3'],
    featured: true,
  },
  {
    id: 4,
    title: 'Keythlyn Lima Advocacia',
    category: 'Jurídico',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop',
    description: 'Na Keythlyn Lima Advocacia, unimos paixão pela justiça e expertise jurídica para oferecer soluções eficientes e personalizadas. Acreditamos em um atendimento próximo e humanizado, desenvolvendo planos de ação sob medida para as circunstâncias de cada cliente. Com uma abordagem preventiva e estratégica, atuamos para proteger seus interessas desde o início, minimizando riscos e antecipando soluções para que você esteja sempre um passo à frente.',
    techs: ['PHP', 'WordPress', 'Design Responsivo'],
    featured: false,
  },
  {
    id: 5,
    title: 'Master BSB',
    category: 'Imobiliária',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', // Imobiliária luxo
    description: 'Com mais de 15 anos de atuação no mercado de Brasília-DF, a Master BSB se consolidou como uma imobiliária de referência na capital federal. Especializada na compra, venda e locação de imóveis, a empresa se destaca pelo compromisso com a excelência e pela capacidade de oferecer soluções personalizadas que atendem às necessidades específicas de cada cliente. Mais do que negócios, a Master BSB constrói relações de confiança, garantindo segurança e tranquilidade em cada etapa do processo.',
    techs: ['Laravel v12', 'MySQL', 'jQuery', 'AWS S3', 'JavaScript'],
    featured: true,
  },
  {
    id: 6,
    title: 'prohd.com.br',
    category: 'Sistemas Web',
    image: '/images/prohd.jpg', // User provided hardware/recovery image
    description: 'ProHD é um sistema web desenvolvido em Laravel 11 (v12), MySQL, jQuery e JavaScript, criado para otimizar o controle e a gestão de ordens de serviço para assistências técnicas. A plataforma oferece uma experiência completa e intuitiva, integrando funcionalidades como emissão de ordens, acompanhamento de serviços em tempo real, gestão de clientes e um fluxo de pagamentos seguro via Gateway Mercado Pago. Com uma interface responsiva e foco na produtividade, o ProHD é a ferramenta ideal para centralizar operações, reduzir falhas de comunicação e aumentar a eficiência do seu negócio.',
    techs: ['Laravel v12', 'MySQL', 'jQuery', 'Mercado Pago'],
    featured: true,
  },
  {
    id: 7,
    title: 'anapolino.com.br',
    category: 'Guias & Classificados',
    image: '/images/anapolino.png', // User provided classifieds image
    description: 'O Anapolino é um guia comercial completo e moderno, desenvolvido para conectar moradores de Anápolis-GO aos melhores serviços e classificados da região. Construído sobre uma arquitetura robusta, o site combina o poder do Laravel 11 (v12) com a dinamismo do ReactJS, garantindo alta performance e uma navegação fluida. A plataforma conta com uma API REST bem estruturada, integração com Gateway Mercado Pago para negociações seguras e uma interface intuitiva que facilita a busca por empresas, produtos e serviços. Seja para divulgar seu negócio ou encontrar o que precisa, o Anapolino é o ponto de encontro inteligente da cidade.',
    techs: ['Laravel v12', 'ReactJS', 'API REST', 'MySQL'],
    featured: true,
  },
  {
    id: 8,
    title: 'bsbimoveis.com.br',
    category: 'Sistemas Web',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop', // Luxury residence listing
    description: 'O BSB Imóveis é um portal imobiliário de última geração, focado no mercado de Brasília e Região. Desenvolvido para oferecer a melhor experiência tanto para quem busca quanto para quem anuncia, o portal combina tecnologia de ponta com um design clean e funcional. Com ferramentas avançadas de busca, filtros precisos e alta visibilidade para imóveis, o BSB Imóveis conecta compradores, vendedores e locatários de forma rápida e eficiente, tornando-se o endereço digital obrigatório para o mercado imobiliário da capital federal.',
    techs: ['Laravel v12', 'MySQL', 'SEO', 'JavaScript'],
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
