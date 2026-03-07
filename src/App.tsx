import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import Positioning from './components/Positioning';
import ProblemSolution from './components/ProblemSolution';
import Solutions from './components/Solutions';
import CaseStudy from './components/CaseStudy';
import WorkProcess from './components/WorkProcess';
import AboutStudio from './components/AboutStudio';
import FooterCTA from './components/FooterCTA';

// Divisor premium com GLOW para criar transição suave ("degradê") entre seções
const Divider = () => (
  <div className="w-full max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-cyan-900/40 to-transparent relative opacity-60">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 dark:via-cyan-400/30 to-transparent blur-[2px]" />
  </div>
);

function App() {
  return (
    <div className="relative w-full min-h-screen bg-slate-50 dark:bg-[#030712] transition-colors duration-500 text-slate-900 dark:text-zinc-50 overflow-x-hidden">

      {/* Glow Ambiente Global Espalhado para o Dark Mode não ficar opaco/seco */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-cyan-900/5 dark:bg-cyan-900/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-indigo-900/5 dark:bg-indigo-900/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* Header Fixo Simples / Botão de Tema */}
      <header className="fixed top-0 left-0 w-full p-6 z-50 flex justify-end items-center pointer-events-none">
        <div className="glass rounded-full pointer-events-auto">
          <ThemeToggle />
        </div>
      </header>

      <main className="relative z-10">
        <Hero />

        <Positioning />
        <Divider />

        <ProblemSolution />
        <Divider />

        <Solutions />
        <Divider />

        <CaseStudy />
        <Divider />

        <WorkProcess />
        <Divider />

        <AboutStudio />
      </main>

      <FooterCTA />
    </div>
  );
}

export default App;
