import React from 'react';
import { SectionType } from '../types';
import ExecutiveSummary from './sections/ExecutiveSummary';
import ProblemMarket from './sections/ProblemMarket';
import CoreFeatures from './sections/CoreFeatures';
import Personas from './sections/Personas';
import Technical from './sections/Technical';
import { Card } from './ui/Card';

interface SectionRendererProps {
  activeSection: SectionType;
}

const PlaceholderSection: React.FC<{ title: string }> = ({ title }) => (
    <div className="animate-in fade-in duration-500">
        <h2 className="text-3xl font-bold text-white mb-6">{title}</h2>
        <Card>
            <p className="text-slate-400 italic">Detailed content for this section is available in the full PDF document.</p>
        </Card>
    </div>
);

const SectionRenderer: React.FC<SectionRendererProps> = ({ activeSection }) => {
  switch (activeSection) {
    case SectionType.EXECUTIVE_SUMMARY:
      return <ExecutiveSummary />;
    case SectionType.PROBLEM_MARKET:
      return <ProblemMarket />;
    case SectionType.CORE_FEATURES:
      return <CoreFeatures />;
    case SectionType.PERSONAS:
        return <Personas />;
    case SectionType.TECHNICAL:
        return <Technical />;
    case SectionType.VISION_STRATEGY:
        return (
            <div className="animate-in fade-in duration-500 space-y-8">
                 <h2 className="text-3xl font-bold text-white">Product Vision & Strategy</h2>
                 <Card className="bg-indigo-900/20 border-indigo-500/30">
                    <h3 className="text-xl font-semibold text-indigo-300 mb-4">Vision Statement</h3>
                    <p className="text-xl text-slate-200 italic leading-relaxed">
                        "OutThink Risk Warrant will become the industry standard for defensible human risk management, enabling organizations to proactively prevent human-initiated security incidents while creating audit-ready documentation."
                    </p>
                 </Card>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card title="Strategic Shift">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-slate-400">From</span>
                            <span className="text-slate-400">To</span>
                        </div>
                        <div className="flex justify-between items-center font-semibold text-slate-200 border-b border-slate-700 pb-2 mb-2">
                            <span>"Know your risk"</span>
                            <span>"Manage your risk"</span>
                        </div>
                         <div className="flex justify-between items-center font-semibold text-slate-200">
                            <span>Training Vendor</span>
                            <span>Enforcement Platform</span>
                        </div>
                    </Card>
                    <Card title="Product Principles">
                        <ul className="list-disc pl-4 space-y-2 text-slate-300">
                            <li><strong className="text-white">Proportionality:</strong> Never over-restrict.</li>
                            <li><strong className="text-white">Transparency:</strong> Users can appeal.</li>
                            <li><strong className="text-white">Financial Language:</strong> Risk in dollars.</li>
                            <li><strong className="text-white">Auditability:</strong> Every decision logged.</li>
                        </ul>
                    </Card>
                 </div>
            </div>
        );
    default:
      return <PlaceholderSection title={activeSection.replace('_', ' ').toUpperCase()} />;
  }
};

export default SectionRenderer;