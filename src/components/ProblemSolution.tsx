import { motion } from 'framer-motion';

export default function ProblemSolution() {
    return (
        <section className="py-24 md:py-32 px-6 relative w-full overflow-visible z-10">
            <div className="max-w-6xl mx-auto z-10 relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* O Problema */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-start"
                >
                    <h2 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 dark:text-white aura:text-white ruby:text-white mb-6 md:mb-10 leading-[1.15] md:leading-[1.1] tracking-tight">
                        Muitos negócios oferecem serviços excelentes, mas possuem uma presença que <span className="italic text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 font-light">não transmite sua verdadeira autoridade.</span>
                    </h2>

                    <p className="text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 font-sans text-base sm:text-lg md:text-xl md:text-2xl font-light leading-relaxed mb-8 tracking-wide">
                        Na internet, a primeira impressão acontece antes mesmo do contato. Uma presença digital confusa ou amadora afasta potenciais clientes de alto valor.
                    </p>
                </motion.div>

                {/* A Solução */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="relative group cursor-default"
                >
                    <div className="absolute -inset-4 bg-cyan-900/10 dark:bg-cyan-500/10 aura:bg-amber-500/10 ruby:bg-rose-600/10 blur-xl md:blur-2xl opacity-50 md:opacity-100 rounded-[2.5rem] -z-10" />
                    <div className="bg-white/90 dark:bg-zinc-900/80 aura:bg-[#0a0a0a]/90 ruby:bg-[#0a0a0a]/90 backdrop-blur-sm lg:backdrop-blur-md p-10 md:p-14 lg:p-16 rounded-[2.5rem] border border-slate-200/60 dark:border-white/10 aura:border-white/10 ruby:border-white/10 flex flex-col gap-6 text-center md:text-left transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_10px_40px_-5px_rgba(0,0,0,0.1)] dark:group-hover:shadow-[0_10px_40px_-5px_rgba(0,0,0,0.3)]">
                        <div className="w-16 h-16 rounded-2xl bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 flex items-center justify-center mb-2 mx-auto md:mx-0 shadow-sm dark:shadow-none transition-transform duration-500 group-hover:scale-110">
                            <span className="text-2xl font-serif italic">W</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-serif text-slate-900 dark:text-white aura:text-white ruby:text-white leading-tight">
                            Design focado em resultados.
                        </h3>
                        <p className="text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 font-sans text-lg md:text-xl font-light leading-relaxed tracking-wide">
                            Projetamos ecossistemas virtuais premium que resgatam essa percepção de valor instantaneamente, elevando seu ticket médio e a confiança do visitante.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
