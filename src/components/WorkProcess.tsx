import { Search, Code2, Rocket } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function WorkProcess() {
   const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
   };

   const stepVariants: Variants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
   };

   const steps = [
      {
         icon: Search,
         title: "1. Análise Digital",
         desc: "Avaliação do posicionamento online e necessidades específicas da sua empresa."
      },
      {
         icon: Code2,
         title: "2. Desenvolvimento",
         desc: "Criação de um site moderno, responsivo e altamente estratégico focado em conversão."
      },
      {
         icon: Rocket,
         title: "3. Lançamento e Escala",
         desc: "Seu projeto no ar com performance otimizada, hospedagem profissional e suporte contínuo."
      }
   ];

   return (
      <section className="py-24 md:py-32 px-6 relative w-full overflow-visible z-10">
         <div className="max-w-6xl mx-auto z-10 relative">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "0px" }}
               transition={{ duration: 0.6, ease: "easeOut" }}
               className="text-center mb-24 md:mb-32"
            >
               <h2 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-serif text-slate-900 dark:text-white aura:text-white ruby:text-white mb-6 md:mb-10 leading-[1.15] md:leading-[1.1] tracking-tight text-balance">
                  Como <span className="italic text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 font-light">funciona</span>
               </h2>
               <p className="text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 font-sans text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto tracking-wide leading-relaxed text-balance">
                  Um processo desenhado para minimizar o seu esforço e maximizar o resultado da sua vitrine digital.
               </p>
            </motion.div>

            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "0px" }}
               variants={containerVariants}
               className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 relative"
            >
               {/* Linha conectora no desktop */}
               <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-cyan-300/50 dark:via-cyan-600/50 aura:via-amber-600/50 ruby:via-rose-600/50 to-transparent -z-10" />

               {steps.map((step, index) => (
                  <motion.div key={index} variants={stepVariants} className="flex flex-col items-center text-center group cursor-default">
                     <div className="w-24 h-24 rounded-full bg-cyan-50 dark:bg-zinc-900/50 aura:bg-[#0a0a0a]/80 ruby:bg-[#0a0a0a]/80 flex items-center justify-center mb-8 transition-transform duration-500 group-hover:-translate-y-2 border border-slate-200/60 dark:border-white/10 aura:border-white/10 ruby:border-white/10 text-cyan-600 aura:text-amber-500 ruby:text-rose-600 dark:text-cyan-400 aura:text-amber-400 ruby:text-rose-400 backdrop-blur-sm shadow-sm dark:shadow-none group-hover:scale-110">
                        <step.icon className="w-10 h-10 stroke-[1.5]" />
                     </div>
                     <h3 className="text-xl md:text-2xl font-serif font-semibold text-slate-900 dark:text-white aura:text-white ruby:text-white mb-4 tracking-tight">{step.title}</h3>
                     <p className="text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 font-light md:text-lg leading-relaxed tracking-wide">{step.desc}</p>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </section>
   );
}
