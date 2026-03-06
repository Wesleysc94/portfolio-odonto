import { motion } from 'framer-motion';

export default function AboutStudio() {
    return (
        <section className="py-24 px-6 relative w-full overflow-hidden flex flex-col items-center">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/5 dark:bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="max-w-4xl mx-auto z-10 relative flex flex-col md:flex-row gap-12 md:gap-20 items-center">

                {/* Elemento Visual Emblema/Logo (placeholder premium) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full border border-teal/20 dark:border-gold/20 flex flex-col items-center justify-center relative"
                >
                    <div className="absolute inset-2 border border-slate-200 dark:border-zinc-800 rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
                    <span className="font-serif text-5xl md:text-7xl text-slate-800 dark:text-white italic relative z-10">W</span>
                    <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-teal dark:text-gold mt-2 relative z-10">Studio</span>
                </motion.div>

                {/* Texto Sobre o Estúdio */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-800 dark:text-white mb-6 leading-tight">
                        Sobre a <span className="italic text-teal dark:text-gold">Wes Digital Studio</span>
                    </h2>

                    <div className="space-y-6 text-slate-600 dark:text-zinc-400 font-sans text-lg font-light leading-relaxed">
                        <p>
                            A Wes Digital Studio foi criada com o objetivo de ajudar empresas a transmitir <strong>autoridade implacável</strong> na internet através de websites modernos, responsivos e altamente estratégicos.
                        </p>
                        <p>
                            Acreditamos que um site não deve apenas existir online como um folheto morto, mas sim representar a qualidade magna do seu negócio, gerando confiança instantânea e facilitando o contato comercial com milhares de novos clientes de forma automatizada.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
