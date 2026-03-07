import { motion } from 'framer-motion';

export default function ProblemSolution() {
    return (
        <section className="py-20 md:py-28 px-6 relative w-full overflow-visible z-10">
            <div className="max-w-6xl mx-auto z-10 relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* O Problema */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col items-start"
                >
                    <h2 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 dark:text-white mb-6 md:mb-10 leading-[1.1] md:leading-[1.05] tracking-tight">
                        Muitos negócios oferecem serviços excelentes, mas possuem uma presença que <span className="italic text-cyan-600 dark:text-cyan-400 font-light">não transmite sua verdadeira autoridade.</span>
                    </h2>

                    <p className="text-slate-600 dark:text-zinc-400 font-sans text-base sm:text-lg md:text-xl md:text-2xl font-light leading-relaxed mb-8 tracking-wide">
                        Na internet, a primeira impressão acontece antes mesmo do contato. Uma presença digital confusa ou amadora afasta potenciais clientes de alto valor.
                    </p>
                </motion.div>

                {/* A Solução */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="relative"
                >
                    <div className="absolute -inset-4 bg-cyan-900/10 dark:bg-cyan-500/10 blur-2xl rounded-3xl -z-10" />
                    <div className="glass p-8 md:p-14 rounded-3xl border border-cyan-800/10 dark:border-cyan-500/20 flex flex-col gap-6 text-center md:text-left">
                        <div className="w-16 h-16 rounded-2xl bg-cyan-600/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-2 mx-auto md:mx-0 shadow-[0_0_20px_rgba(8,145,178,0.2)]">
                            <span className="text-2xl font-serif italic">W</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-serif text-slate-900 dark:text-white leading-tight">
                            Design focado em resultados.
                        </h3>
                        <p className="text-slate-600 dark:text-zinc-400 font-sans text-lg font-light leading-relaxed">
                            Projetamos ecossistemas virtuais premium que resgatam essa percepção de valor instantaneamente, elevando seu ticket médio e a confiança do visitante.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
