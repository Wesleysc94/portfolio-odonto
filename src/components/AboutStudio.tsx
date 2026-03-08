import { motion } from 'framer-motion';

export default function AboutStudio() {
    return (
        <section className="py-20 md:py-28 px-6 relative w-full overflow-visible flex flex-col items-center">
            {/* Background elements - Escondido no mobile para não atrapalhar leitura */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600 aura:bg-amber-600 ruby:bg-rose-700 dark:bg-cyan-500 aura:bg-amber-500 ruby:bg-rose-600 rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/3 pointer-events-none hidden md:block" />

            <div className="max-w-5xl mx-auto z-10 relative flex flex-col md:flex-row gap-16 md:gap-24 items-center">

                {/* Elemento Visual Emblema/Logo (Animated Design) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.5, ease: "easeOut", type: "spring", stiffness: 50 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-48 h-48 md:w-72 md:h-72 flex-shrink-0 rounded-full border border-cyan-200 dark:border-cyan-800/60 bg-white dark:bg-[#0a0a0a] aura:bg-[#09090B] ruby:bg-[#050505] flex flex-col items-center justify-center relative group cursor-default shadow-xl hover:shadow-[0_0_40px_rgba(8,145,178,0.2)] transition-shadow duration-500"
                >
                    <div className="absolute inset-2 border border-cyan-400 dark:border-cyan-500 aura:border-amber-500 ruby:border-rose-500 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
                    <div className="absolute inset-[14px] border border-cyan-300/50 dark:border-cyan-400 rounded-full animate-[spin_30s_linear_infinite_reverse]" />

                    <motion.span
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="font-serif text-6xl md:text-8xl text-slate-900 dark:text-white aura:text-white ruby:text-white italic relative z-10"
                    >
                        W
                    </motion.span>
                    <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-zinc-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 mt-4 relative z-10">Studio</span>
                </motion.div>

                {/* Texto Sobre o Estúdio */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-col text-center md:text-left"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-slate-900 dark:text-white aura:text-white ruby:text-white mb-6 md:mb-8 leading-[1.1] tracking-tight ">
                        Sobre a <span className="italic text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 font-light">Wes Digital Studio</span>
                    </h2>

                    <div className="space-y-6 md:space-y-8 text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 font-sans text-lg sm:text-xl md:text-2xl font-light leading-relaxed tracking-wide ">
                        <p>
                            A Wes Digital Studio foi criada com o objetivo de ajudar empresas a transmitir <strong className="font-semibold text-slate-800 dark:text-zinc-200 aura:text-zinc-200 ruby:text-zinc-200">autoridade absoluta</strong> na internet através de interfaces modernas, responsivas e altamente estruturadas.
                        </p>
                        <p>
                            Acreditamos que um site não deve apenas existir online como um folheto, mas sim encarnar a excelência do seu negócio — arquitetando confiança instantânea e conduzindo o visitante naturalmente até a conversão.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
