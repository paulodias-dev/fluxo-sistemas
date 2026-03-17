import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | 'cookies' | null;
}

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  const content = {
    privacy: {
      title: 'Política de Privacidade',
      sections: [
        {
          heading: '1. Coleta de Informações',
          text: 'Coletamos informações básicas de contato (nome, e-mail e telefone) apenas quando você entra em contato conosco voluntariamente via WhatsApp ou E-mail para solicitar orçamentos ou suporte.',
        },
        {
          heading: '2. Uso das Informações',
          text: 'As informações coletadas são utilizadas exclusivamente para responder às suas solicitações, fornecer suporte técnico e enviar propostas comerciais solicitadas.',
        },
        {
          heading: '3. Proteção de Dados',
          text: 'Implementamos medidas de segurança para proteger suas informações pessoais. Não compartilhamos, vendemos ou alugamos seus dados para terceiros.',
        },
        {
          heading: '4. Cookies',
          text: 'Utilizamos cookies básicos para melhorar sua experiência de navegação e entender como você utiliza nosso site. Você pode gerenciar suas preferências através do banner de cookies.',
        },
        {
          heading: '5. Seus Direitos',
          text: 'Conforme a LGPD, você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados pessoais a qualquer momento, entrando em contato através do e-mail oficial.',
        },
      ],
    },
    terms: {
      title: 'Termos de Uso',
      sections: [
        {
          heading: '1. Aceitação dos Termos',
          text: 'Ao acessar o site da Fluxo Sistemas, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis.',
        },
        {
          heading: '2. Uso de Licença',
          text: 'O conteúdo deste site (textos, imagens, logotipos e design) é de propriedade exclusiva da Fluxo Sistemas. É proibida a reprodução total ou parcial sem autorização prévia.',
        },
        {
          heading: '3. Isenção de Responsabilidade',
          text: 'As informações contidas no site são fornecidas "como estão". A Fluxo Sistemas não oferece garantias implícitas e se isenta de qualquer responsabilidade por danos decorrentes do uso das informações aqui contidas.',
        },
        {
          heading: '4. Links Externos',
          text: 'Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo ou práticas de privacidade desses sites externos.',
        },
        {
          heading: '5. Alterações',
          text: 'Podemos revisar estes termos a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de uso.',
        },
      ],
    },
    cookies: {
      title: 'Política de Cookies',
      sections: [
        {
          heading: '1. O que são Cookies?',
          text: 'Cookies são pequenos arquivos de texto enviados pelo site ao seu navegador para registrar seu comportamento e preferências de navegação. Eles ajudam a tornar o site mais eficiente.',
        },
        {
          heading: '2. Como utilizamos?',
          text: 'Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para entender o tráfego e melhorar nossos serviços.',
        },
        {
          heading: '3. Gerenciamento de Cookies',
          text: 'Você pode optar por aceitar ou recusar cookies. A maioria dos navegadores permite que você gerencie suas preferências nas configurações de segurança.',
        },
        {
          heading: '4. Impacto da Recusa',
          text: 'A recusa de certos cookies pode afetar algumas funcionalidades do site, mas não impedirá o acesso às informações básicas de nossos serviços.',
        },
      ],
    },
  };

  const activeContent = type ? content[type] : null;

  if (!activeContent) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl glass rounded-3xl overflow-hidden shadow-2xl border-white/20 flex flex-col max-h-[80vh]"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-2xl font-bold dark:text-white text-slate-900">
                {activeContent.title}
              </h2>
              <button
                onClick={onClose}
                className="p-2 glass rounded-full text-slate-500 hover:text-brand-blue transition-colors"
                aria-label="Fechar"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto custom-scrollbar">
              <div className="space-y-8">
                {activeContent.sections.map((section) => (
                  <div key={section.heading}>
                    <h4 className="font-bold dark:text-white text-slate-900 mb-2 uppercase tracking-wide text-sm">
                      {section.heading}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10 text-center">
                <p className="text-sm text-slate-500 italic">
                  Última atualização: 17 de Março de 2026
                </p>
              </div>
            </div>
            
            {/* Footer button */}
            <div className="p-6 bg-slate-900/50 text-center border-t border-white/10">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-gradient text-white rounded-xl font-bold hover:shadow-lg transition-all"
              >
                Entendi
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
