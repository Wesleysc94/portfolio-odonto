import { motion } from 'framer-motion';

export default function Positioning() {
 return (
 <section className="py-20 md:py-28 px-6 relative w-full overflow-visible flex flex-col items-center text-center z-10">
 <div className="max-w-4xl mx-auto z-10 relative">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px" }}
 transition={{ duration: 0.5, ease: "easeOut" }}
 >
 <span className="text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 font-sans font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 block">
 O Nosso Foco
 </span>
 <h2 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-7xl font-serif text-slate-900 dark:text-white aura:text-white ruby:text-white mb-8 md:mb-10 leading-[1.15] md:leading-[1.1] tracking-tight">
 Especialistas em <span className="italic font-light">presença digital</span> para estética premium.
 </h2>
 </motion.div>

 <motion.p
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "0px" }}
 transition={{ duration: 0.4 }}
 className="text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 font-sans text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-12 md:mb-16"
 >
 A Wes Digital Studio ajuda empresas e clínicas a transformar sua presença digital em uma vitrine profissional que transmite confiança e gera novos clientes.
 </motion.p>

 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "0px" }}
 variants={{
 hidden: { opacity: 0 },
 visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
 }}
 className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-slate-700 dark:text-zinc-300 aura:text-zinc-300 ruby:text-zinc-300 font-sans"
 >
 {/* Pilares do Projeto */}
 <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center gap-2">
 <div className="w-12 h-12 rounded-full bg-slate-100 aura:bg-zinc-800/50 ruby:bg-zinc-900/80 dark:bg-zinc-800/50 aura:bg-zinc-800/50 ruby:bg-zinc-800/50 aura:bg-zinc-800/50 ruby:bg-zinc-800/50 flex items-center justify-center text-xl">✨</div>
 <span className="font-medium text-lg">Design Moderno</span>
 </motion.div>

 <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="hidden md:block w-px h-12 bg-slate-200 dark:bg-zinc-800" />

 <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center gap-2">
 <div className="w-12 h-12 rounded-full bg-slate-100 aura:bg-zinc-800/50 ruby:bg-zinc-900/80 dark:bg-zinc-800/50 aura:bg-zinc-800/50 ruby:bg-zinc-800/50 aura:bg-zinc-800/50 ruby:bg-zinc-800/50 flex items-center justify-center text-xl">⚡</div>
 <span className="font-medium text-lg">Performance</span>
 </motion.div>

 <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="hidden md:block w-px h-12 bg-slate-200 dark:bg-zinc-800" />

 <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center gap-2">
 <div className="w-12 h-12 rounded-full bg-slate-100 aura:bg-zinc-800/50 ruby:bg-zinc-900/80 dark:bg-zinc-800/50 aura:bg-zinc-800/50 ruby:bg-zinc-800/50 aura:bg-zinc-800/50 ruby:bg-zinc-800/50 flex items-center justify-center text-xl">📈</div>
 <span className="font-medium text-lg">Conversão de Contatos</span>
 </motion.div>
 </motion.div>
 </div>
 </section>
 );
}
