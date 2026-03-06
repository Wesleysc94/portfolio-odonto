import { LayoutDashboard, Target } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function Solutions() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="py-32 px-6 relative max-w-7xl mx-auto z-10 overflow-hidden">
            {/* Ambient Background Lights */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="text-center mb-20 relative z-10"
            >
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif text-slate-800 dark:text-white leading-tight mb-6">
                    Soluções digitais pensadas para <span className="italic text-cyan-600 dark:text-cyan-400">diferentes objetivos.</span>
                </h2>
                <p className="text-slate-600 dark:text-zinc-400 font-sans text-xl font-light max-w-2xl mx-auto">
                    Ajudamos sua empresa a decolar na web combinando design premium com engenharia focada na conversão de leads.
                </p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10"
            >
                {/* Card 1: Website Institucional */}
                <motion.div
                    variants={cardVariants}
                    className="glass border border-slate-200/50 dark:border-zinc-800/50 p-10 md:p-12 rounded-[2rem] flex flex-col items-start gap-6 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(8,145,178,0.1)] transition-all duration-500 group"
                >
                    <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-zinc-800/80 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out">
                        <LayoutDashboard className="w-8 h-8" />
                    </div>
                    <div className="space-y-4 mt-2">
                        <h3 className="text-2xl font-serif font-semibold text-slate-900 dark:text-white tracking-tight">Website Institucional</h3>
                        <div className="h-[1px] w-12 bg-cyan-500/30 group-hover:w-full transition-all duration-500" />
                        <p className="text-slate-600 dark:text-zinc-400 text-lg font-light leading-relaxed">
                            Projetos completos para empresas que desejam construir uma presença digital sólida, transmitir autoridade e apresentar seus serviços de forma profissional.
                        </p>
                    </div>
                </motion.div>

                {/* Card 2: Landing Page Estratégica */}
                <motion.div
                    variants={cardVariants}
                    className="glass border border-slate-200/50 dark:border-zinc-800/50 p-10 md:p-12 rounded-[2rem] flex flex-col items-start gap-6 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(8,145,178,0.1)] transition-all duration-500 group"
                >
                    <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-zinc-800/80 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out">
                        <Target className="w-8 h-8" />
                    </div>
                    <div className="space-y-4 mt-2">
                        <h3 className="text-2xl font-serif font-semibold text-slate-900 dark:text-white tracking-tight">Landing Page Estratégica</h3>
                        <div className="h-[1px] w-12 bg-cyan-500/30 group-hover:w-full transition-all duration-500" />
                        <p className="text-slate-600 dark:text-zinc-400 text-lg font-light leading-relaxed">
                            Páginas focadas em campanhas, lançamentos ou captação de leads, desenvolvidas para maximizar conversões e direcionar o visitante para uma ação específica.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
