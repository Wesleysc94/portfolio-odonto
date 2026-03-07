import { ExternalLink } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
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
        <section id="case-study" className="py-32 md:py-48 px-6 relative max-w-screen-2xl mx-auto overflow-visible z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                {/* Coluna Esquerda: Textos (Scroll Reveal) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textVariants}
                    className="flex flex-col items-start z-10 w-full"
                >
                    <span className="text-zinc-500 dark:text-zinc-400 font-sans font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-6 block">
                        Projetos Demonstrativos
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-[6rem] lg:text-[7.5rem] xl:text-[8rem] font-serif text-slate-900 dark:text-zinc-50 mb-6 md:mb-10 leading-[1] md:leading-[0.9] tracking-tighter text-balance">
                        <span className="italic font-light">Aura Odonto</span>
                    </h2>
                    <p className="text-slate-600 dark:text-zinc-400 font-sans text-lg sm:text-xl md:text-2xl mb-10 md:mb-14 leading-relaxed font-light tracking-wide max-w-xl text-balance">
                        Demonstração de uma plataforma digital desenvolvida para clínicas odontológicas com foco em experiência do usuário, velocidade e máxima conversão de pacientes nas especializações de maior valor agregado.
                    </p>
                    <a
                        href="https://aura-odonto-demo-site.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex gap-2 md:gap-3 items-center justify-center px-8 md:px-10 py-4 md:py-5 border border-slate-300 dark:border-zinc-700 bg-transparent text-slate-800 dark:text-zinc-300 rounded-full font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-[#030712] transition-all duration-300 shadow-xl hover:-translate-y-1 w-full sm:w-auto text-center"
                    >
                        Investigar projeto
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Coluna Direita: Imagens/Mockups */}
                <div className="relative w-full h-full flex justify-center items-center py-10 lg:pl-10">

                    {/* Efeito luminoso de fundo para o mockup */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-zinc-400/10 dark:bg-zinc-600/10 rounded-full blur-[100px] pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-10 w-full group"
                    >
                        <div className="relative rounded-3xl overflow-hidden border border-slate-200/50 dark:border-zinc-800/80 shadow-2xl group-hover:shadow-[0_30px_60px_rgba(161,161,170,0.15)] dark:group-hover:border-zinc-500/30 transition-all duration-700 ease-out transform group-hover:-translate-y-2 group-hover:scale-[1.02] bg-white dark:bg-[#0a0a0a] backdrop-blur-sm aspect-[4/3] flex items-center justify-center">

                            <Swiper
                                modules={[Autoplay, EffectFade]}
                                effect="fade"
                                fadeEffect={{ crossFade: true }}
                                speed={1500}
                                autoplay={{ delay: 8000, disableOnInteraction: false }}
                                loop={true}
                                allowTouchMove={false}
                                className="w-full h-full"
                            >
                                {caseImages.map((img, idx) => (
                                    <SwiperSlide key={idx} className="w-full h-full flex items-center justify-center bg-transparent">
                                        <img
                                            src={img}
                                            alt={`Aura Odonto Premium Showcase ${idx + 1}`}
                                            className="w-full h-full object-contain p-4 md:p-8 drop-shadow-2xl"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Overlay sutil com texto explicativo na base */}
                            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-start translate-y-4 group-hover:translate-y-0 z-20 pointer-events-none">
                                <span className="text-white font-serif text-2xl mb-2">Aura Odonto Clínicas</span>
                                <span className="text-zinc-300 font-sans text-xs md:text-sm font-light">Galeria de visualização de alta resolução (8s Auto-play).</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
