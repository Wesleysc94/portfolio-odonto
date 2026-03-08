import { ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { useState, useEffect, useCallback } from 'react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/effect-fade';

interface Project {
    name: string;
    subtitle: string;
    description: string;
    url: string;
    images: string[];
}

const projects: Project[] = [
    {
        name: "Aura Odonto",
        subtitle: "Odontologia Estética Premium",
        description: "Design e desenvolvimento focado em transmitir autoridade odontológica e maximizar a captação de pacientes de alto ticket através de uma interface ágil e visualmente impecável.",
        url: "https://aura-odontologia-premium.vercel.app/",
        images: [
            "/mockups/versao azul desktop e mobile.PNG",
            "/mockups/versao dark mobil e desktop.PNG",
            "/mockups/versao desktopa azul.PNG",
            "/mockups/versao dark desktop.PNG",
            "/mockups/versao azul mobile.PNG",
        ],
    },
    {
        name: "Advocacia Premium",
        subtitle: "Escritório Jurídico · Website Institucional",
        description: "Interface institucional sofisticada para escritório de advocacia, projetada para comunicar credibilidade jurídica e converter visitantes em consultas agendadas com alto ticket médio.",
        url: "https://advocacia-premium-v1.vercel.app/",
        images: [
            "/mockups/adv-v1-hero-dark.png",
            "/mockups/adv-v1-sobre.png",
            "/mockups/adv-v1-atuacao.png",
            "/mockups/adv-v1-contato.png",
            "/mockups/adv-v1-hero-light.png",
        ],
    },
    {
        name: "Advocacia Premium",
        subtitle: "Versão Executiva · Landing Page",
        description: "Landing page estratégica de alta conversão para captação de leads jurídicos, com formulário inteligente, prova social e estrutura persuasiva voltada para empresários e profissionais.",
        url: "https://advocacia-premium-v2.vercel.app/",
        images: [
            "/mockups/adv-v2-hero.png",
            "/mockups/adv-v2-sobre.png",
            "/mockups/adv-v2-areas.png",
            "/mockups/adv-v2-contato.png",
        ],
    },
];

const PROJECT_INTERVAL = 10000;

export default function CaseStudy() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeProject = projects[activeIndex];

    /* Auto-advance project every 10s */
    const goToNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    }, []);

    const goToPrev = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(goToNext, PROJECT_INTERVAL);
        return () => clearInterval(timer);
    }, [goToNext]);

    return (
        <section id="case-study" className="py-12 md:py-28 px-6 relative max-w-screen-2xl mx-auto !overflow-visible z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-32 items-center !overflow-visible">

                {/* Left Column: Project Info */}
                <div className="flex flex-col items-start z-10 w-full min-h-[380px] md:min-h-[480px]">
                    <span className="text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 font-sans font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 block">
                        Projetos Demonstrativos
                    </span>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex flex-col items-start w-full"
                        >
                            <h2 className="text-[2.5rem] sm:text-5xl md:text-[5.5rem] lg:text-[6.5rem] xl:text-[8rem] font-serif text-slate-900 dark:text-zinc-50 aura:text-slate-50 ruby:text-slate-50 mb-2 md:mb-4 leading-[1] md:leading-[0.9] tracking-tighter">
                                <span className="italic font-light">{activeProject.name}</span>
                            </h2>
                            <span className="text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 font-sans font-medium tracking-wide text-sm md:text-base mb-6 md:mb-10 block">
                                {activeProject.subtitle}
                            </span>
                            <p className="text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 font-sans text-sm sm:text-base md:text-xl md:text-2xl mb-8 md:mb-14 leading-relaxed font-light tracking-wide max-w-xl">
                                {activeProject.description}
                            </p>
                            <a
                                href={activeProject.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex gap-2 md:gap-3 items-center justify-center px-8 md:px-10 py-4 md:py-5 border border-cyan-400 dark:border-cyan-500 aura:border-amber-500 ruby:border-rose-500 text-cyan-700 dark:text-cyan-400 aura:text-amber-600 dark:aura:text-amber-400 ruby:text-rose-600 dark:ruby:text-rose-400 rounded-full font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-cyan-600 aura:hover:bg-amber-600 ruby:hover:bg-rose-700 hover:text-white aura:hover:text-white ruby:hover:text-white dark:hover:bg-cyan-500 dark:hover:text-[#030712] dark:aura:hover:bg-amber-500 dark:aura:hover:text-[#09090B] dark:ruby:hover:bg-rose-600 dark:ruby:hover:text-white transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(8,145,178,0.4)] hover:-translate-y-1 w-full sm:w-auto text-center"
                            >
                                Investigar projeto
                                <ExternalLink className="w-5 h-5 md:w-6 md:h-6 shrink-0 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </AnimatePresence>

                    {/* Project Navigation Dots */}
                    <div className="flex gap-3 mt-10 md:mt-14">
                        {projects.map((project, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`group relative flex items-center gap-2 transition-all duration-500 ${idx === activeIndex ? 'cursor-default' : 'cursor-pointer'}`}
                                aria-label={`Ver projeto ${project.name}`}
                            >
                                <div className={`h-2 rounded-full transition-all duration-500 ${idx === activeIndex
                                    ? 'w-10 bg-cyan-500 dark:bg-cyan-400 aura:bg-amber-500 ruby:bg-rose-500'
                                    : 'w-2 bg-slate-300 dark:bg-zinc-700 hover:bg-slate-400 dark:hover:bg-zinc-600'
                                    }`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Column: Image Carousel */}
                <div className="relative w-full h-full flex justify-center items-center py-10 lg:pl-10 !overflow-visible">

                    {/* Ambient Background Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.cyan.400/0.08)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_center,theme(colors.cyan.500/0.15)_0%,transparent_60%)] aura:bg-[radial-gradient(circle_at_center,theme(colors.amber.500/0.15)_0%,transparent_60%)] ruby:bg-[radial-gradient(circle_at_center,theme(colors.rose.600/0.15)_0%,transparent_60%)] pointer-events-none z-0" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative z-10 w-full flex flex-col items-center"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="relative w-full aspect-video flex items-center justify-center"
                            >
                                <Swiper
                                    modules={[Autoplay, EffectFade]}
                                    effect="fade"
                                    fadeEffect={{ crossFade: true }}
                                    speed={1000}
                                    autoplay={{ delay: 8000, disableOnInteraction: false }}
                                    loop={true}
                                    allowTouchMove={false}
                                    className="w-full h-full"
                                >
                                    {activeProject.images.map((img, idx) => (
                                        <SwiperSlide key={idx} className="w-full h-full flex items-center justify-center bg-transparent">
                                            <img
                                                src={img}
                                                alt={`${activeProject.name} — ${activeProject.subtitle} — Showcase ${idx + 1}`}
                                                loading="lazy"
                                                className="w-full h-full object-contain [mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_100%)]"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </motion.div>
                        </AnimatePresence>

                        {/* Project Navigation Arrows (prev/next switch PROJECTS) */}
                        <div className="flex gap-4 items-center justify-center mt-8">
                            <button
                                onClick={goToPrev}
                                className="group flex items-center justify-center w-12 h-12 rounded-full border border-slate-300 dark:border-zinc-700 aura:border-amber-500/30 ruby:border-rose-500/30 bg-transparent text-slate-600 dark:text-zinc-400 aura:text-amber-400 ruby:text-rose-400 hover:text-cyan-600 aura:hover:text-amber-500 ruby:hover:text-rose-600 dark:hover:text-cyan-400 hover:border-cyan-500 aura:hover:border-amber-500 ruby:hover:border-rose-500 transition-all duration-300"
                                aria-label="Projeto anterior"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6" /></svg>
                            </button>
                            <button
                                onClick={goToNext}
                                className="group flex items-center justify-center w-12 h-12 rounded-full border border-slate-300 dark:border-zinc-700 aura:border-amber-500/30 ruby:border-rose-500/30 bg-transparent text-slate-600 dark:text-zinc-400 aura:text-amber-400 ruby:text-rose-400 hover:text-cyan-600 aura:hover:text-amber-500 ruby:hover:text-rose-600 dark:hover:text-cyan-400 hover:border-cyan-500 aura:hover:border-amber-500 ruby:hover:border-rose-500 transition-all duration-300"
                                aria-label="Próximo projeto"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6" /></svg>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
