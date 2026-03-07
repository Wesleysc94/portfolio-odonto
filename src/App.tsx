import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import Positioning from './components/Positioning';
import ProblemSolution from './components/ProblemSolution';
import Solutions from './components/Solutions';
import CaseStudy from './components/CaseStudy';
import WorkProcess from './components/WorkProcess';
import AboutStudio from './components/AboutStudio';
import FooterCTA from './components/FooterCTA';
import LeadFormModal from './components/LeadFormModal';
import { useState } from 'react';

// Divisor premium com GLOW para criar transição suave ("degradê") entre seções
const Divider = () => (
  <div className="w-full max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-cyan-900/40 dark:via-cyan-600/60 to-transparent relative opacity-60">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 dark:via-cyan-400/30 to-transparent blur-[2px]" />
  </div>
);

function App() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-slate-50 dark:bg-[#0a0a0a] transition-colors duration-500 text-slate-900 dark:text-zinc-50 overflow-x-hidden">

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-cyan-900/5 dark:bg-white/5 blur-[60px] md:blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-indigo-900/5 dark:bg-white/5 blur-[60px] md:blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="fixed bottom-6 left-0 w-full px-6 z-50 flex justify-between items-end pointer-events-none">

        {/* Toggle Right/Left */}
        <div className="pointer-events-auto">
          <div className="glass rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
            <ThemeToggle />
          </div>
        </div>

        {/* Whatsapp Right */}
        <div className="pointer-events-auto relative">
          {/* Efeito Pulse/Ping Pulsante no Whatsapp */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-60" style={{ animationDuration: '3s' }}></div>
          <a
            href="#footer-cta"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('footer-cta')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="relative group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-110 hover:bg-[#1ebd59] transition-all duration-300 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </a>
        </div>
      </div>

      <main className="relative z-10">
        <Hero onOpenModal={() => setIsLeadModalOpen(true)} />

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

      <FooterCTA onOpenModal={() => setIsLeadModalOpen(true)} />

      <LeadFormModal isOpen={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} />
    </div>
  );
}

export default App;
