import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Se rolar mais de 400px para baixo, mostra o botão
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 right-6 z-50 md:hidden"
                >
                    <button
                        onClick={scrollToTop}
                        aria-label="Voltar ao início"
                        className="p-3 rounded-full flex items-center justify-center
                                 bg-white/70 dark:bg-zinc-900/40 
                                 border border-white/40 dark:border-white/5 
                                 shadow-lg shadow-cyan-600/10 aura:shadow-amber-500/10 ruby:shadow-rose-600/10
                                 backdrop-blur-xl
                                 text-cyan-700 dark:text-cyan-400 aura:text-amber-500 ruby:text-rose-500
                                 hover:bg-cyan-50 dark:hover:bg-zinc-800 aura:hover:bg-amber-50/5 ruby:hover:bg-rose-50/5
                                 transition-all duration-300"
                    >
                        <ChevronUp className="w-6 h-6" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
