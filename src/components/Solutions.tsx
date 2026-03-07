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
        <section className="py-40 md:py-48 relative w-full z-10 overflow-visible">
            {/* Ambient Background Base to blend with previous sections */}
            <div className="absolute inset-0 bg-transparent" />

            {/* Tech Grid Background (Subtle) com Fade no Topo e na Base */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)] pointer-events-none" />

            {/* Ambient Background Lights - Extended */}
            <div className="absolute top-1/2 left-0 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] bg-cyan-600/5 dark:bg-cyan-500/10 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] bg-indigo-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                    }}
                    className="text-center mb-32 relative z-10"
                >
                    <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-8 text-balance">
                        Soluções de alta performance para <span className="italic text-cyan-600 dark:text-cyan-400 font-light block mt-4">diferentes objetivos.</span>
                    </h2>
                    <p className="text-slate-600 dark:text-zinc-400 font-sans text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed tracking-wide">
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
                        className="glass border border-slate-200/50 dark:border-zinc-800/80 p-10 md:p-14 rounded-[2.5rem] flex flex-col items-start gap-8 hover:-translate-y-4 hover:shadow-[0_0_40px_rgba(8,145,178,0.15)] dark:hover:shadow-[0_0_40px_rgba(8,145,178,0.2)] dark:hover:border-cyan-500/20 transition-all duration-700 ease-out group bg-white/50 dark:bg-black/40 backdrop-blur-md"
                    >
                        <div className="w-20 h-20 rounded-3xl bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/40 transition-all duration-500 ease-out shadow-sm dark:shadow-none">
                            <LayoutDashboard className="w-10 h-10 stroke-[1.5]" />
                        </div>
                        <div className="space-y-5 mt-2 w-full">
                            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-slate-900 dark:text-white tracking-tight">Website Institucional</h3>
                            <div className="h-[2px] w-16 bg-cyan-600/30 group-hover:w-full transition-all duration-700 ease-in-out" />
                            <p className="text-slate-600 dark:text-zinc-400 text-lg font-light leading-relaxed">
                                Projetos completos para empresas que desejam construir uma presença digital sólida, transmitir autoridade e apresentar seus serviços de forma impecável e profissional.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2: Landing Page Estratégica */}
                    <motion.div
                        variants={cardVariants}
                        className="glass border border-slate-200/50 dark:border-zinc-800/80 p-10 md:p-14 rounded-[2.5rem] flex flex-col items-start gap-8 hover:-translate-y-4 hover:shadow-[0_0_40px_rgba(8,145,178,0.15)] dark:hover:shadow-[0_0_40px_rgba(8,145,178,0.2)] dark:hover:border-cyan-500/20 transition-all duration-700 ease-out group bg-white/50 dark:bg-black/40 backdrop-blur-md"
                    >
                        <div className="w-20 h-20 rounded-3xl bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/40 transition-all duration-500 ease-out shadow-sm dark:shadow-none">
                            <Target className="w-10 h-10 stroke-[1.5]" />
                        </div>
                        <div className="space-y-5 mt-2 w-full">
                            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-slate-900 dark:text-white tracking-tight">Landing Page Estratégica</h3>
                            <div className="h-[2px] w-16 bg-cyan-600/30 group-hover:w-full transition-all duration-700 ease-in-out" />
                            <p className="text-slate-600 dark:text-zinc-400 text-lg font-light leading-relaxed">
                                Páginas focadas em campanhas, lançamentos ou captação de leads, desenvolvidas especificamente para maximizar conversões e direcionar o visitante para entrar em contato.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
