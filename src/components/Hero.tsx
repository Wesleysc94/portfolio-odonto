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

            {/* Grade fluida perfeitamente equilibrada no Light e Dark Mode (Ponto ideal de visibilidade sutil) */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#a3a3a315_1px,transparent_1px),linear-gradient(to_bottom,#a3a3a315_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)] animate-gridFlow pointer-events-none z-0" />

            <div className="z-10 relative max-w-7xl mx-auto mt-20 md:mt-0 w-full">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Coluna da Esquerda: Copywriting Hero Cinematográfico */}
                    <div className="flex flex-col items-center text-center xl:pr-10 relative z-30 w-full">

                        {/* --- EMBLEMA W PREMIUM (ESTÁTICO & SOFISTICADO) --- */}
                        <motion.div
                            className="w-36 h-36 md:w-[13.5rem] md:h-[13.5rem] mb-6 md:mb-12 flex-shrink-0 relative flex flex-col items-center justify-center mx-auto group cursor-default"
                        >
                            {/* Halo Radial Suave (Mistura Estética no Fundo) */}
                            <div className="absolute -inset-10 md:-inset-16 rounded-full bg-cyan-400/20 dark:bg-cyan-500/10 aura:bg-amber-500/15 ruby:bg-rose-600/15 blur-[50px] md:blur-[80px] z-0 transition-colors duration-500 pointer-events-none opacity-80" />

                            {/* Vidro do Emblema (Camada Base Suave, sem bordas fortes) */}
                            <div className="absolute inset-0 rounded-full border border-cyan-200/20 dark:border-white/5 aura:border-white/5 ruby:border-white/5 bg-gradient-to-br from-white/60 to-white/10 dark:from-white/5 dark:to-transparent aura:from-amber-100/5 aura:to-transparent ruby:from-rose-100/5 ruby:to-transparent backdrop-blur-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] aura:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.1)] ruby:shadow-[0_20px_40px_-10px_rgba(225,29,72,0.1)] z-10 box-border" />

                            {/* Anel Externo Refinado (Profundidade sutil) */}
                            <div className="absolute inset-[2px] md:inset-[3px] rounded-full border border-cyan-700/40 dark:border-cyan-400/40 aura:border-amber-500/20 ruby:border-rose-500/20 z-10 pointer-events-none" />

                            {/* Órbita de Partículas Estelares (Satélites de Alta Precisão) */}
                            <div className="absolute inset-[2px] md:inset-[3px] rounded-full animate-[spin_40s_linear_infinite_reverse] z-30 pointer-events-none">
                                {/* Partícula Principal (Topo) */}
                                <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400 dark:bg-cyan-300 aura:bg-amber-400 ruby:bg-rose-400 rounded-full shadow-[0_0_10px_2px_rgba(34,211,238,0.8)] dark:shadow-[0_0_10px_2px_rgba(103,232,249,0.8)] aura:shadow-[0_0_10px_2px_rgba(251,191,36,0.8)] ruby:shadow-[0_0_10px_2px_rgba(251,113,133,0.8)]" />

                                {/* Partícula Secundária (Fundo Direito) */}
                                <div className="absolute bottom-[14%] right-[14%] translate-x-1/2 translate-y-1/2 w-1 h-1 md:w-1.5 md:h-1.5 bg-cyan-300 dark:bg-cyan-200 aura:bg-amber-300 ruby:bg-rose-300 rounded-full shadow-[0_0_8px_1px_rgba(34,211,238,0.6)] dark:shadow-[0_0_8px_1px_rgba(103,232,249,0.6)] aura:shadow-[0_0_8px_1px_rgba(251,191,36,0.6)] ruby:shadow-[0_0_8px_1px_rgba(251,113,133,0.6)] opacity-70" />
                            </div>

                            {/* Anel Interno Tracejado Suave (Animação Loop Contínua) */}
                            <div className="absolute inset-3 md:inset-4 rounded-full border border-cyan-700/40 dark:border-cyan-400/40 aura:border-amber-500/40 ruby:border-rose-500/40 border-dashed z-20 pointer-events-none animate-[spin_30s_linear_infinite]" />

                            {/* Glow muito sutil interno para destacar o W */}
                            <div className="absolute inset-0 rounded-full bg-cyan-100/10 dark:bg-white/5 aura:bg-amber-100/5 ruby:bg-rose-100/5 blur-md z-10 pointer-events-none" />

                            {/* A Letra W */}
                            <span className="font-serif text-[4.2rem] md:text-[6.5rem] pr-3 md:pr-4 text-slate-800 dark:text-zinc-100 aura:text-zinc-100 ruby:text-zinc-100 italic relative z-30 transition-transform duration-500 group-hover:scale-105 drop-shadow-sm font-light">
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
                            className="text-base sm:text-lg md:text-xl xl:text-2xl text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 font-sans max-w-xl mb-12 md:mb-16 font-light leading-relaxed tracking-wide mx-auto"
                        >
                            O padrão ouro do web design para empresas premium. Projetos desenhados para alta conversão através de gatilhos visuais e engenharia de ponta.
                        </motion.p>

                        {/* Container de Botões (Premium Cyan) */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 md:mb-16 w-full sm:w-auto">
                            <Button href="#case-study" variant="primary" className="w-full sm:w-[280px]">
                                Ver demonstração
                                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>

                            <Button onClick={onOpenModal} variant="outline" className="w-full sm:w-[280px]">
                                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                Solicitar proposta
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
