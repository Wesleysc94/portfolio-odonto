import { motion } from 'framer-motion';

export default function ProblemSolution() {
    return (
        <section className="py-32 md:py-40 px-6 relative w-full overflow-visible z-10">
            <div className="max-w-6xl mx-auto z-10 relative grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">

                {/* O Problema */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-start"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 dark:text-white mb-6 md:mb-10 leading-[1.1] md:leading-[1.05] tracking-tight text-balance">
                        Muitos negócios oferecem serviços excelentes, mas possuem uma presença que <span className="italic text-slate-500 dark:text-zinc-400 font-light">não transmite sua verdadeira autoridade.</span>
                    </h2>

                    <p className="text-slate-600 dark:text-zinc-400 font-sans text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-8 tracking-wide text-balance">
                        Na internet, a primeira impressão acontece antes mesmo do contato. Uma presença digital confusa ou amadora afasta potenciais clientes de alto valor.
                    </p>
                </motion.div>

                {/* A Solução */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute -inset-4 bg-slate-900/5 dark:bg-zinc-800/10 blur-2xl rounded-3xl -z-10" />
                    <div className="glass p-8 md:p-14 rounded-3xl border border-slate-200 dark:border-zinc-800/60 flex flex-col gap-6 text-center md:text-left">
                        <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-white flex items-center justify-center mb-2 mx-auto md:mx-0">
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
