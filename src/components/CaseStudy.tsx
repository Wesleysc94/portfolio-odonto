import { ExternalLink } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/effect-fade';

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

    const caseImages = [
        "/mockups/versao azul desktop e mobile.PNG",
        "/mockups/versao dark mobil e desktop.PNG",
        "/mockups/versao desktopa azul.PNG",
        "/mockups/versao dark desktop.PNG",
        "/mockups/versao azul mobile.PNG",
    ];

    return (
        <section id="case-study" className="py-12 md:py-28 px-6 relative max-w-screen-2xl mx-auto overflow-visible z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-32 items-center">
                {/* Coluna Esquerda: Textos (Scroll Reveal) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textVariants}
                    className="flex flex-col items-start z-10 w-full"
                >
                    <span className="text-cyan-600 dark:text-cyan-400 font-sans font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 block">
                        Projetos Demonstrativos
                    </span>
                    <h2 className="text-[2.5rem] sm:text-5xl md:text-[5.5rem] lg:text-[6.5rem] xl:text-[8rem] font-serif text-slate-900 dark:text-zinc-50 mb-4 md:mb-10 leading-[1] md:leading-[0.9] tracking-tighter">
                        <span className="italic font-light">Aura Odonto</span>
                    </h2>
                    <p className="text-slate-600 dark:text-zinc-400 font-sans text-sm sm:text-base md:text-xl md:text-2xl mb-8 md:mb-14 leading-relaxed font-light tracking-wide max-w-xl">
                        Demonstração de uma plataforma digital desenvolvida para clínicas odontológicas com foco em experiência do usuário, velocidade e máxima conversão de pacientes nas especializações de maior valor agregado.
                    </p>
                    <a
                        href="https://aura-odonto-demo-site.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex gap-2 md:gap-3 items-center justify-center px-8 md:px-10 py-4 md:py-5 border border-cyan-400 dark:border-cyan-500/50 text-cyan-700 dark:text-cyan-400 rounded-full font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-[#030712] transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(8,145,178,0.4)] hover:-translate-y-1 w-full sm:w-auto text-center"
                    >
                        Investigar projeto
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Coluna Direita: Imagens/Mockups */}
                <div className="relative w-full h-full flex justify-center items-center py-10 lg:pl-10">

                    {/* Efeito luminoso de fundo para a Imagem Direta */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-10 w-full group flex flex-col items-center"
                    >
                        <div className="relative w-full aspect-video flex items-center justify-center">

                            <Swiper
                                modules={[Autoplay, EffectFade, Navigation]}
                                effect="fade"
                                fadeEffect={{ crossFade: true }}
                                speed={1000}
                                autoplay={{ delay: 8000, disableOnInteraction: false }}
                                loop={true}
                                allowTouchMove={false}
                                navigation={{
                                    prevEl: '.swiper-button-prev-custom',
                                    nextEl: '.swiper-button-next-custom',
                                }}
                                className="w-full h-full"
                            >
                                {caseImages.map((img, idx) => (
                                    <SwiperSlide key={idx} className="w-full h-full flex items-center justify-center bg-transparent">
                                        <img
                                            src={img}
                                            alt={`Aura Odonto Premium Showcase ${idx + 1}`}
                                            className="w-full h-full object-contain drop-shadow-2xl rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Controles de Navegação Discretos */}
                        <div className="flex gap-4 items-center justify-center mt-8">
                            <button className="swiper-button-prev-custom group flex items-center justify-center w-12 h-12 rounded-full border border-slate-300 dark:border-zinc-700 bg-transparent text-slate-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6" /></svg>
                            </button>
                            <button className="swiper-button-next-custom group flex items-center justify-center w-12 h-12 rounded-full border border-slate-300 dark:border-zinc-700 bg-transparent text-slate-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6" /></svg>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
