import { motion } from 'framer-motion';

export default function AboutStudio() {
    return (
        <section className="py-20 md:py-28 px-6 relative w-full overflow-visible flex flex-col items-center">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 dark:bg-cyan-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="max-w-5xl mx-auto z-10 relative flex flex-col md:flex-row gap-16 md:gap-24 items-center">

                {/* Elemento Visual Emblema/Logo (Animated Design) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 50 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-48 h-48 md:w-72 md:h-72 flex-shrink-0 rounded-full border border-cyan-200 dark:border-cyan-800/60 bg-white dark:bg-[#0a0a0a] flex flex-col items-center justify-center relative group cursor-default shadow-xl hover:shadow-[0_0_40px_rgba(8,145,178,0.2)] transition-shadow duration-500"
                >
                    <div className="absolute inset-2 border border-cyan-400/30 dark:border-cyan-500/30 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
                    <div className="absolute inset-[14px] border border-cyan-300/50 dark:border-cyan-400/20 rounded-full animate-[spin_30s_linear_infinite_reverse]" />

                    <motion.span
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="font-serif text-6xl md:text-8xl text-slate-900 dark:text-white italic relative z-10"
                    >
                        W
                    </motion.span>
                    <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-zinc-600 dark:text-zinc-400 mt-4 relative z-10">Studio</span>
                </motion.div>

                {/* Texto Sobre o Estúdio */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col text-center md:text-left"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-slate-900 dark:text-white mb-6 md:mb-8 leading-[1.1] tracking-tight ">
                        Sobre a <span className="italic text-cyan-600 dark:text-cyan-400 font-light">Wes Digital Studio</span>
                    </h2>

                    <div className="space-y-6 md:space-y-8 text-slate-600 dark:text-zinc-400 font-sans text-lg sm:text-xl md:text-2xl font-light leading-relaxed tracking-wide ">
                        <p>
                            A Wes Digital Studio foi criada com o objetivo de ajudar empresas a transmitir <strong className="font-semibold text-slate-800 dark:text-zinc-200">autoridade implacável</strong> na internet através de interfaces modernas, responsivas e altamente estruturadas.
                        </p>
                        <p>
                            Acreditamos que um site não deve apenas existir online como um folheto, mas sim encarnar a excelência do seu negócio, arquitetando confiança instantânea e forçando interações cognitivas e de conversão de leads automatizados.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
