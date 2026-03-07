import { MessageCircle, ArrowRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import Button from './Button';

export default function Hero({ onOpenModal }: { onOpenModal?: () => void }) {
    // Variantes para animação em cascata (stagger)
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    };

    return (
        <section className="relative min-h-[95vh] md:min-h-[110vh] flex flex-col items-center justify-center px-6 overflow-visible pt-10 pb-20 md:-mb-32 z-20">

            {/* Grade extremamente sutil (removido no modo dark para o aspecto black total Aura) */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-transparent bg-[size:24px_24px] pointer-events-none z-0" />

            <div className="z-10 relative max-w-7xl mx-auto mt-20 md:mt-0 w-full">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Coluna da Esquerda: Copywriting Hero Cinematográfico */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left xl:pr-10 relative z-30 w-full">

                        {/* --- NOVO EMBLEMA W ANIMADO --- */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="w-20 h-20 md:w-28 md:h-28 mb-12 md:mb-16 flex-shrink-0 rounded-full border border-cyan-200/50 dark:border-cyan-800/40 aura:border-amber-500/30 ruby:border-rose-500/30 bg-white/80 dark:bg-[#0a0a0a]/80 aura:bg-[#09090B]/80 ruby:bg-[#050505]/80 backdrop-blur-md flex flex-col items-center justify-center relative shadow-[0_4px_30px_-5px_rgba(8,145,178,0.15)] dark:shadow-[0_4px_30px_-5px_rgba(8,145,178,0.2)] aura:shadow-[0_4px_30px_-5px_rgba(245,158,11,0.15)] ruby:shadow-[0_4px_30px_-5px_rgba(225,29,72,0.15)] mx-auto md:mx-0 animate-pulseGlow"
                        >
                            <div className="absolute inset-0 bg-white/20 dark:bg-white/5 blur-xl rounded-full z-0" />
                            <div className="absolute -inset-2 border border-cyan-400/20 dark:border-cyan-500/20 aura:border-amber-500/20 ruby:border-rose-500/20 rounded-full opacity-50 z-0" />
                            <span className="font-serif text-3xl md:text-5xl text-slate-900 dark:text-white aura:text-white ruby:text-white italic relative z-10 opacity-90 drop-shadow-md">
                                W
                            </span>
                        </motion.div>
                        {/* --- FIM DO EMBLEMA --- */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] font-serif text-slate-900 dark:text-white aura:text-white ruby:text-white mb-8 md:mb-12 tracking-tighter leading-[1.1] md:leading-[1.05]"
                        >
                            Interfaces que transformam presença em <span className="text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 italic font-light whitespace-normal">autoridade.</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-base sm:text-lg md:text-xl xl:text-2xl text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 font-sans max-w-xl mb-12 md:mb-16 font-light leading-relaxed tracking-wide mx-auto md:mx-0"
                        >
                            O padrão ouro do web design para empresas premium. Projetos desenhados para alta conversão através de gatilhos visuais e engenharia de ponta.
                        </motion.p>

                        {/* Container de Botões (Premium Cyan) */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mb-8 md:mb-16 w-full sm:w-auto">
                            <Button href="https://aura-odonto-demo-site.vercel.app/" target="_blank" rel="noopener noreferrer" variant="primary" className="w-full sm:w-[280px]">
                                Ver demonstração
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>

                            <Button onClick={onOpenModal} variant="outline" className="w-full sm:w-[280px]">
                                Solicitar proposta
                                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400" />
                            </Button>
                        </motion.div>

                        {/* Imagem APENAS no Mobile, inserida após botões */}
                        <motion.div variants={itemVariants} className="flex lg:hidden relative w-full justify-center items-center pointer-events-none mt-8">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-cyan-400/5 dark:bg-cyan-500/5 aura:bg-amber-500/5 ruby:bg-rose-600/5 rounded-full blur-[60px] opacity-30 z-0" />
                            <img src="/mockups/dupla versao mobile.PNG" alt="Mobile UI Desktop" loading="lazy" className="relative z-30 w-full max-w-[340px] rounded-[2rem] shadow-xl border-[3px] border-white/30 dark:border-white/10 aura:border-white/10 ruby:border-white/10 opacity-90" />
                        </motion.div>
                    </div>

                    {/* Coluna da Direita: Composição Autoral Clean (DESKTOP) */}
                    <motion.div
                        variants={itemVariants}
                        className="hidden lg:flex relative w-full h-full justify-center items-center pointer-events-none"
                    >
                        <div className="relative w-full max-w-[500px] h-full min-h-[500px] lg:scale-125 xl:scale-[1.35] xl:translate-x-10 lg:-translate-y-8 xl:-translate-y-12 z-20 flex justify-center items-center">

                            {/* Efeito Deep Glow Radial atrás do Mockup */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-cyan-400/5 dark:bg-cyan-500/5 aura:bg-amber-500/5 ruby:bg-rose-600/5 rounded-full blur-[120px] pointer-events-none" />

                            {/* Main Screen: Single Imagem Original (Conforme pedido) */}
                            <motion.img
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                src="/mockups/dupla versao mobile.PNG"
                                alt="Mobile Project Interface"
                                className="relative z-30 w-[90%] rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] border-[4px] border-white/40 dark:border-white/10 aura:border-white/10 ruby:border-white/10 "
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section >
    );
}
