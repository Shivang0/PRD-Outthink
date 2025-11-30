import React from 'react';
import { Card } from '../ui/Card';
import { Bot, Shield, FileText, BrainCircuit, Activity, BookOpen, Scale } from 'lucide-react';

const AIStrategy: React.FC = () => {
  return (
    <div id="ai_strategy" className="space-y-8 py-12 border-b-2 border-dashed border-gray-300">
      <div>
        <h2 className="text-3xl font-black text-black mb-4 uppercase">08. AI Strategy</h2>
        <p className="text-gray-600 font-serif text-lg">"Glass Box" AI that augments human decision making, rather than replacing it.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Philosophy" className="bg-[#f0f0f0]">
             <ul className="text-xs font-mono space-y-3">
                 <li className="flex gap-2"><strong className="text-black">Augment:</strong> AI suggests, Human approves (Tier 4).</li>
                 <li className="flex gap-2"><strong className="text-black">Defensible:</strong> All reasoning must be logged.</li>
                 <li className="flex gap-2"><strong className="text-black">Privacy:</strong> No PII leaves the tenant.</li>
             </ul>
          </Card>
          
          <Card title="Correlation Engine">
              <div className="flex flex-col items-center text-center">
                  <BrainCircuit size={48} className="mb-4 text-black opacity-80" />
                  <p className="text-xs font-mono">Identifies non-obvious combinations (e.g., "High Access + Travel + Low Engagement = 5x Incident Rate") to predict risk.</p>
              </div>
          </Card>
          
          <Card title="Narrative Gen">
              <div className="flex flex-col items-center text-center">
                  <FileText size={48} className="mb-4 text-black opacity-80" />
                  <p className="text-xs font-mono">Generates human-readable "Warrants" and notification emails tailored to the specific risk factors found.</p>
              </div>
          </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <Card title="Anomaly Detection">
              <div className="flex items-center gap-2 mb-2">
                   <Activity size={20} className="text-black" />
                   <span className="text-xs font-bold uppercase">Behavioral</span>
              </div>
              <p className="text-xs font-mono text-gray-600">Flags sudden changes against user's OWN baseline (30-day rolling), such as velocity anomalies or off-hours access.</p>
           </Card>

           <Card title="Training Recs">
              <div className="flex items-center gap-2 mb-2">
                   <BookOpen size={20} className="text-black" />
                   <span className="text-xs font-bold uppercase">Personalized</span>
              </div>
              <p className="text-xs font-mono text-gray-600">Maps specific risk factors to modules. E.g., Phishing failure → "Spot the Phish" interactive module.</p>
           </Card>

           <Card title="Appeal Triage">
              <div className="flex items-center gap-2 mb-2">
                   <Scale size={20} className="text-black" />
                   <span className="text-xs font-bold uppercase">Routing</span>
              </div>
              <p className="text-xs font-mono text-gray-600">Prioritizes appeals by validity likelihood. High confidence → Fast-track to manager.</p>
           </Card>
      </div>

      <Card title="AI Guardrails: What AI Does NOT Do">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm font-mono border-2 border-black">
                <thead className="bg-black text-white">
                    <tr>
                        <th className="p-2">Decision Type</th>
                        <th className="p-2">Why Human Required</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-black">
                    <tr>
                        <td className="p-2 font-bold">Tier 4 Assignment</td>
                        <td className="p-2">Significant restriction requires judgment.</td>
                    </tr>
                    <tr>
                        <td className="p-2 font-bold">Termination Recs</td>
                        <td className="p-2">Legal/HR implications.</td>
                    </tr>
                    <tr>
                        <td className="p-2 font-bold">Override Denial</td>
                        <td className="p-2">Employee rights protection.</td>
                    </tr>
                </tbody>
            </table>
          </div>
      </Card>
    </div>
  );
};

export default AIStrategy;