import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
    {
        question: 'Quanto tempo leva para criar um site institucional profissional?',
        answer: 'O prazo médio para um site institucional completo é de 14 a 21 dias, dependendo da complexidade, quantidade de páginas e agilidade no envio de materiais. Landing pages estratégicas são entregues em 7 a 14 dias.',
    },
    {
        question: 'O site funciona bem no celular e em todos os dispositivos?',
        answer: 'Sim, 100%. Todos os projetos são desenvolvidos com a abordagem Mobile-First, garantindo carregamento rápido e design perfeito em smartphones, tablets e desktops de qualquer tamanho.',
    },
    {
        question: 'Vocês criam landing pages para campanhas de tráfego pago?',
        answer: 'Sim. Nossas landing pages são projetadas especificamente para maximizar conversões em campanhas de Google Ads e Meta Ads, com design focado em ação, carregamento ultra-rápido e código otimizado para quality score.',
    },
    {
        question: 'O que está incluído em um projeto de site institucional?',
        answer: 'Todos os projetos incluem: design personalizado (não usamos templates), desenvolvimento responsivo, otimização de performance, SEO técnico, integração com WhatsApp, e suporte pós-publicação. O código é 100% proprietário e entregue ao cliente.',
    },
    {
        question: 'Como funciona o processo de criação do meu site?',
        answer: 'O processo começa com um briefing detalhado para entender seus objetivos de negócio. Em seguida, criamos o design personalizado para aprovação, desenvolvemos com tecnologia de ponta (React, otimizado para SEO), realizamos testes de qualidade e entregamos o projeto publicado e otimizado.',
    },
];

function FAQItem({ item, index }: { item: typeof faqData[0]; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="border-b border-slate-200/60 dark:border-white/5 aura:border-amber-500/10 ruby:border-rose-500/10 last:border-b-0"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 md:py-7 text-left group cursor-pointer"
                aria-expanded={isOpen}
            >
                {/* Colored indicator bar + question text */}
                <div className="flex items-center gap-4 pr-8">
                    <div className={`w-1 self-stretch rounded-full transition-all duration-300 flex-shrink-0 ${isOpen
                            ? 'bg-cyan-500 dark:bg-cyan-400 aura:bg-amber-500 ruby:bg-rose-500'
                            : 'bg-slate-200 dark:bg-white/10 aura:bg-amber-500/20 ruby:bg-rose-500/20 group-hover:bg-cyan-400 dark:group-hover:bg-cyan-500 aura:group-hover:bg-amber-400 ruby:group-hover:bg-rose-400'
                        }`} />
                    <span className={`text-lg md:text-xl font-sans font-medium leading-snug transition-colors duration-300 ${isOpen
                            ? 'text-cyan-600 dark:text-cyan-400 aura:text-amber-500 ruby:text-rose-500'
                            : 'text-slate-800 dark:text-zinc-100 aura:text-zinc-100 ruby:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 aura:group-hover:text-amber-400 ruby:group-hover:text-rose-400'
                        }`}>
                        {item.question}
                    </span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen
                            ? 'bg-cyan-500/10 dark:bg-cyan-500/20 aura:bg-amber-500/20 ruby:bg-rose-500/20'
                            : 'bg-slate-100 dark:bg-white/5 aura:bg-white/5 ruby:bg-white/5 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-900/20 aura:group-hover:bg-amber-900/20 ruby:group-hover:bg-rose-900/20'
                        }`}
                >
                    <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${isOpen
                            ? 'text-cyan-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400'
                            : 'text-slate-500 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 aura:group-hover:text-amber-400 ruby:group-hover:text-rose-400'
                        }`} />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-7 pl-5 ml-[3px] border-l-2 border-cyan-400/30 dark:border-cyan-500/20 aura:border-amber-500/30 ruby:border-rose-500/30 text-base md:text-lg text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 font-sans font-light leading-relaxed pr-16">
                            {item.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQ() {
    return (
        <section className="py-24 md:py-32 px-6 relative w-full z-10" id="faq">
            {/* Ambient Background */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] bg-cyan-600/5 aura:bg-amber-600/5 ruby:bg-rose-700/5 rounded-full blur-[100px] opacity-30 pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16 md:mb-20"
                >
                    <span className="text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 font-sans font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 block">
                        Tire Suas Dúvidas
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 dark:text-white aura:text-white ruby:text-white mb-6 leading-[1.15] tracking-tight">
                        Perguntas <span className="italic text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 font-light">Frequentes</span>
                    </h2>
                    <p className="text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 font-sans text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
                        Sinta-se seguro antes de iniciar seu projeto. Se tiver mais dúvidas, estamos a um clique de distância.
                    </p>
                </motion.div>

                {/* FAQ Accordion Container */}
                <div className="bg-gradient-to-br from-white/70 to-white/20 dark:from-white/[0.03] dark:to-transparent aura:from-amber-100/[0.03] aura:to-transparent ruby:from-rose-100/[0.03] ruby:to-transparent backdrop-blur-2xl rounded-[2rem] border border-slate-200/40 dark:border-white/5 aura:border-amber-500/10 ruby:border-rose-500/10 px-8 md:px-12 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] aura:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.05)] ruby:shadow-[0_20px_40px_-10px_rgba(225,29,72,0.05)]">
                    {faqData.map((item, index) => (
                        <FAQItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
