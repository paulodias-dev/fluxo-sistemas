import { Instagram, Linkedin, Github, Twitter } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#inicio" className="inline-block mb-6">
              <Logo />
            </a>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8">
              Transformamos ideias em sistemas web de alto desempenho. Especialistas em Laravel, React e soluções personalizadas para o seu negócio.
            </p>
            <div className="flex gap-4">
              <a href={import.meta.env.VITE_SOCIAL_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-brand-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href={import.meta.env.VITE_SOCIAL_LINKEDIN} target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-brand-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={import.meta.env.VITE_SOCIAL_GITHUB} target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-brand-blue transition-colors">
                <Github size={20} />
              </a>
              <a href={import.meta.env.VITE_SOCIAL_TWITTER} target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-brand-blue transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold dark:text-white text-slate-900 mb-6 uppercase tracking-widest text-sm">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-slate-500 dark:text-slate-400 hover:text-brand-blue transition-colors">Início</a></li>
              <li><a href="#servicos" className="text-slate-500 dark:text-slate-400 hover:text-brand-blue transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="text-slate-500 dark:text-slate-400 hover:text-brand-blue transition-colors">Portfólio</a></li>
              <li><a href="#sobre" className="text-slate-500 dark:text-slate-400 hover:text-brand-blue transition-colors">Sobre</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold dark:text-white text-slate-900 mb-6 uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => onOpenLegal('privacy')}
                  className="text-slate-500 dark:text-slate-400 hover:text-brand-blue transition-colors outline-hidden"
                >
                  Privacidade
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegal('terms')}
                  className="text-slate-500 dark:text-slate-400 hover:text-brand-blue transition-colors outline-hidden"
                >
                  Termos de Uso
                </button>
              </li>
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-brand-blue transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} {import.meta.env.VITE_SITE_NAME}. Todos os direitos reservados.
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1">
            Desenvolvido com <span className="text-red-500">❤</span> por {import.meta.env.VITE_SITE_NAME}
          </p>
        </div>
      </div>
    </footer>
  );
}
