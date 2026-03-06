import { MessageCircle, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FooterCTA() {
    return (
        <footer className="relative mt-20 py-32 px-6 overflow-hidden bg-slate-50 border-t border-slate-100 dark:bg-[#0a0a0a] dark:border-zinc-900/50">
            {/* Background Section-Specific */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-teal/10 dark:bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl mx-auto flex flex-col items-center text-center z-10 relative"
            >
                <h2 className="text-4xl md:text-5xl font-serif text-slate-800 dark:text-white mb-6 leading-tight">
                    Vamos construir a sua <span className="italic text-teal dark:text-gold block mt-2">presença digital.</span>
                </h2>

                <p className="text-slate-600 dark:text-zinc-400 font-sans text-lg md:text-xl mb-12 font-light max-w-2xl">
                    Se sua empresa ainda não possui um site moderno ou deseja melhorar sua presença online com foco total em conversão, podemos ajudar a transformar sua vitrine digital.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <a
                        href="https://wa.me/5511999999999" target="_blank" rel="noreferrer"
                        className="group flex gap-3 items-center justify-center px-8 py-4 bg-teal dark:bg-gold text-white dark:text-dark font-sans font-bold text-sm tracking-widest uppercase rounded-full shadow-lg shadow-teal/20 dark:shadow-gold/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal/30 dark:hover:shadow-gold/20 transition-all duration-300"
                    >
                        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Falar no WhatsApp
                    </a>

                    <a
                        href="https://wa.me/5511999999999" target="_blank" rel="noreferrer"
                        className="group flex gap-3 items-center justify-center px-8 py-4 border border-teal dark:border-gold text-teal dark:text-gold bg-transparent font-sans font-bold text-sm tracking-widest uppercase rounded-full hover:bg-teal/5 dark:hover:bg-gold/5 hover:-translate-y-1 transition-all duration-300"
                    >
                        <FileText className="w-5 h-5" />
                        Solicitar Proposta
                    </a>
                </div>

                <div className="mt-24 text-slate-500 dark:text-zinc-600 font-sans text-sm">
                    &copy; {new Date().getFullYear()} Wes Digital Studio - Especialistas em Presença Digital
                </div>
            </motion.div>
        </footer>
    );
}
