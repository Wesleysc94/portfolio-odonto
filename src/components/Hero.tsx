import { MessageCircle, ArrowRight, Check } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function Hero() {
    // Variantes para animação em cascata (stagger)
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-6 overflow-hidden">
            {/* Elemento de fundo animado (Pulse) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-teal-light/5 dark:bg-gold/5 rounded-full blur-[120px] pointer-events-none"
            />

            <motion.div
                className="z-10 relative flex flex-col items-center text-center max-w-5xl mx-auto mt-20 md:mt-0"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-800 dark:text-white leading-tight md:leading-[1.1] mb-6 tracking-tight"
                >
                    Websites que transformam visitantes em <span className="text-teal dark:text-gold italic">clientes.</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 font-sans max-w-3xl mb-12 font-light leading-relaxed"
                >
                    Criamos experiências digitais rápidas, modernas e estratégicas para clínicas e empresas que desejam transmitir autoridade e gerar novos contatos pela internet.
                </motion.p>

                {/* Container de Botões */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
                    <a
                        href="#projetos"
                        className="group flex gap-3 items-center justify-center px-8 py-4 bg-teal dark:bg-gold text-white dark:text-dark font-sans font-bold text-sm tracking-widest uppercase rounded-full shadow-lg shadow-teal/20 dark:shadow-gold/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal/30 dark:hover:shadow-gold/20 transition-all duration-300 w-full sm:w-auto"
                    >
                        Ver demonstração
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                        href="https://wa.me/5511999999999" target="_blank" rel="noreferrer"
                        className="group flex gap-3 items-center justify-center px-8 py-4 border border-slate-300 dark:border-zinc-800 bg-transparent text-slate-700 dark:text-zinc-300 font-sans font-bold text-sm tracking-widest uppercase rounded-full hover:bg-slate-50 dark:hover:bg-zinc-800/50 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                    >
                        Solicitar proposta
                        <MessageCircle className="w-5 h-5" />
                    </a>
                </motion.div>

                {/* Micro-prova social */}
                <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-slate-500 dark:text-zinc-500 font-sans mt-4">
                    <div className="flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 text-teal dark:text-gold" />
                        <span>Sites rápidos e modernos</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 text-teal dark:text-gold" />
                        <span>Estrutura focada em conversão</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 text-teal dark:text-gold" />
                        <span>Projetos pensados para negócios locais</span>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}
