import React from 'react';
import { Card } from '../ui/Card';
import { Network, Server, ArrowDown, Database, Globe } from 'lucide-react';

const IntegrationArch: React.FC = () => {
  return (
    <div id="integration" className="space-y-8 py-12 border-b-2 border-dashed border-gray-300">
      <div>
        <h2 className="text-3xl font-black text-black mb-4 uppercase">09. Integration Architecture</h2>
        <p className="text-gray-600 font-serif text-lg">Event-driven architecture to connect Intelligence, Enforcement, and Compliance.</p>
      </div>

      <div className="bg-white border-2 border-black p-6 retro-shadow">
          <h3 className="text-center font-black uppercase mb-6">Data Flow Diagram</h3>
          <div className="flex flex-col items-center space-y-4 text-xs font-mono font-bold">
              {/* Top Layer */}
              <div className="flex gap-4 w-full justify-center">
                  <div className="border-2 border-black p-2 bg-gray-100 w-32 text-center">HR Systems</div>
                  <div className="border-2 border-black p-2 bg-gray-100 w-32 text-center">OutThink Core</div>
                  <div className="border-2 border-black p-2 bg-gray-100 w-32 text-center">Endpoint EDR</div>
                  <div className="border-2 border-black p-2 bg-gray-100 w-32 text-center">Identity IdP</div>
              </div>
              
              <ArrowDown size={24} />
              
              {/* Middle Layer */}
              <div className="border-2 border-black p-4 w-full max-w-2xl bg-[#f0f0f0] text-center retro-shadow-sm">
                  <div className="mb-2">EVENT STREAM (Kafka)</div>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                      <div className="bg-white border border-black p-2">Risk Aggregator</div>
                      <div className="bg-white border border-black p-2">FAIR Calculator</div>
                      <div className="bg-white border border-black p-2">Peer Benchmarker</div>
                  </div>
              </div>

              <ArrowDown size={24} />

              {/* Engine Layer */}
              <div className="border-2 border-black p-4 w-full max-w-2xl bg-[#ffdd57] text-center retro-shadow-sm">
                   <div className="mb-2">RISK WARRANT PROCESSOR</div>
                   <div className="flex justify-between gap-2 text-[10px] sm:text-xs">
                       <span className="bg-white border border-black p-1">Threshold Evaluator</span>
                       <span className="bg-white border border-black p-1">Warrant Generator</span>
                       <span className="bg-white border border-black p-1">Control Orchestrator</span>
                   </div>
              </div>

              <ArrowDown size={24} />

              {/* Bottom Layer */}
              <div className="flex gap-2 w-full justify-center flex-wrap">
                  <div className="border-2 border-black p-2 bg-black text-white w-24 text-center">Entra ID</div>
                  <div className="border-2 border-black p-2 bg-black text-white w-24 text-center">Okta</div>
                  <div className="border-2 border-black p-2 bg-black text-white w-24 text-center">Zscaler</div>
                  <div className="border-2 border-black p-2 bg-black text-white w-24 text-center">Proofpoint</div>
              </div>
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Microsoft Entra ID">
              <div className="text-xs font-mono space-y-2">
                  <p><strong className="bg-gray-200 px-1">API:</strong> Graph API v1.0</p>
                  <p><strong className="bg-gray-200 px-1">Auth:</strong> OAuth 2.0 Client Credentials</p>
                  <p><strong className="bg-gray-200 px-1">Actions:</strong></p>
                  <ul className="list-disc pl-4 text-gray-600">
                      <li>Create/Update Conditional Access Policies</li>
                      <li>Add/Remove User from Risk Groups</li>
                      <li>Trigger Step-up MFA</li>
                  </ul>
              </div>
          </Card>
           <Card title="Zscaler">
              <div className="text-xs font-mono space-y-2">
                  <p><strong className="bg-gray-200 px-1">API:</strong> Zscaler REST API</p>
                  <p><strong className="bg-gray-200 px-1">Auth:</strong> API Token</p>
                  <p><strong className="bg-gray-200 px-1">Actions:</strong></p>
                  <ul className="list-disc pl-4 text-gray-600">
                      <li>Update URL Category Filtering</li>
                      <li>Risk-based Policy Association</li>
                      <li>Block Shadow IT apps</li>
                  </ul>
              </div>
          </Card>
      </div>
    </div>
  );
};

export default IntegrationArch;