import { MessageCircle, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';
import InstagramButton from './InstagramButton';

export default function FooterCTA({ onOpenModal }: { onOpenModal?: () => void }) {
    return (
        <footer id="footer-cta" className="relative mt-10 py-20 px-6 overflow-hidden">
            {/* Section-Specific Ambient Background */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-cyan-600/5 aura:bg-amber-600/5 ruby:bg-rose-700/5 rounded-full blur-2xl md:blur-[100px] opacity-40 md:opacity-100 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-4xl mx-auto flex flex-col items-center text-center z-10 relative"
            >
                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-slate-800 dark:text-white aura:text-white ruby:text-white mb-6 md:mb-8 leading-tight ">
                    Vamos transformar sua <span className="italic text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 block mt-2">presença digital.</span>
                </h2>

                <p className="text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 font-sans text-base sm:text-lg md:text-xl mb-10 md:mb-14 font-light max-w-2xl ">
                    Se sua empresa precisa de um website profissional ou de uma landing page estratégica para campanhas, podemos ajudar a criar uma presença digital moderna e eficiente.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto justify-center">
                    <Button
                        href={`https://wa.me/5511930863826?text=${encodeURIComponent("Olá Wes Digital! Acessei o site e gostaria de falar sobre um projeto para minha empresa.")}`} target="_blank" rel="noreferrer"
                        variant="primary"
                        className="w-full sm:w-[300px]"
                    >
                        <MessageCircle className="w-5 h-5 md:w-6 md:h-6 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        Falar no WhatsApp
                    </Button>

                    <Button
                        onClick={onOpenModal}
                        variant="outline"
                        className="w-full sm:w-[300px]"
                    >
                        <FileText className="w-5 h-5 md:w-6 md:h-6 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        Solicitar Proposta
                    </Button>
                </div>

                <div className="mt-20 flex flex-col items-center gap-6">
                    <InstagramButton variant="footer" />
                    <div className="text-slate-500 dark:text-zinc-600 font-sans text-sm">
                        &copy; {new Date().getFullYear()} Wes Digital Studio - Especialistas em Presença Digital
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}
