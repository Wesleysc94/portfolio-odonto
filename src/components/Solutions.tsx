import { LayoutDashboard, Target } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function Solutions() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="py-24 md:py-32 relative w-full z-10 overflow-visible">
            {/* Ambient Background Base to blend with previous sections */}
            <div className="absolute inset-0 bg-transparent" />

            {/* Tech Grid Background (Subtle) com Fade no Topo e na Base */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#a3a3a315_1px,transparent_1px),linear-gradient(to_bottom,#a3a3a315_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)] animate-gridFlow pointer-events-none" />

            {/* Ambient Background Lights - Extended (Otimizado p/ Contrast e GPU) */}
            <div className="absolute top-1/2 left-0 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-cyan-600/5 aura:bg-amber-600/5 ruby:bg-rose-700/5 rounded-full blur-[60px] md:blur-[100px] opacity-10 md:opacity-100 -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-indigo-500/5 rounded-full blur-[60px] md:blur-[100px] opacity-10 md:opacity-100 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px" }}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                    className="text-center mb-24 md:mb-32 relative z-10"
                >
                    <h2 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-serif text-slate-900 dark:text-white aura:text-white ruby:text-white leading-[1.15] md:leading-[1.1] tracking-tight mb-8">
                        Soluções de alta performance para <span className="italic text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 font-light block mt-4">diferentes objetivos.</span>
                    </h2>
                    <p className="text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 font-sans text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed tracking-wide">
                        Ajudamos sua empresa a decolar na web combinando design premium com engenharia focada na conversão de leads.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10"
                >
                    {/* Card 1: Website Institucional */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-gradient-to-br from-white/60 to-white/10 dark:from-white/5 dark:to-transparent aura:from-amber-100/5 aura:to-transparent ruby:from-rose-100/5 ruby:to-transparent backdrop-blur-2xl p-10 md:p-14 lg:p-16 rounded-[2.5rem] border border-cyan-200/20 dark:border-white/5 aura:border-white/5 ruby:border-white/5 flex flex-col items-start gap-8 transition-all duration-500 hover:-translate-y-2 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] aura:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.05)] ruby:shadow-[0_20px_40px_-10px_rgba(225,29,72,0.05)] hover:shadow-[0_20px_40px_-5px_rgba(8,145,178,0.15)] dark:hover:shadow-[0_30px_50px_-10px_rgba(0,0,0,0.6)] group cursor-default box-border"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 flex items-center justify-center shadow-sm dark:shadow-none transition-transform duration-500 group-hover:scale-110">
                            <LayoutDashboard className="w-8 h-8 stroke-[1.5]" />
                        </div>
                        <div className="space-y-5 mt-2 w-full">
                            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-slate-900 dark:text-white aura:text-white ruby:text-white tracking-tight">Website Institucional</h3>
                            <div className="h-[2px] w-16 bg-cyan-600 aura:bg-amber-600 ruby:bg-rose-700 group-hover:w-full transition-all duration-700 ease-in-out" />
                            <p className="text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 text-lg md:text-xl font-light leading-relaxed tracking-wide">
                                Projetos completos para empresas que desejam construir uma presença digital sólida, transmitir autoridade e apresentar seus serviços de forma impecável e profissional.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2: Landing Page Alta Conversão */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-gradient-to-br from-white/60 to-white/10 dark:from-white/5 dark:to-transparent aura:from-amber-100/5 aura:to-transparent ruby:from-rose-100/5 ruby:to-transparent backdrop-blur-2xl p-10 md:p-14 lg:p-16 rounded-[2.5rem] border border-cyan-200/20 dark:border-white/5 aura:border-white/5 ruby:border-white/5 flex flex-col items-start gap-8 transition-all duration-500 hover:-translate-y-2 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] aura:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.05)] ruby:shadow-[0_20px_40px_-10px_rgba(225,29,72,0.05)] hover:shadow-[0_20px_40px_-5px_rgba(8,145,178,0.15)] dark:hover:shadow-[0_30px_50px_-10px_rgba(0,0,0,0.6)] group cursor-default box-border mt-0 md:mt-12"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 flex items-center justify-center shadow-sm dark:shadow-none transition-transform duration-500 group-hover:scale-110">
                            <Target className="w-8 h-8 stroke-[1.5]" />
                        </div>
                        <div className="space-y-5 mt-2 w-full">
                            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-slate-900 dark:text-white aura:text-white ruby:text-white tracking-tight">Landing Page Alta Conversão</h3>
                            <div className="h-[2px] w-16 bg-cyan-600 aura:bg-amber-600 ruby:bg-rose-700 group-hover:w-full transition-all duration-700 ease-in-out" />
                            <p className="text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 text-lg md:text-xl font-light leading-relaxed tracking-wide">
                                Páginas focadas em campanhas, lançamentos ou captação de leads, desenvolvidas especificamente para maximizar conversões e direcionar o visitante para entrar em contato.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
