import React from 'react';
import { SectionType } from '../types';
import { 
  LayoutDashboard, AlertTriangle, Lightbulb, Users, Layers, 
  Server, TrendingUp, ShieldCheck, ChevronRight, Search, 
  Cpu, Network, MousePointerClick, Globe, FileText, List 
} from 'lucide-react';

interface SidebarProps {
  activeSection: SectionType;
}

const NAV_ITEMS = [
  { id: SectionType.EXECUTIVE_SUMMARY, label: '01. Executive Summary', icon: LayoutDashboard },
  { id: SectionType.PROBLEM_MARKET, label: '02. Problem & Market', icon: AlertTriangle },
  { id: SectionType.RESEARCH, label: '03. Research & Analysis', icon: Search },
  { id: SectionType.VISION_STRATEGY, label: '04. Vision & Strategy', icon: Lightbulb },
  { id: SectionType.PERSONAS, label: '05. User Personas', icon: Users },
  { id: SectionType.CORE_FEATURES, label: '06. Core Features', icon: Layers },
  { id: SectionType.RISK_SCORING, label: '07. Risk Scoring', icon: FileText },
  { id: SectionType.AI_STRATEGY, label: '08. AI Strategy', icon: Cpu },
  { id: SectionType.INTEGRATION, label: '09. Integration Arch', icon: Network },
  { id: SectionType.TECHNICAL, label: '10. Technical Specs', icon: Server },
  { id: SectionType.UX_WORKFLOWS, label: '11. UX & Workflows', icon: MousePointerClick },
  { id: SectionType.METRICS, label: '12. Success Metrics', icon: TrendingUp },
  { id: SectionType.GTM, label: '13. Go-to-Market', icon: Globe },
  { id: SectionType.RISKS, label: '14. Risks & Mitigations', icon: ShieldCheck },
  { id: SectionType.APPENDICES, label: '15. Appendices', icon: List },
];

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="w-72 bg-[#f2f0e9] border-r-2 border-black flex-shrink-0 flex flex-col h-screen sticky top-0 overflow-y-auto hidden lg:flex scrollbar-hide">
      <div className="p-6 border-b-2 border-black bg-white">
        <div className="border-2 border-black p-2 bg-black text-white inline-block mb-2 retro-shadow-sm">
           <h1 className="text-xl font-bold font-mono tracking-tighter">
             OUTTHINK_
           </h1>
        </div>
        <p className="text-black font-bold text-sm uppercase">Risk Warrant PRD</p>
        <p className="text-gray-500 text-xs font-mono">v1.0.4-RELEASE</p>
      </div>

      <nav className="flex-1 p-6 space-y-1">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-300 pb-1">Table of Contents</p>
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group flex items-center space-x-3 px-3 py-2 text-xs font-bold text-gray-600 hover:text-black hover:bg-white border-2 border-transparent hover:border-black transition-all"
            >
              <Icon size={14} strokeWidth={2.5} />
              <span className="truncate">{item.label}</span>
              <ChevronRight size={12} className="ml-auto opacity-0 group-hover:opacity-100" />
            </a>
          );
        })}
      </nav>
      
      <div className="p-6 border-t-2 border-black bg-white">
        <div className="border-2 border-black p-3 bg-[#ffdd57] retro-shadow-sm">
            <p className="text-xs text-black font-bold font-mono mb-1 uppercase">Current Status</p>
            <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                <span className="text-sm text-black font-bold uppercase">Draft Review</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;