import { MessageCircle, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FooterCTA() {
    return (
        <footer className="relative mt-20 py-32 px-6 overflow-hidden bg-slate-50 border-t border-slate-100 dark:bg-black dark:border-zinc-900/50">
            {/* Background Section-Specific */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-cyan-600/10 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl mx-auto flex flex-col items-center text-center z-10 relative"
            >
                <h2 className="text-4xl md:text-5xl font-serif text-slate-800 dark:text-white mb-6 leading-tight">
                    Vamos construir a sua <span className="italic text-cyan-600 dark:text-cyan-400 block mt-2">presença digital.</span>
                </h2>

                <p className="text-slate-600 dark:text-zinc-400 font-sans text-lg md:text-xl mb-12 font-light max-w-2xl">
                    Se sua empresa precisa de um website profissional ou de uma landing page focada em conversão, podemos ajudar a transformar sua presença online.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <a
                        href="https://wa.me/5511999999999" target="_blank" rel="noreferrer"
                        className="group flex gap-3 items-center justify-center px-8 py-4 bg-cyan-600 text-white font-sans font-bold text-sm tracking-widest uppercase rounded-full shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_30px_rgba(8,145,178,0.5)] transition-all duration-300 hover:-translate-y-1"
                    >
                        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Falar no WhatsApp
                    </a>

                    <a
                        href="https://wa.me/5511999999999" target="_blank" rel="noreferrer"
                        className="group flex gap-3 items-center justify-center px-8 py-4 border border-slate-700 bg-transparent text-slate-700 dark:text-slate-300 font-sans font-bold text-sm tracking-widest uppercase rounded-full hover:bg-slate-100 dark:hover:bg-zinc-900 hover:-translate-y-1 transition-all duration-300"
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
