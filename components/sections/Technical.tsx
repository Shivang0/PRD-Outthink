import React from 'react';
import { TECH_REQUIREMENTS } from '../../constants';
import { Card } from '../ui/Card';
import { Server, Share2, Lock, Terminal } from 'lucide-react';

const Technical: React.FC = () => {
  return (
    <div id="technical" className="space-y-8 py-12 border-b-2 border-dashed border-gray-300">
      <div>
        <h2 className="text-3xl font-black text-black mb-4 uppercase">Technical Specs</h2>
        <p className="text-gray-600 font-serif text-lg">Built for scale, security, and seamless integration.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Specs Table */}
        <div className="border-2 border-black bg-white retro-shadow p-0">
            <div className="bg-black text-white p-2 font-mono text-xs font-bold border-b-2 border-black flex items-center gap-2">
                <Terminal size={14} /> SYSTEM_REQUIREMENTS.TXT
            </div>
            <table className="w-full text-left text-sm font-mono">
                <thead className="bg-gray-100 text-black border-b-2 border-black">
                    <tr>
                        <th className="px-4 py-3 font-bold uppercase border-r-2 border-black">Requirement</th>
                        <th className="px-4 py-3 font-bold uppercase">Specification</th>
                    </tr>
                </thead>
                <tbody className="divide-y-2 divide-black">
                    {TECH_REQUIREMENTS.map((req, i) => (
                        <tr key={i} className="hover:bg-[#ffffd0]">
                            <td className="px-4 py-3 font-bold border-r-2 border-black">{req.category}</td>
                            <td className="px-4 py-3 text-gray-700">{req.spec}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/* Integration Architecture */}
        <Card title="Integration Hub">
            <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 border-2 border-black bg-gray-50">
                    <div className="bg-black p-2 text-white"><Share2 size={20} /></div>
                    <div>
                        <div className="text-black font-bold uppercase text-sm">Identity (Entra ID, Okta)</div>
                        <div className="text-xs text-gray-500 font-mono">Graph API v1.0, REST API</div>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-3 border-2 border-black bg-gray-50">
                    <div className="bg-black p-2 text-white"><Lock size={20} /></div>
                    <div>
                        <div className="text-black font-bold uppercase text-sm">Email Security (Proofpoint)</div>
                        <div className="text-xs text-gray-500 font-mono">TAP v2 API</div>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-3 border-2 border-black bg-gray-50">
                     <div className="bg-black p-2 text-white"><Server size={20} /></div>
                    <div>
                        <div className="text-black font-bold uppercase text-sm">SIEM (Sentinel)</div>
                        <div className="text-xs text-gray-500 font-mono">Log Analytics API</div>
                    </div>
                </div>
            </div>
        </Card>
      </div>

      {/* Warrant Detail Mockup */}
      <Card title="Warrant Structure (JSON)">
        <div className="bg-gray-900 p-4 border-2 border-gray-800 text-green-400 font-mono text-xs overflow-x-auto shadow-inner">
<pre>{`WARRANT #W-2024-11-30-00147
├── Metadata
│   ├── Issued: 2024-11-30 14:19:07 UTC
│   └── Status: Active
├── Risk Assessment
│   ├── Risk Tier: 3 (High)
│   ├── FAIR ALE: $43,010
│   └── Peer Percentile: 89th
├── Controls Applied
│   ├── Entra ID: Step-up MFA all apps
│   └── Zscaler: Social media blocked
└── Legal/Policy Basis
    ├── Policy: InfoSec Policy §4.2.1
    └── Regulation: SOC 2 CC6.1`}</pre>
        </div>
      </Card>
    </div>
  );
};

export default Technical;