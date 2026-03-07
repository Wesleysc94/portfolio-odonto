import { Search, Code2, Rocket } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function WorkProcess() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const stepVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };

    const steps = [
        {
            icon: Search,
            title: "1. Análise da presença digital",
            desc: "Avaliação do posicionamento online e necessidades específicas da sua empresa."
        },
        {
            icon: Code2,
            title: "2. Criação do projeto",
            desc: "Desenvolvimento de um site moderno, responsivo e altamente estratégico."
        },
        {
            icon: Rocket,
            title: "3. Publicação e manutenção",
            desc: "Seu site no ar com performance extrema e segurança constante."
        }
    ];

    return (
        <section className="py-20 md:py-28 px-6 relative w-full overflow-visible z-10">
            <div className="max-w-6xl mx-auto z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-slate-900 dark:text-white mb-6 md:mb-8 leading-[1.1] md:leading-[1.05] tracking-tight text-balance">
                        Como <span className="italic text-cyan-600 dark:text-cyan-400 font-light">funciona</span>
                    </h2>
                    <p className="text-slate-600 dark:text-zinc-400 font-sans text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto tracking-wide leading-relaxed text-balance">
                        Um processo desenhado para minimizar o seu esforço e maximizar o resultado da sua vitrine digital.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative"
                >
                    {/* Linha conectora no desktop */}
                    <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-cyan-300 dark:via-cyan-800 to-transparent -z-10" />

                    {steps.map((step, index) => (
                        <motion.div key={index} variants={stepVariants} className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-cyan-50 dark:bg-cyan-900/10 flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300 border border-cyan-200/50 dark:border-cyan-800/50 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/30">
                                <step.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-sans font-semibold text-slate-900 dark:text-zinc-50 mb-4">{step.title}</h3>
                            <p className="text-slate-600 dark:text-zinc-400 font-light leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
