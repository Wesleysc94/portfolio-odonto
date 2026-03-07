import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            const caseStudySection = document.getElementById('case-study');

            // Limit to show only after scrolling past the Case Study (Aura Odonto project)
            let threshold = 2000;
            if (caseStudySection) {
                // Trigger when the user reaches the bottom of the case study section
                threshold = caseStudySection.offsetTop + caseStudySection.offsetHeight - 200;
            }

            if (window.scrollY > threshold) {
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
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden"
                >
                    <button
                        onClick={scrollToTop}
                        aria-label="Voltar ao início"
                        className="p-3 rounded-full flex items-center justify-center
                                 bg-white/70 dark:bg-zinc-900/50 aura:bg-zinc-900/80 ruby:bg-zinc-900/80
                                 border border-white/40 dark:border-white/5 aura:border-amber-500/20 ruby:border-rose-500/20
                                 shadow-lg shadow-cyan-600/10 aura:shadow-amber-500/10 ruby:shadow-rose-600/10
                                 backdrop-blur-xl
                                 text-cyan-700 dark:text-cyan-400 aura:text-amber-500 ruby:text-rose-500
                                 hover:bg-cyan-50 dark:hover:bg-zinc-800 aura:hover:bg-zinc-800 ruby:hover:bg-zinc-800
                                 transition-all duration-300"
                    >
                        <ChevronUp className="w-6 h-6" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
