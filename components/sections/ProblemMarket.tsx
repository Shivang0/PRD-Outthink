import React from 'react';
import { Card } from '../ui/Card';
import { AlertCircle, Zap, Shield, FileX, BarChart4, X } from 'lucide-react';

const ProblemMarket: React.FC = () => {
  return (
    <div id="problem_market" className="space-y-8 py-12 border-b-2 border-dashed border-gray-300">
       <div className="max-w-4xl">
        <h2 className="text-3xl font-black text-black mb-4 uppercase flex items-center gap-2">
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-lg">!</div>
            The Core Problem
        </h2>
        <p className="text-black text-lg font-serif border-l-4 border-red-500 pl-6 py-2 bg-white retro-shadow-sm">
            Security teams know which employees are risky, but they lack the automated machinery to restrict them proportionate to that risk, and the documentation to prove their decisions were justified.
        </p>
      </div>

      {/* The Market Gap Visualization */}
      <div className="bg-white border-2 border-black p-8 retro-shadow relative">
        <div className="absolute top-0 left-0 bg-black text-white text-xs font-bold px-2 py-1">MARKET ANALYSIS</div>
        <h3 className="text-xl font-bold text-center text-black mb-12 mt-4 font-mono uppercase">The Connectivity Gap</h3>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 relative py-8">
             {/* Left */}
             <div className="text-center bg-gray-50 p-6 border-2 border-black w-64 relative z-10">
                <div className="font-black text-lg mb-2">Human Risk Intel</div>
                <div className="text-gray-500 text-xs font-mono uppercase">OutThink</div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full"></div>
             </div>
             
             {/* Gap 1 */}
             <div className="flex flex-col items-center justify-center relative h-16 md:h-auto md:w-24">
                 <div className="absolute w-full h-0.5 bg-black top-1/2 left-0 -z-10 hidden md:block border-t border-dashed border-gray-400"></div>
                 <div className="absolute h-full w-0.5 bg-black top-0 left-1/2 -z-10 md:hidden border-l border-dashed border-gray-400"></div>
                 
                 <div className="bg-white border-2 border-red-500 text-red-600 px-2 py-1 text-[10px] font-bold uppercase rotate-0 md:-rotate-12 retro-shadow-sm">
                    Enforcement Gap
                 </div>
                 <X className="text-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20" size={48} />
             </div>

             {/* Middle */}
             <div className="text-center bg-gray-50 p-6 border-2 border-black w-64 relative z-10">
                <div className="font-black text-lg mb-2">Security Controls</div>
                <div className="text-gray-500 text-xs font-mono uppercase">Entra / Okta</div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full"></div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full"></div>
             </div>

             {/* Gap 2 */}
             <div className="flex flex-col items-center justify-center relative h-16 md:h-auto md:w-24">
                 <div className="absolute w-full h-0.5 bg-black top-1/2 left-0 -z-10 hidden md:block border-t border-dashed border-gray-400"></div>
                 <div className="absolute h-full w-0.5 bg-black top-0 left-1/2 -z-10 md:hidden border-l border-dashed border-gray-400"></div>
                 
                 <div className="bg-white border-2 border-red-500 text-red-600 px-2 py-1 text-[10px] font-bold uppercase rotate-0 md:rotate-12 retro-shadow-sm">
                    Defensibility Gap
                 </div>
                 <X className="text-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20" size={48} />
             </div>

             {/* Right */}
             <div className="text-center bg-gray-50 p-6 border-2 border-black w-64 relative z-10">
                <div className="font-black text-lg mb-2">Compliance/Audit</div>
                <div className="text-gray-500 text-xs font-mono uppercase">GRC Tools</div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full"></div>
             </div>
        </div>
        <p className="text-center text-gray-600 mt-8 font-mono text-sm border-t-2 border-gray-100 pt-4">No vendor connects all three domains. <span className="text-black font-bold bg-[#ffdd57] px-1">OutThink Risk Warrant</span> bridges these gaps.</p>
      </div>

      {/* Pain Points Grid */}
      <h3 className="text-xl font-black text-black mt-12 mb-6 uppercase border-b-2 border-black inline-block">SOC Manager Pain Points</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="hover:bg-gray-50">
            <div className="flex items-center gap-3 mb-3">
                <div className="bg-black text-white p-1"><Zap size={18} /></div>
                <h4 className="font-bold text-black uppercase">Alert Fatigue</h4>
            </div>
            <p className="text-gray-600 text-sm font-mono">Average 4.6 employees involved per incident. Teams can't focus on proactive prevention.</p>
        </Card>
        
        <Card className="hover:bg-gray-50">
            <div className="flex items-center gap-3 mb-3">
                <div className="bg-black text-white p-1"><Shield size={18} /></div>
                <h4 className="font-bold text-black uppercase">Reactive Posture</h4>
            </div>
            <p className="text-gray-600 text-sm font-mono">SOC managers fear they "won't ever clear their queues". Always firefighting.</p>
        </Card>

        <Card className="hover:bg-gray-50">
            <div className="flex items-center gap-3 mb-3">
                <div className="bg-black text-white p-1"><FileX size={18} /></div>
                <h4 className="font-bold text-black uppercase">Defensibility Gap</h4>
            </div>
            <p className="text-gray-600 text-sm font-mono">No documentation for why specific access controls were applied to specific users.</p>
        </Card>

        <Card className="hover:bg-gray-50">
            <div className="flex items-center gap-3 mb-3">
                <div className="bg-black text-white p-1"><BarChart4 size={18} /></div>
                <h4 className="font-bold text-black uppercase">Board Communication</h4>
            </div>
            <p className="text-gray-600 text-sm font-mono">Executives want risk in dollars, not technical scores. Misalignment creates friction.</p>
        </Card>
      </div>
    </div>
  );
};

export default ProblemMarket;