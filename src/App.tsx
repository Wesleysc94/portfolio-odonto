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
  <div className="w-full max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-cyan-900/40 dark:via-cyan-600/60 to-transparent relative opacity-60">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 dark:via-cyan-400/30 to-transparent blur-[2px]" />
  </div>
);

function App() {
  return (
    <div className="relative w-full min-h-screen bg-slate-50 dark:bg-[#030712] transition-colors duration-500 text-slate-900 dark:text-zinc-50 overflow-x-hidden">

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-cyan-900/5 dark:bg-cyan-500/10 blur-[60px] md:blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-indigo-900/5 dark:bg-blue-600/10 blur-[60px] md:blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="fixed bottom-6 left-0 w-full px-6 z-50 flex justify-between items-end pointer-events-none">

        {/* Toggle Right/Left */}
        <div className="pointer-events-auto">
          <div className="glass rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
            <ThemeToggle />
          </div>
        </div>

        {/* Whatsapp Right */}
        <div className="pointer-events-auto">
          <a
            href="https://wa.me/5511930863826"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:-translate-y-2 hover:bg-[#1ebd59] transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-7 md:h-7"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
          </a>
        </div>
      </div>

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
