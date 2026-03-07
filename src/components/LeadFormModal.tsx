import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

interface LeadFormModalProps {
 isOpen: boolean;
 onClose: () => void;
}

export default function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
 const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 setStatus('loading');

 const formData = new FormData(e.currentTarget);
 const name = formData.get('name') as string;
 const email = formData.get('email') as string;
 const phone = formData.get('phone') as string;
 const projectDetails = formData.get('details') as string;
 const budget = formData.get('budget') as string;

 // Web3Forms Integration
 formData.append("access_key", "64c37e83-2114-42e1-9d47-d0d014856288");
 formData.append("subject", `Novo Briefing: ${name}`);
 formData.append("from_name", "Wes Digital (Site)");

 // Ensure format is friendly in email body
 formData.append("message", `
NOVO PROJETO - WES DIGITAL
----------------------------------------
Nome/Empresa: ${name}
E-mail: ${email}
WhatsApp: ${phone || 'Não informado'}
Budget Estimado: ${budget}

Detalhes do Projeto:
${projectDetails}
----------------------------------------
 `);

 try {
 const response = await fetch("https://api.web3forms.com/submit", {
 method: "POST",
 body: formData
 });

 const data = await response.json();

 if (data.success) {
 const wppMessage = `Olá Wes Digital! Meu nome é ${name}. Finalizei o preenchimento do formulário no site.
Email para retorno: ${email}
Telefone registrado: ${phone || 'Não informado'}

Gostaria de falar sobre o projeto (Orçamento: ${budget}). 
Detalhes: ${projectDetails}`;

 const encodedWpp = encodeURIComponent(wppMessage);
 setStatus('success');

 // Redirect to WhatsApp with the briefing summary in 2.5s
 setTimeout(() => {
 window.open(`https://wa.me/5511930863826?text=${encodedWpp}`, '_blank');
 onClose();
 setStatus('idle');
 }, 2500);
 } else {
 console.error("Error from Web3Forms", data);
 setStatus('error');
 }
 } catch (error) {
 console.error("Network error submitting to Web3Forms", error);
 setStatus('error');
 }
 };

 return (
 <AnimatePresence>
 {isOpen && (
 <>
 {/* Backdrop */}
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 onClick={onClose}
 className="fixed inset-0 bg-slate-900/40 dark:bg-black/80 aura:bg-black/80 ruby:bg-black/80 backdrop-blur-md z-[100]"
 />

 {/* Modal */}
 <motion.div
 initial={{ opacity: 0, scale: 0.95, y: 20 }}
 animate={{ opacity: 1, scale: 1, y: 0 }}
 exit={{ opacity: 0, scale: 0.95, y: 20 }}
 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0a0a0a] aura:bg-[#09090B] ruby:bg-[#050505] rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 aura:border-white/10 ruby:border-white/10 z-[101] p-6 md:p-10 hide-scrollbar"
 >
 <button
 onClick={onClose}
 className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 aura:bg-zinc-800/50 ruby:bg-zinc-900/80 dark:bg-white/5 aura:bg-white/5 ruby:bg-white/5 text-slate-500 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-800 dark:hover:text-white transition-colors"
 >
 <X className="w-5 h-5" />
 </button>

 <div className="mb-8">
 <span className="text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 font-sans font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
 Iniciar Projeto
 </span>
 <h2 className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white aura:text-white ruby:text-white leading-tight mb-3">
 Fale sobre o seu <span className="italic">desafio</span>.
 </h2>
 <p className="text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 font-sans text-sm md:text-base leading-relaxed">
 Preencha o briefing abaixo. Um e-mail com o escopo será gerado diretamente para a nossa caixa, e opcionalmente você será encaminhado para o WhatsApp com um resumo do projeto.
 </p>
 </div>

 {status === 'success' ? (
 <motion.div
 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
 className="flex flex-col items-center justify-center py-10 text-center"
 >
 <div className="w-20 h-20 bg-green-50 dark:bg-green-900/30 text-green-500 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
 <Send className="w-10 h-10" />
 </div>
 <h3 className="text-2xl font-serif text-slate-900 dark:text-white aura:text-white ruby:text-white mb-2">Briefing Enviado com Sucesso!</h3>
 <p className="text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 ">
 E-mail recebido pela nossa equipe. Abrindo aba do WhatsApp para agilizarmos...
 </p>
 </motion.div>
 ) : status === 'error' ? (
 <motion.div
 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
 className="flex flex-col items-center justify-center py-10 text-center"
 >
 <div className="w-20 h-20 bg-red-50 dark:bg-red-900/30 text-red-500 dark:text-red-400 rounded-full flex items-center justify-center mb-6">
 <X className="w-10 h-10" />
 </div>
 <h3 className="text-2xl font-serif text-slate-900 dark:text-white aura:text-white ruby:text-white mb-2">Ops, algo deu errado.</h3>
 <p className="text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 mb-6">
 Não foi possível enviar o e-mail no momento. Por favor, tente pelo Wpp.
 </p>
 <button
 onClick={() => setStatus('idle')}
 className="px-6 py-2 bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-800 dark:text-white aura:text-white ruby:text-white rounded-lg transition-colors"
 >
 Tentar Novamente
 </button>
 </motion.div>
 ) : (
 <form onSubmit={handleSubmit} className="space-y-6">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="space-y-2">
 <label htmlFor="name" className="text-sm font-sans font-medium text-slate-700 dark:text-zinc-300 aura:text-zinc-300 ruby:text-zinc-300">Seu Nome / Empresa</label>
 <input
 type="text" id="name" name="name" required
 placeholder="Ex: João - Clinica X"
 className="w-full px-4 py-3 bg-slate-50 dark:bg-white/5 aura:bg-white/5 ruby:bg-white/5 border border-slate-200 dark:border-white/10 aura:border-white/10 ruby:border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 aura:border-amber-500 ruby:border-rose-500 outline-none transition-all text-slate-900 dark:text-white aura:text-white ruby:text-white"
 />
 </div>
 <div className="space-y-2">
 <label htmlFor="email" className="text-sm font-sans font-medium text-slate-700 dark:text-zinc-300 aura:text-zinc-300 ruby:text-zinc-300">E-mail Profissional</label>
 <input
 type="email" id="email" name="email" required
 placeholder="joao@empresa.com"
 className="w-full px-4 py-3 bg-slate-50 dark:bg-white/5 aura:bg-white/5 ruby:bg-white/5 border border-slate-200 dark:border-white/10 aura:border-white/10 ruby:border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 aura:border-amber-500 ruby:border-rose-500 outline-none transition-all text-slate-900 dark:text-white aura:text-white ruby:text-white"
 />
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="space-y-2">
 <label htmlFor="phone" className="text-sm font-sans font-medium text-slate-700 dark:text-zinc-300 aura:text-zinc-300 ruby:text-zinc-300">WhatsApp (Opcional)</label>
 <input
 type="tel" id="phone" name="phone"
 placeholder="(11) 90000-0000"
 className="w-full px-4 py-3 bg-slate-50 dark:bg-white/5 aura:bg-white/5 ruby:bg-white/5 border border-slate-200 dark:border-white/10 aura:border-white/10 ruby:border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 aura:border-amber-500 ruby:border-rose-500 outline-none transition-all text-slate-900 dark:text-white aura:text-white ruby:text-white"
 />
 </div>
 <div className="space-y-2">
 <label htmlFor="budget" className="text-sm font-sans font-medium text-slate-700 dark:text-zinc-300 aura:text-zinc-300 ruby:text-zinc-300">Estimativa de Investimento</label>
 <select
 id="budget" name="budget" required
 className="w-full px-4 py-3 bg-slate-50 dark:bg-white/5 aura:bg-white/5 ruby:bg-white/5 border border-slate-200 dark:border-white/10 aura:border-white/10 ruby:border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 aura:border-amber-500 ruby:border-rose-500 outline-none transition-all text-slate-900 dark:text-white aura:text-white ruby:text-white appearance-none"
 >
 <option value="" disabled selected>Selecione um budget base</option>
 <option value="Landing Page (- VIP)">Landing Page Estratégica</option>
 <option value="Website Institucional">Website Institucional Completo</option>
 <option value="E-commerce / Sistema">E-commerce / Aplicação Web</option>
 <option value="Redesign / Otimização">Quero remodelar meu design atual</option>
 </select>
 </div>
 </div>

 <div className="space-y-2">
 <label htmlFor="details" className="text-sm font-sans font-medium text-slate-700 dark:text-zinc-300 aura:text-zinc-300 ruby:text-zinc-300">Como podemos transformar seu projeto? (Briefing livre)</label>
 <textarea
 id="details" name="details" required rows={4}
 placeholder="Nos descreva seus principais problemas hoje (design genérico, falta de clientes, tecnologia lenta) e o que você visualiza como ideal..."
 className="w-full px-4 py-3 bg-slate-50 dark:bg-white/5 aura:bg-white/5 ruby:bg-white/5 border border-slate-200 dark:border-white/10 aura:border-white/10 ruby:border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 aura:border-amber-500 ruby:border-rose-500 outline-none transition-all text-slate-900 dark:text-white aura:text-white ruby:text-white resize-none"
 />
 </div>

 <button
 type="submit"
 disabled={status === 'loading'}
 className="w-full group flex gap-3 items-center justify-center px-8 py-4 bg-cyan-600 aura:bg-amber-600 ruby:bg-rose-700 dark:bg-cyan-500 aura:bg-amber-500 ruby:bg-rose-600 text-white font-sans font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-cyan-700 aura:hover:bg-amber-700 ruby:hover:bg-rose-800 hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0"
 >
 {status === 'loading' ? 'Enviando...' : 'Enviar Briefing Completo'}
 {!status && <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />}
 </button>

 <p className="text-center text-xs text-slate-500 dark:text-zinc-50 aura:text-slate-50 ruby:text-slate-50 mt-4">
 Seus dados estão protegidos. Logo após o envio enviaremos seu caso diretamente para o seu e-mail e nosso WhatsApp de triagem.
 </p>
 </form>
 )}
 </motion.div>
 </>
 )}
 </AnimatePresence>
 );
}
