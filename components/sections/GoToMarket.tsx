import React from 'react';
import { Card } from '../ui/Card';
import { Target, DollarSign, Briefcase } from 'lucide-react';

const GoToMarket: React.FC = () => {
  return (
    <div id="gtm" className="space-y-8 py-12 border-b-2 border-dashed border-gray-300">
      <div>
        <h2 className="text-3xl font-black text-black mb-4 uppercase">13. Go-to-Market</h2>
        <p className="text-gray-600 font-serif text-lg">Targeting regulated industries with high compliance burdens.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Ideal Customer Profile">
              <div className="flex flex-col items-center mb-4">
                  <Target size={32} className="text-black mb-2" />
              </div>
              <ul className="text-xs font-mono space-y-2 list-disc pl-4">
                  <li>500 - 25,000 Employees</li>
                  <li>Regulated (Finance, Health, Retail)</li>
                  <li>Existing OutThink customer</li>
                  <li>Microsoft 365 E5 Stack</li>
                  <li>Recent audit pain</li>
              </ul>
          </Card>

           <Card title="Pricing Strategy">
              <div className="flex flex-col items-center mb-4">
                  <DollarSign size={32} className="text-black mb-2" />
              </div>
              <div className="space-y-3 text-xs font-mono">
                  <div className="border-b border-gray-200 pb-2">
                      <strong className="block uppercase">1. Per-User Add-on</strong>
                      <span className="text-gray-500">Premium tier for existing clients.</span>
                  </div>
                  <div className="border-b border-gray-200 pb-2">
                      <strong className="block uppercase">2. Platform Tier</strong>
                      <span className="text-gray-500">Bundled with Training + Intel.</span>
                  </div>
                  <div>
                      <strong className="block uppercase">3. Value-Based</strong>
                      <span className="text-gray-500">Tied to ALE reduction.</span>
                  </div>
              </div>
          </Card>

          <Card title="Sales Enablement">
              <div className="flex flex-col items-center mb-4">
                  <Briefcase size={32} className="text-black mb-2" />
              </div>
               <ul className="text-xs font-mono space-y-2 list-disc pl-4">
                  <li>Demo Environment (pre-filled data)</li>
                  <li>ROI Calculator (Input: Employees → Output: Savings)</li>
                  <li>Competitive Battlecards</li>
                  <li>Implementation Playbook</li>
              </ul>
          </Card>
      </div>
    </div>
  );
};

export default GoToMarket;