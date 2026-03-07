import { motion } from 'framer-motion';

export default function NicheExpansion() {
    return (
        <section className="py-32 px-6 relative w-full overflow-hidden text-center bg-gradient-to-b from-transparent to-black/5 dark:to-white/5">
            <div className="max-w-4xl mx-auto z-10 relative">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-serif text-slate-800 dark:text-white mb-6 leading-tight"
                >
                    Um design de alta conversão não é um custo. <span className="italic text-teal dark:text-gold block mt-2">É um ativo.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-slate-600 dark:text-zinc-400 font-sans text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto"
                >
                    Se a sua nova estrutura digital converter apenas 1 a 2 tratamentos de Lentes ou Implantes a mais por mês, o projeto se paga nos primeiros dias. Nossa arquitetura é escalável para Clínicas Odontológicas, Dermatologia Avançada e Cirurgia Plástica.
                </motion.p>
            </div>
        </section>
    );
}
