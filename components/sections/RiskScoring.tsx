import React from 'react';
import { Card } from '../ui/Card';
import { GitCompare, Clock, Eye, Users } from 'lucide-react';

const RiskScoring: React.FC = () => {
  return (
    <div id="risk_scoring" className="space-y-8 py-12 border-b-2 border-dashed border-gray-300">
      <div>
        <h2 className="text-3xl font-black text-black mb-4 uppercase">07. Human Risk Scoring</h2>
        <p className="text-gray-600 font-serif text-lg">Moving beyond "black box" scores to defensible, quantified risk.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card title="FAIR-Native Quantification">
            <p className="text-sm font-mono text-gray-600 mb-4">Translates arbitrary scores into financial terms using the Factor Analysis of Information Risk model.</p>
            <div className="bg-gray-100 p-4 border-2 border-black text-xs font-mono space-y-2">
                <div className="flex justify-between">
                    <span>Attack Frequency</span>
                    <span>→ Threat Event Freq</span>
                </div>
                <div className="flex justify-between">
                    <span>Training Gaps</span>
                    <span>→ Vulnerability</span>
                </div>
                 <div className="flex justify-between">
                    <span>Access Level</span>
                    <span>→ Loss Magnitude</span>
                </div>
                <div className="border-t border-gray-400 pt-2 font-bold flex justify-between">
                    <span>OUTPUT</span>
                    <span>= Annualized Loss ($)</span>
                </div>
            </div>
        </Card>

        <Card title="Multi-Source Validation">
             <div className="space-y-4">
                <div className="flex gap-3">
                    <div className="bg-black text-white p-2 h-fit"><GitCompare size={16} /></div>
                    <div>
                        <h4 className="font-bold text-sm uppercase">Cross-Validation</h4>
                        <p className="text-xs font-mono text-gray-600">If a user claims "I use a password manager" in a survey, we validate it against browser extension telemetry.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="bg-black text-white p-2 h-fit"><Clock size={16} /></div>
                    <div>
                        <h4 className="font-bold text-sm uppercase">Temporal Weighting</h4>
                        <p className="text-xs font-mono text-gray-600">Recent behaviors weigh more. Decay function: <span className="bg-gray-200 px-1">weight = e^(-λ × days)</span>.</p>
                    </div>
                </div>
             </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card title="Peer Normalization Logic">
             <div className="flex items-start gap-4 mb-4">
                 <Users className="text-black" />
                 <p className="text-sm text-gray-600">Same score means different things for different roles. A Finance Admin is judged against other Finance Admins.</p>
             </div>
             <div className="bg-gray-900 p-4 border-2 border-gray-700 text-green-400 font-mono text-xs overflow-x-auto">
<pre>{`PeerGroup = Function(
  role_family,      # e.g., Finance, IT
  access_level,     # Standard, Privileged
  data_sensitivity, # PII, Financial
  org_level         # Manager, Exec
)`}</pre>
             </div>
        </Card>

        <Card title="Glass Box Explainability">
            <div className="space-y-4">
                <p className="text-sm font-mono text-gray-600">Every score must be decomposable to specific evidence.</p>
                <div className="border-2 border-black p-4 bg-white retro-shadow-sm">
                    <div className="font-bold mb-2 border-b border-black pb-1">User Risk Score #4782 Explanation</div>
                    <ul className="text-xs font-mono space-y-2">
                        <li className="flex justify-between">
                            <span>1. Phishing Resilience (-28 pts)</span>
                            <span className="text-red-500">Clicked 2/5 sims</span>
                        </li>
                        <li className="flex justify-between">
                            <span>2. Access Level (+15 risk)</span>
                            <span className="text-orange-500">Finance Privileges</span>
                        </li>
                        <li className="flex justify-between">
                            <span>3. Training Gap (-18 pts)</span>
                            <span className="text-red-500">45% Complete</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
      </div>
    </div>
  );
};

export default RiskScoring;