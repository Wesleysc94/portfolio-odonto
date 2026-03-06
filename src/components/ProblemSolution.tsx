import { motion } from 'framer-motion';

export default function ProblemSolution() {
    return (
        <section className="py-24 px-6 relative w-full overflow-hidden bg-slate-50/50 dark:bg-zinc-900/30">
            <div className="max-w-6xl mx-auto z-10 relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* O Problema */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-start"
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-slate-800 dark:text-white mb-8 leading-tight">
                        Muitos negócios oferecem serviços excelentes, mas possuem uma presença digital que <span className="italic text-teal dark:text-gold">não transmite sua verdadeira qualidade.</span>
                    </h2>

                    <p className="text-slate-600 dark:text-zinc-400 font-sans text-lg font-light leading-relaxed mb-8">
                        Na internet, a primeira impressão acontece antes mesmo do contato. Um site desatualizado ou uma presença digital confusa pode afastar potenciais clientes.
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
                    <div className="absolute -inset-4 bg-cyan-900/10 dark:bg-cyan-500/10 blur-2xl rounded-3xl -z-10" />
                    <div className="glass p-10 md:p-14 rounded-3xl border border-cyan-800/10 dark:border-cyan-500/20 flex flex-col gap-6 text-center md:text-left">
                        <div className="w-16 h-16 rounded-2xl bg-cyan-600/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-2 mx-auto md:mx-0">
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
