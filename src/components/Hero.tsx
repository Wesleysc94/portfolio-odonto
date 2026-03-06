import { MessageCircle, ArrowRight, Check } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function Hero() {
    // Variantes para animação em cascata (stagger)
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="relative min-h-[100vh] flex flex-col items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-[#0A0F1C] to-black dark:from-[#030712] dark:via-black dark:to-[#050B14]">

            {/* Grid Tecnológico */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Iluminação suave em Azul/Ciano */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-cyan-600/20 dark:bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none"
            />

            <motion.div
                className="z-10 relative flex flex-col items-center text-center max-w-5xl mx-auto mt-20 md:mt-0"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 tracking-tight leading-tight md:leading-[1.1]"
                >
                    Experiências digitais que transformam visitantes em <span className="text-cyan-400 italic">clientes.</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-slate-300 dark:text-zinc-400 font-sans max-w-3xl mb-12 font-light leading-relaxed"
                >
                    Websites e landing pages modernas criadas para empresas que desejam transmitir autoridade, gerar confiança e atrair novos contatos pela internet.
                </motion.p>

                {/* Container de Botões */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
                    <a
                        href="#projetos"
                        className="group flex gap-3 items-center justify-center px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-sans font-bold text-sm tracking-widest uppercase rounded-full shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_30px_rgba(8,145,178,0.5)] transition-all duration-300 w-full sm:w-auto hover:-translate-y-1"
                    >
                        Ver demonstração
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                        href="https://wa.me/5511999999999" target="_blank" rel="noreferrer"
                        className="group flex gap-3 items-center justify-center px-8 py-4 border border-slate-700 bg-black/20 backdrop-blur-sm text-slate-300 font-sans font-bold text-sm tracking-widest uppercase rounded-full hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                    >
                        Solicitar proposta
                        <MessageCircle className="w-5 h-5" />
                    </a>
                </motion.div>

                {/* Micro-prova social */}
                <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-slate-400 font-sans mt-4">
                    <div className="flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 text-cyan-400" />
                        <span>Sites rápidos e modernos</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 text-cyan-400" />
                        <span>Estrutura focada em conversão</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 text-cyan-400" />
                        <span>Projetos pensados para negócios locais</span>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}
