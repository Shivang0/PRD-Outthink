import React, { useState } from 'react';
import { PILLARS } from '../../constants';
import { Card } from '../ui/Card';
import { ChevronRight, Database, Calculator, Network, FileCheck, Scale, History, FileBadge } from 'lucide-react';

const CoreFeatures: React.FC = () => {
  const [activePillar, setActivePillar] = useState(PILLARS[0].id);

  const renderContent = () => {
    switch (activePillar) {
      case 'evidence':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
            <Card title="Risk Factor Aggregation" className="bg-white">
                <div className="flex items-start gap-4">
                    <Database className="text-black mt-1" />
                    <p className="text-gray-600 text-sm font-mono">Consolidates 20+ risk factors including training data, behavioral signals from Defender/Proofpoint, and HR contextual data.</p>
                </div>
            </Card>
            <Card title="FAIR Risk Quantification" className="bg-white">
                <div className="flex items-start gap-4">
                    <Calculator className="text-black mt-1" />
                    <p className="text-gray-600 text-sm font-mono">Translates risk factors into Annualized Loss Expectancy (ALE) dollars using Monte Carlo simulation.</p>
                </div>
            </Card>
             <Card title="Peer Benchmarking" className="bg-white">
                <div className="flex items-start gap-4">
                    <Network className="text-black mt-1" />
                    <p className="text-gray-600 text-sm font-mono">Compares individual risk profiles against role-appropriate peer groups (e.g., Finance vs Finance) to identify true outliers.</p>
                </div>
            </Card>
            <Card title="Evidence Compiler" className="bg-white">
                <div className="flex items-start gap-4">
                    <FileCheck className="text-black mt-1" />
                    <p className="text-gray-600 text-sm font-mono">Assembles all risk data into a structured, defensible evidence package with timestamps and sources.</p>
                </div>
            </Card>
          </div>
        );
      case 'enforce':
        return (
            <div className="space-y-6 animate-in fade-in duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card title="Proportionality Algorithm" className="bg-white">
                        <div className="flex items-start gap-4">
                            <Scale className="text-black mt-1" />
                            <p className="text-gray-600 text-sm font-mono">Determines appropriate control tier (0-4) based on evidence. Never applies more restriction than evidence supports.</p>
                        </div>
                    </Card>
                    <Card title="Control Orchestration" className="bg-white">
                        <div className="flex items-start gap-4">
                            <Network className="text-black mt-1" />
                            <p className="text-gray-600 text-sm font-mono">Push configuration changes to Entra ID (Conditional Access), Proofpoint (Isolation), and Zscaler via API.</p>
                        </div>
                    </Card>
                </div>
                
                <Card title="Control Tier Matrix">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs font-mono border-collapse">
                            <thead>
                                <tr className="bg-black text-white">
                                    <th className="p-2 border-r border-gray-700">Tier</th>
                                    <th className="p-2 border-r border-gray-700">Identity</th>
                                    <th className="p-2 border-r border-gray-700">Email</th>
                                    <th className="p-2">Web/Endpoint</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-black">
                                <tr>
                                    <td className="p-2 font-bold">0 (Normal)</td>
                                    <td className="p-2">Standard</td>
                                    <td className="p-2">Standard</td>
                                    <td className="p-2">Standard</td>
                                </tr>
                                <tr>
                                    <td className="p-2 font-bold bg-gray-50">1 (Watch)</td>
                                    <td className="p-2 bg-gray-50">Enhanced Logging</td>
                                    <td className="p-2 bg-gray-50">Link Rewriting</td>
                                    <td className="p-2 bg-gray-50">Monitoring Only</td>
                                </tr>
                                <tr>
                                    <td className="p-2 font-bold">2 (Elevated)</td>
                                    <td className="p-2">Step-up MFA</td>
                                    <td className="p-2">Attachment Sandbox</td>
                                    <td className="p-2">USB Disabled</td>
                                </tr>
                                <tr>
                                    <td className="p-2 font-bold bg-gray-50">3 (High)</td>
                                    <td className="p-2 bg-gray-50">MFA All Apps</td>
                                    <td className="p-2 bg-gray-50">Ext. Sender Warn</td>
                                    <td className="p-2 bg-gray-50">High-risk Sites Blocked</td>
                                </tr>
                                <tr>
                                    <td className="p-2 font-bold text-white bg-red-600">4 (Critical)</td>
                                    <td className="p-2 text-white bg-red-600">Privileged Review</td>
                                    <td className="p-2 text-white bg-red-600">Quarantine</td>
                                    <td className="p-2 text-white bg-red-600">Allowlist Only</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        );
      case 'endure':
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
            <Card title="Warrant Registry" className="bg-white">
                <div className="flex items-start gap-4">
                    <History className="text-black mt-1" />
                    <p className="text-gray-600 text-sm font-mono">Immutable record of all security actions. Searchable by user, tier, or date for auditors.</p>
                </div>
            </Card>
            <Card title="Regulatory Mapping" className="bg-white">
                <div className="flex items-start gap-4">
                    <FileCheck className="text-black mt-1" />
                    <p className="text-gray-600 text-sm font-mono">Automatically tags actions with SOC 2, ISO 27001, and HIPAA controls they satisfy.</p>
                </div>
            </Card>
             <Card title="Insurance Dossier" className="bg-white">
                <div className="flex items-start gap-4">
                    <FileBadge className="text-black mt-1" />
                    <p className="text-gray-600 text-sm font-mono">Pre-formatted evidence package to demonstrate diligent management to insurance underwriters.</p>
                </div>
            </Card>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div id="core_features" className="space-y-8 py-12 border-b-2 border-dashed border-gray-300">
      <div>
        <h2 className="text-3xl font-black text-black mb-4 uppercase">06. Core Capabilities</h2>
        <p className="text-gray-600 font-serif text-lg">Organized into three pillars to handle the full lifecycle of human risk management.</p>
      </div>

      {/* Pillars Tab Nav */}
      <div className="border-2 border-black bg-gray-100 p-2 retro-shadow">
        <div className="grid grid-cols-3 gap-2 mb-4">
            {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = activePillar === pillar.id;
            return (
                <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`flex flex-col items-center justify-center py-4 border-2 transition-all duration-200 ${
                    isActive 
                    ? 'bg-black text-white border-black shadow-[4px_4px_0px_0px_rgba(120,120,120,1)]' 
                    : 'bg-white text-gray-500 border-transparent hover:border-black hover:bg-gray-50'
                }`}
                >
                <Icon size={24} className={`mb-2`} />
                <span className={`font-bold text-sm font-mono uppercase`}>
                    {pillar.title.replace("Pillar ", "")}
                </span>
                </button>
            );
            })}
        </div>

        {/* Content Area */}
        <div className="bg-[#fdfbf7] border-2 border-black p-6 min-h-[300px]">
            <div className="mb-6 border-b-2 border-gray-200 pb-4">
                <h3 className="text-2xl font-black text-black uppercase mb-1">
                    {PILLARS.find(p => p.id === activePillar)?.title}
                </h3>
                <p className="text-gray-500 font-mono text-sm">
                    {PILLARS.find(p => p.id === activePillar)?.description}
                </p>
            </div>
            {renderContent()}
        </div>
      </div>

      {/* The Warrant Concept */}
      <div className="bg-black text-white p-8 border-2 border-black retro-shadow relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] text-gray-800 font-black text-9xl opacity-20 pointer-events-none">
            WARRANT
        </div>
        <h3 className="text-xl font-bold mb-8 uppercase tracking-widest border-b border-gray-700 pb-2 inline-block">The "Warrant" Metaphor</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-4">
                <div className="flex items-center justify-between text-sm p-3 bg-gray-900 border border-gray-700">
                    <span className="text-gray-400 font-mono">Concept</span>
                    <span className="text-white font-bold">Legal Warrant</span>
                </div>
                <div className="pl-4 border-l-2 border-gray-700 space-y-2 text-sm text-gray-300 font-mono">
                     <p>• Requires probable cause</p>
                     <p>• Documented justification</p>
                     <p>• Can be challenged (appeal)</p>
                </div>
            </div>
            
            <div className="space-y-4">
                 <div className="flex items-center justify-between text-sm p-3 bg-white text-black border border-white">
                    <span className="text-gray-500 font-mono">Concept</span>
                    <span className="text-black font-bold">Risk Warrant</span>
                </div>
                 <div className="pl-4 border-l-2 border-white space-y-2 text-sm text-gray-300 font-mono">
                     <p>• Evidence from multiple factors</p>
                     <p>• Full evidence package attached</p>
                     <p>• User appeal via workflow</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;