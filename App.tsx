import React from 'react';
import Sidebar from './components/Sidebar';
import { Download, Printer } from 'lucide-react';

// Sections
import ExecutiveSummary from './components/sections/ExecutiveSummary';
import ProblemMarket from './components/sections/ProblemMarket';
import ResearchAnalysis from './components/sections/ResearchAnalysis';
import VisionStrategy from './components/sections/VisionStrategy';
import Personas from './components/sections/Personas';
import CoreFeatures from './components/sections/CoreFeatures';
import RiskScoring from './components/sections/RiskScoring';
import AIStrategy from './components/sections/AIStrategy';
import IntegrationArch from './components/sections/IntegrationArch';
import Technical from './components/sections/Technical';
import UXWorkflows from './components/sections/UXWorkflows';
import SuccessMetrics from './components/sections/SuccessMetrics';
import GoToMarket from './components/sections/GoToMarket';
import RisksMitigations from './components/sections/RisksMitigations';
import Appendices from './components/sections/Appendices';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-[#f2f0e9] text-[#1a1a1a] font-sans selection:bg-[#ffdd57] selection:text-black">
      <Sidebar activeSection={'executive_summary' as any} />
      
      <main className="flex-1 w-full max-w-6xl mx-auto border-l-0 lg:border-l-2 border-black bg-[#fdfbf7] min-h-screen relative shadow-2xl">
        {/* Top Header for Mobile/Context */}
        <header className="sticky top-0 z-20 bg-[#fdfbf7] border-b-2 border-black px-8 py-4 flex justify-between items-center retro-shadow-sm">
            <div className="text-sm font-bold font-mono text-gray-500 uppercase tracking-tight">
                OutThink // PRD Viewer
            </div>
            <div className="flex gap-2">
                <button className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-black px-3 py-2 text-xs font-bold uppercase border-2 border-black transition-all retro-shadow-hover">
                    <Printer size={14} />
                    <span className="hidden sm:inline">Print View</span>
                </button>
                <button className="flex items-center space-x-2 bg-black hover:bg-gray-800 text-white px-3 py-2 text-xs font-bold uppercase border-2 border-transparent transition-all retro-shadow-hover">
                    <Download size={14} />
                    <span className="hidden sm:inline">Export PDF</span>
                </button>
            </div>
        </header>

        <div className="p-8 pb-32 space-y-2">
          
          <ExecutiveSummary />
          
          <ProblemMarket />

          <ResearchAnalysis />

          <VisionStrategy />

          <Personas />
          
          <CoreFeatures />

          <RiskScoring />

          <AIStrategy />

          <IntegrationArch />
          
          <Technical />

          <UXWorkflows />

          <SuccessMetrics />

          <GoToMarket />

          <RisksMitigations />

          <Appendices />
          
          <footer className="pt-20 pb-10 text-center border-t-2 border-black mt-20">
              <p className="font-mono text-xs text-gray-500">CONFIDENTIAL - INTERNAL USE ONLY</p>
              <p className="font-black text-xl mt-2 uppercase">OutThink Security</p>
          </footer>

        </div>
      </main>
    </div>
  );
};

export default App;