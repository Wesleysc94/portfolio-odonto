import { XCircle } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function ProblemSolution() {
    const listVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

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
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-800 dark:text-white mb-8 leading-tight">
                        Muitos negócios têm um ótimo serviço, mas uma presença digital que <span className="italic text-rose-600 dark:text-rose-400">não reflete sua qualidade.</span>
                    </h2>

                    <motion.ul
                        variants={listVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col gap-4 mb-2 w-full"
                    >
                        {['Sites antigos e visualmente ultrapassados', 'Páginas lentas que afastam o usuário', 'Falta de confiança e profissionalismo visual', 'Dificuldade para gerar contatos e vendas online'].map((problem, i) => (
                            <motion.li key={i} variants={itemVariants} className="flex gap-4 items-center bg-white dark:bg-black/50 p-4 rounded-xl border border-slate-100 dark:border-zinc-800 shadow-sm">
                                <XCircle className="w-6 h-6 text-rose-500 flex-shrink-0" />
                                <span className="text-slate-600 dark:text-zinc-300 font-sans">{problem}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

                {/* A Solução */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute -inset-4 bg-teal/5 dark:bg-gold/5 blur-2xl rounded-3xl -z-10" />
                    <div className="glass p-10 md:p-14 rounded-3xl border border-teal/20 dark:border-gold/20 flex flex-col gap-6 text-center md:text-left">
                        <div className="w-16 h-16 rounded-2xl bg-teal/10 dark:bg-gold/10 text-teal dark:text-gold flex items-center justify-center mb-2 mx-auto md:mx-0">
                            <span className="text-2xl font-serif italic">A</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-serif text-slate-900 dark:text-white leading-tight">
                            Nossos projetos são pensados para transmitir autoridade.
                        </h3>
                        <p className="text-slate-600 dark:text-zinc-400 font-sans text-lg font-light leading-relaxed">
                            Facilitamos o contato em todos os dispositivos para <strong>transformar meros visitantes em clientes reais</strong> todo santo dia.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
