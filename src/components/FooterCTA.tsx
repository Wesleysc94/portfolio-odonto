import { MessageCircle, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FooterCTA({ onOpenModal }: { onOpenModal?: () => void }) {
    return (
        <footer id="footer-cta" className="relative mt-10 py-20 px-6 overflow-hidden">
            {/* Background Section-Specific */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-cyan-600/5 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-4xl mx-auto flex flex-col items-center text-center z-10 relative"
            >
                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-slate-800 dark:text-white mb-6 md:mb-8 leading-tight ">
                    Vamos transformar sua <span className="italic text-cyan-600 dark:text-cyan-400 block mt-2">presença digital.</span>
                </h2>

                <p className="text-slate-600 dark:text-zinc-400 font-sans text-base sm:text-lg md:text-xl mb-10 md:mb-14 font-light max-w-2xl ">
                    Se sua empresa precisa de um website profissional ou de uma landing page estratégica para campanhas, podemos ajudar a criar uma presença digital moderna e eficiente.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">
                    <a
                        href="https://wa.me/5511930863826" target="_blank" rel="noreferrer"
                        className="group flex gap-2 sm:gap-3 items-center justify-center px-6 sm:px-8 py-4 bg-cyan-600 dark:bg-cyan-500 text-white font-sans font-bold text-xs sm:text-sm tracking-widest uppercase rounded-full shadow-[0_10px_40px_-10px_rgba(8,145,178,0.5)] transition-all duration-300 hover:bg-cyan-700 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap"
                    >
                        <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5 group-hover:scale-110 transition-transform" />
                        Falar no WhatsApp
                    </a>

                    <button
                        onClick={onOpenModal}
                        className="group flex gap-2 sm:gap-3 items-center justify-center px-6 sm:px-8 py-4 border border-slate-300 dark:border-zinc-800 bg-transparent text-slate-700 dark:text-zinc-200 font-sans font-bold text-xs sm:text-sm tracking-widest uppercase rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800 hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto whitespace-nowrap"
                    >
                        <FileText className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-600 dark:text-cyan-400" />
                        Solicitar Proposta
                    </button>
                </div>

                <div className="mt-24 text-slate-500 dark:text-zinc-600 font-sans text-sm">
                    &copy; {new Date().getFullYear()} Wes Digital Studio - Especialistas em Presença Digital
                </div>
            </motion.div>
        </footer>
    );
}
