import React from 'react';
import { PRD_META, ONE_LINER } from '../../constants';
import { Card } from '../ui/Card';
import { ArrowRight, Target, Clock, AlertOctagon } from 'lucide-react';

const ExecutiveSummary: React.FC = () => {
  return (
    <div id="executive_summary" className="space-y-8 py-8 border-b-2 border-dashed border-gray-300">
      {/* Header */}
      <div className="bg-white border-2 border-black p-8 retro-shadow relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
             <h1 className="text-9xl font-bold">01</h1>
        </div>
        
        <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 border border-black bg-gray-100 px-3 py-1 text-xs font-bold uppercase mb-6">
                <span>Product Vision</span>
                <ArrowRight size={14} />
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-black mb-4 tracking-tighter uppercase">
            {PRD_META.title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-mono border-l-4 border-black pl-4 leading-relaxed">
            {PRD_META.subtitle}
            </p>
            
            <div className="mt-8 flex gap-4 text-xs font-mono">
                <div className="px-2 py-1 bg-black text-white">AUTHOR: {PRD_META.author}</div>
                <div className="px-2 py-1 border border-black">DATE: {PRD_META.date}</div>
            </div>
        </div>
      </div>

      {/* The One Liner */}
      <Card className="bg-[#ffdd57]">
        <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-3 border-b-2 border-black pb-2">The Core Value Proposition</h2>
        <p className="text-xl md:text-3xl font-bold text-black font-serif italic leading-tight">
          "{ONE_LINER}"
        </p>
      </Card>

      {/* Market Forces */}
      <Card title="Why Now? (Market Forces)">
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <li className="flex flex-col space-y-2">
                    <div className="bg-black text-white p-2 w-fit">
                         <AlertOctagon size={24} />
                    </div>
                    <div>
                        <span className="block text-black font-bold uppercase text-sm mb-1">SEC Rules (2023)</span>
                        <span className="text-gray-600 text-sm font-mono leading-tight">Public companies must disclose oversight & demonstrate "reasonable" security.</span>
                    </div>
                </li>
                <li className="flex flex-col space-y-2">
                    <div className="bg-black text-white p-2 w-fit">
                        <Target size={24} />
                    </div>
                    <div>
                        <span className="block text-black font-bold uppercase text-sm mb-1">SolarWinds Precedent</span>
                        <span className="text-gray-600 text-sm font-mono leading-tight">Personal liability for CISOs who cannot defend their decisions.</span>
                    </div>
                </li>
                 <li className="flex flex-col space-y-2">
                    <div className="bg-black text-white p-2 w-fit">
                        <Clock size={24} />
                    </div>
                    <div>
                        <span className="block text-black font-bold uppercase text-sm mb-1">Cyber Insurance Crisis</span>
                        <span className="text-gray-600 text-sm font-mono leading-tight">Premiums up 30-50%; underwriters demand proof of management.</span>
                    </div>
                </li>
            </ul>
        </Card>
    </div>
  );
};

export default ExecutiveSummary;