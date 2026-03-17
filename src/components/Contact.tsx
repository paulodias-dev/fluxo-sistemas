import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Loader2, RefreshCw } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(14, 'Telefone inválido (mínimo 10 dígitos)'),
  message: z.string().min(10, 'A mensagem deve ter pelo menos 10 caracteres'),
  captcha: z.string().min(1, 'Responda o desafio de segurança'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [captchaChallenge, setCaptchaChallenge] = useState({ a: 0, b: 0, result: 0 });
  const [captchaError, setCaptchaError] = useState('');

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setCaptchaChallenge({ a, b, result: a + b });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const phoneValue = watch('phone');

  const maskPhone = (value: string) => {
    if (!value) return value;
    const phoneNumber = value.replace(/\D/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 3) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    }
    if (phoneNumberLength < 11) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 6)}-${phoneNumber.slice(6, 10)}`;
    }
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const masked = maskPhone(e.target.value);
    setValue('phone', masked, { shouldValidate: true });
  };

  const onSubmit = async (data: ContactFormData) => {
    if (parseInt(data.captcha) !== captchaChallenge.result) {
      setCaptchaError('Desafio incorreto. Tente novamente.');
      generateCaptcha();
      return;
    }
    setCaptchaError('');
    setIsSubmitting(true);
    console.log('Form Data:', data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    generateCaptcha();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contato" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 dark:text-white text-slate-900">
              Vamos iniciar seu <br />
              <span className="text-gradient">Próximo Projeto?</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
              Atendemos todo o Brasil remotamente com agilidade. Preencha o formulário e nossa equipe entrará em contato em menos de 24 horas.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-brand-blue shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white text-slate-900">E-mail</h4>
                  <p className="text-slate-500 dark:text-slate-400">paulo.roberto@fluxosistemas.com.br</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-brand-blue shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white text-slate-900">Telefone / WhatsApp</h4>
                  <p className="text-slate-500 dark:text-slate-400">79 9 8129-1760</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-brand-blue shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white text-slate-900">Localização</h4>
                  <p className="text-slate-500 dark:text-slate-400">Aracaju-SE - Atendimento Remoto</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[2.5rem] border-white/20 shadow-2xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2 dark:text-white text-slate-900">Nome Completo</label>
                <input
                  {...register('name')}
                  className="w-full px-6 py-4 glass rounded-xl border-white/10 focus:border-brand-blue outline-hidden transition-all dark:text-white text-slate-900"
                  placeholder="Seu nome"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name.message}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 dark:text-white text-slate-900">E-mail</label>
                  <input
                    {...register('email')}
                    className="w-full px-6 py-4 glass rounded-xl border-white/10 focus:border-brand-blue outline-hidden transition-all dark:text-white text-slate-900"
                    placeholder="seu@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 dark:text-white text-slate-900">Telefone</label>
                  <input
                    {...register('phone')}
                    onChange={handlePhoneChange}
                    value={phoneValue || ''}
                    className="w-full px-6 py-4 glass rounded-xl border-white/10 focus:border-brand-blue outline-hidden transition-all dark:text-white text-slate-900"
                    placeholder="(79) 99999-9999"
                    maxLength={15}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 dark:text-white text-slate-900">Mensagem</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-6 py-4 glass rounded-xl border-white/10 focus:border-brand-blue outline-hidden transition-all dark:text-white text-slate-900 resize-none"
                  placeholder="Como podemos ajudar?"
                />
                {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message.message}</p>}
              </div>

              <div className="p-4 glass rounded-xl border-white/10">
                <label className="block text-sm font-bold mb-3 dark:text-white text-slate-900">Desafio de Segurança</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-800 rounded-lg font-mono font-bold dark:text-white text-slate-900">
                    {captchaChallenge.a} + {captchaChallenge.b} =
                  </div>
                  <input
                    {...register('captcha')}
                    className="w-20 px-4 py-2 glass rounded-lg border-white/10 focus:border-brand-blue outline-hidden transition-all dark:text-white text-slate-900"
                    placeholder="?"
                  />
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    className="p-2 hover:text-brand-blue transition-colors text-slate-500"
                    title="Recarregar desafio"
                  >
                    <RefreshCw size={18} />
                  </button>
                </div>
                {errors.captcha && <p className="text-red-500 text-xs mt-1 font-medium">{errors.captcha.message}</p>}
                {captchaError && <p className="text-red-500 text-xs mt-1 font-medium">{captchaError}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-gradient text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-brand-blue/30 transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensagem
                  </>
                )}
              </button>

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-500 text-center font-bold"
                >
                  Mensagem enviada com sucesso!
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
