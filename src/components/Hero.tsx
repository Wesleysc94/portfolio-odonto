import { MessageCircle, ArrowRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

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
                    <div className="flex flex-col items-start text-left xl:pr-10 relative z-30">
                        <motion.h1
                            variants={itemVariants}
                            className="text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] font-serif text-slate-900 dark:text-white mb-6 md:mb-8 tracking-tighter leading-[1.05]"
                        >
                            Interfaces que transformam presença em <span className="text-cyan-600 dark:text-cyan-400 italic font-light whitespace-normal">autoridade.</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-base sm:text-lg md:text-xl xl:text-2xl text-slate-600 dark:text-zinc-400 font-sans max-w-xl mb-8 lg:mb-14 font-light leading-relaxed tracking-wide"
                        >
                            O padrão ouro do web design para empresas premium. Projetos desenhados para alta conversão através de gatilhos visuais e engenharia de ponta.
                        </motion.p>

                        {/* Imagem APENAS no Mobile, inserida entre o texto e os botões */}
                        <motion.div variants={itemVariants} className="flex lg:hidden relative w-full justify-center items-center py-6 pointer-events-none mb-8">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[60px]" />
                            <img src="/mockups/dupla versao mobile.PNG" alt="Mobile UI" className="relative z-30 w-[85%] max-w-[320px] rounded-[2rem] shadow-2xl border-[3px] border-white/40 dark:border-white/10" />
                        </motion.div>

                        {/* Container de Botões (Premium Cyan) */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
                            <a
                                href="#case-study"
                                className="group relative flex gap-3 items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-cyan-600 dark:bg-cyan-500 text-white font-sans font-bold text-xs md:text-sm tracking-[0.2em] uppercase rounded-full overflow-hidden transition-all duration-500 w-full sm:w-auto hover:-translate-y-2 shadow-[0_10px_40px_-10px_rgba(8,145,178,0.5)]"
                            >
                                <span className="relative z-10 flex items-center gap-2 md:gap-3 whitespace-nowrap">
                                    Ver demonstração
                                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-cyan-700 dark:bg-cyan-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0" />
                            </a>

                            <button
                                onClick={onOpenModal}
                                className="group flex gap-2 md:gap-3 items-center justify-center px-8 md:px-10 py-4 md:py-5 border border-slate-300 dark:border-zinc-800 bg-transparent text-slate-700 dark:text-zinc-200 font-sans font-bold text-xs md:text-sm tracking-[0.2em] uppercase rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800 hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-500 w-full sm:w-auto whitespace-nowrap"
                            >
                                Solicitar proposta
                                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-cyan-600 dark:text-cyan-400" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Coluna da Direita: Composição Autoral Clean (DESKTOP) */}
                    <motion.div
                        variants={itemVariants}
                        className="hidden lg:flex relative w-full h-full justify-center items-center pointer-events-none"
                    >
                        <div className="relative w-full max-w-[500px] h-full min-h-[500px] lg:scale-125 xl:scale-[1.35] xl:translate-x-10 lg:-translate-y-8 xl:-translate-y-12 z-20 flex justify-center items-center">

                            {/* Efeito Deep Glow Radial atrás do Mockup */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

                            {/* Main Screen: Single Imagem Original (Conforme pedido) */}
                            <motion.img
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                src="/mockups/dupla versao mobile.PNG"
                                alt="Mobile Project Interface"
                                className="relative z-30 w-[90%] rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] border-[4px] border-white/40 dark:border-white/10"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
