import { ExternalLink } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function CaseStudy() {
    // Variantes de texto
    const textVariants: Variants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    // Variantes para as colunas de mockups (Stagger)
    const gridVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            }
        }
    };

    const imageVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="case-study" className="py-24 px-6 relative max-w-7xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Coluna Esquerda: Textos (Scroll Reveal) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textVariants}
                    className="flex flex-col items-start z-10 w-full"
                >
                    <span className="text-teal dark:text-gold font-sans font-semibold tracking-wider uppercase text-sm mb-4">
                        Projetos Demonstrativos
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-slate-900 dark:text-zinc-50 mb-6 leading-tight">
                        <span className="italic">Aura Odonto</span>
                    </h2>
                    <p className="text-slate-600 dark:text-zinc-400 font-sans text-lg mb-8 leading-relaxed font-light">
                        Demonstração de uma plataforma digital desenvolvida para clínicas odontológicas com foco em experiência do usuário, velocidade e máxima conversão de pacientes nas especializações de maior valor agregado.
                    </p>
                    <a
                        href="https://aura-odonto-demo-site.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex gap-3 items-center px-8 py-4 border border-teal text-teal dark:border-gold dark:text-gold rounded-full font-sans font-bold uppercase tracking-widest text-sm hover:bg-teal hover:text-white dark:hover:bg-gold dark:hover:text-dark transition-all duration-300"
                    >
                        Ver projeto
                        <ExternalLink className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Coluna Direita: Imagens/Mockups */}
                <div className="relative w-full h-full flex justify-center items-center py-10">
                    {/* Efeito luminoso de fundo para o mockup */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-teal/15 dark:bg-gold/15 rounded-full blur-[80px] pointer-events-none" />

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={gridVariants}
                        className="relative z-10 grid grid-cols-2 gap-4 md:gap-6 w-full max-w-[500px]"
                    >
                        {/* Mockup Coluna 1 (Light Mode Versions) */}
                        <div className="flex flex-col gap-4 md:gap-6 translate-y-0 md:translate-y-8">
                            <motion.img
                                variants={imageVariants}
                                src="/mockups/IMG_3938.PNG"
                                alt="Aura Odonto Light Mode Solo"
                                className="w-full rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.05)] border border-black/5 dark:border-white/5 hover:scale-105 transition-transform duration-500 hover:z-20 relative"
                            />
                            <motion.img
                                variants={imageVariants}
                                src="/mockups/IMG_3950.PNG"
                                alt="Aura Odonto Light Mode Combined"
                                className="w-full rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.05)] border border-black/5 dark:border-white/5 hover:scale-105 transition-transform duration-500 hover:z-20 relative"
                            />
                        </div>
                        {/* Mockup Coluna 2 (Dark Mode Versions) */}
                        <div className="flex flex-col gap-4 md:gap-6 translate-y-0 md:-translate-y-8 hidden sm:flex">
                            <motion.img
                                variants={imageVariants}
                                src="/mockups/IMG_3942.PNG"
                                alt="Aura Odonto Dark Mode Solo"
                                className="w-full rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.05)] border border-black/5 dark:border-white/5 hover:scale-105 transition-transform duration-500 hover:z-20 relative"
                            />
                            <motion.img
                                variants={imageVariants}
                                src="/mockups/IMG_3937.PNG"
                                alt="Aura Odonto Dark Mode Combined"
                                className="w-full rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.05)] border border-black/5 dark:border-white/5 hover:scale-105 transition-transform duration-500 hover:z-20 relative"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
