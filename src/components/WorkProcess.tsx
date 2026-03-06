import { Search, Code2, Rocket } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function WorkProcess() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const stepVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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
        <section className="py-24 px-6 relative w-full overflow-hidden bg-slate-50/50 dark:bg-black/20">
            <div className="max-w-6xl mx-auto z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-slate-800 dark:text-white mb-6 leading-tight">
                        Como <span className="italic text-teal dark:text-gold">funciona</span>
                    </h2>
                    <p className="text-slate-600 dark:text-zinc-400 font-sans text-lg font-light max-w-2xl mx-auto">
                        Um processo desenhado para minimizar o seu esforço e maximizar o resultado da sua vitrine digital.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative"
                >
                    {/* Linha conectora no desktop */}
                    <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-teal/20 dark:via-gold/20 to-transparent -z-10" />

                    {steps.map((step, index) => (
                        <motion.div key={index} variants={stepVariants} className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full glass flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300 border border-teal/10 dark:border-gold/10">
                                <step.icon className="w-10 h-10 text-teal dark:text-gold" />
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
