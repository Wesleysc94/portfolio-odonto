import { MessageCircle, ArrowRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function Hero() {
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
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="relative min-h-[110vh] flex flex-col items-center justify-center px-6 overflow-visible -mb-24 md:-mb-32 z-20">

            {/* Iluminação suave em Azul/Ciano (Mantida no Hero apenas para dar boost no H1) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none z-0"
            />

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
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] font-serif text-slate-900 dark:text-white mb-6 md:mb-8 tracking-tighter leading-[1.1] md:leading-[1.05] text-balance"
                        >
                            Interfaces que transformam presença em <span className="text-zinc-500 dark:text-zinc-400 italic font-light whitespace-normal">autoridade.</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl xl:text-2xl text-slate-600 dark:text-zinc-400 font-sans max-w-xl mb-14 font-light leading-relaxed tracking-wide"
                        >
                            O padrão ouro do web design para empresas premium. Projetos desenhados para alta conversão através de gatilhos visuais e engenharia de ponta.
                        </motion.p>

                        {/* Container de Botões (Premium Monochrome) */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
                            <a
                                href="#case-study"
                                className="group relative flex gap-3 items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-sans font-bold text-xs md:text-sm tracking-[0.2em] uppercase rounded-full overflow-hidden transition-all duration-500 w-full sm:w-auto hover:-translate-y-2 shadow-xl"
                            >
                                <span className="relative z-10 flex items-center gap-2 md:gap-3 whitespace-nowrap">
                                    Ver demonstração
                                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-slate-800 dark:bg-zinc-200 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0" />
                            </a>

                            <a
                                href="https://wa.me/5511999999999" target="_blank" rel="noreferrer"
                                className="group flex gap-2 md:gap-3 items-center justify-center px-8 md:px-10 py-4 md:py-5 border border-slate-300 dark:border-zinc-800 bg-transparent text-slate-700 dark:text-zinc-300 font-sans font-bold text-xs md:text-sm tracking-[0.2em] uppercase rounded-full hover:bg-slate-100 dark:hover:bg-zinc-900 hover:-translate-y-1 transition-all duration-500 w-full sm:w-auto whitespace-nowrap"
                            >
                                Solicitar proposta
                                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Coluna da Direita: Composição Autoral Clean */}
                    <motion.div
                        variants={itemVariants}
                        className="relative w-full h-full flex justify-center items-center py-20 lg:py-0 pointer-events-none"
                    >
                        <div className="relative w-full max-w-[500px] h-full min-h-[500px] lg:scale-125 xl:scale-[1.35] xl:translate-x-10 translate-y-10 lg:translate-y-24 z-20 flex justify-center items-center">

                            {/* Efeito Deep Glow Radial atrás do Mockup */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-zinc-400/10 dark:bg-zinc-600/10 rounded-full blur-[100px] pointer-events-none" />

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
