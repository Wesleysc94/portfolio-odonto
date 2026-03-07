import { LayoutTemplate, Zap, MousePointerClick } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function Benefits() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="py-24 md:py-32 px-6 relative max-w-7xl mx-auto z-10">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px" }}
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="text-center mb-16 md:mb-24"
            >
                <h2 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 dark:text-white aura:text-white ruby:text-white leading-[1.15] md:leading-[1.1] tracking-tight mb-4">
                    O que <span className="italic text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 font-light">Entregamos</span>
                </h2>
                <p className="text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 font-sans text-lg md:text-xl font-light leading-relaxed tracking-wide">
                    Soluções digitais desenhadas para negócios que exigem resultados superiores.
                </p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px" }}
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
            >
                {/* Benefit Card 1 */}
                <motion.div variants={cardVariants} className="bg-white/90 dark:bg-zinc-900/80 aura:bg-[#0a0a0a]/90 ruby:bg-[#0a0a0a]/90 backdrop-blur-sm lg:backdrop-blur-md p-8 lg:p-10 rounded-[2rem] border border-slate-200/60 dark:border-white/10 aura:border-white/10 ruby:border-white/10 flex flex-col items-start gap-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-5px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_10px_40px_-5px_rgba(0,0,0,0.3)] group cursor-default">
                    <div className="w-16 h-16 rounded-2xl bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 flex items-center justify-center shadow-sm dark:shadow-none transition-transform duration-500 group-hover:scale-110">
                        <LayoutTemplate className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-semibold text-slate-900 dark:text-white aura:text-white ruby:text-white tracking-tight">Website Premium</h3>
                    <p className="text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 md:text-lg font-light leading-relaxed tracking-wide">
                        Sites modernos, responsivos e visualmente profissionais projetados para valorizar a marca da sua empresa.
                    </p>
                </motion.div>

                {/* Benefit Card 2 */}
                <motion.div variants={cardVariants} className="bg-white/90 dark:bg-zinc-900/80 aura:bg-[#0a0a0a]/90 ruby:bg-[#0a0a0a]/90 backdrop-blur-sm lg:backdrop-blur-md p-8 lg:p-10 rounded-[2rem] border border-slate-200/60 dark:border-white/10 aura:border-white/10 ruby:border-white/10 flex flex-col items-start gap-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-5px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_10px_40px_-5px_rgba(0,0,0,0.3)] group cursor-default">
                    <div className="w-16 h-16 rounded-2xl bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 flex items-center justify-center shadow-sm dark:shadow-none transition-transform duration-500 group-hover:scale-110">
                        <Zap className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-semibold text-slate-900 dark:text-white aura:text-white ruby:text-white tracking-tight">Performance</h3>
                    <p className="text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 md:text-lg font-light leading-relaxed tracking-wide">
                        Sites extremamente rápidos, hospedados em infraestrutura moderna (Edge Networks) e otimizados para qualquer dispositivo móvel.
                    </p>
                </motion.div>

                {/* Benefit Card 3 */}
                <motion.div variants={cardVariants} className="bg-white/90 dark:bg-zinc-900/80 aura:bg-[#0a0a0a]/90 ruby:bg-[#0a0a0a]/90 backdrop-blur-sm lg:backdrop-blur-md p-8 lg:p-10 rounded-[2rem] border border-slate-200/60 dark:border-white/10 aura:border-white/10 ruby:border-white/10 flex flex-col items-start gap-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-5px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_10px_40px_-5px_rgba(0,0,0,0.3)] group cursor-default">
                    <div className="w-16 h-16 rounded-2xl bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 flex items-center justify-center shadow-sm dark:shadow-none transition-transform duration-500 group-hover:scale-110">
                        <MousePointerClick className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-semibold text-slate-900 dark:text-white aura:text-white ruby:text-white tracking-tight">Conversão de Leads</h3>
                    <p className="text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 md:text-lg font-light leading-relaxed tracking-wide">
                        Estrutura pensada e validada para facilitar o contato e gerar constantemente novos contatos e orçamentos para sua equipe comercial.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
