import React from 'react';
import { Card } from '../ui/Card';
import { Layout, Mail, ShieldAlert, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

const UXWorkflows: React.FC = () => {
  return (
    <div id="ux_workflows" className="space-y-8 py-12 border-b-2 border-dashed border-gray-300">
      <div>
        <h2 className="text-3xl font-black text-black mb-4 uppercase">11. UX & Workflows</h2>
        <p className="text-gray-600 font-serif text-lg">Designed for transparency and low-friction management.</p>
      </div>
      
      <Card title="Appeal Workflow">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 text-xs font-mono">
              <div className="border-2 border-black p-3 bg-white text-center w-full">
                  <div className="font-bold uppercase mb-1">User</div>
                  <div className="text-gray-500">Appeals via Form</div>
              </div>
              <ArrowRight className="hidden md:block" />
              <div className="border-2 border-black p-3 bg-white text-center w-full">
                  <div className="font-bold uppercase mb-1">Manager</div>
                  <div className="text-gray-500">Reviews Business Need</div>
              </div>
              <ArrowRight className="hidden md:block" />
              <div className="border-2 border-black p-3 bg-white text-center w-full">
                  <div className="font-bold uppercase mb-1">Security</div>
                  <div className="text-gray-500">Optional Review (Tier 4)</div>
              </div>
              <ArrowRight className="hidden md:block" />
              <div className="border-2 border-black p-3 bg-[#ffdd57] text-center w-full">
                  <div className="font-bold uppercase mb-1">Log</div>
                  <div className="text-black">Action Resolved</div>
              </div>
          </div>
      </Card>

      <div className="space-y-8">
          {/* SOC Dashboard Mockup */}
          <div className="border-2 border-black bg-white p-4 retro-shadow">
              <div className="flex items-center gap-2 mb-4 border-b-2 border-gray-100 pb-2">
                  <Layout size={20} />
                  <span className="font-bold uppercase text-sm">SOC Manager Dashboard</span>
              </div>
              <div className="grid grid-cols-4 gap-4 mb-4">
                  <div className="border border-black p-2 bg-gray-50">
                      <div className="text-[10px] text-gray-500 uppercase">Active Warrants</div>
                      <div className="text-xl font-black">384</div>
                  </div>
                   <div className="border border-black p-2 bg-gray-50">
                      <div className="text-[10px] text-gray-500 uppercase">Risk Exposure</div>
                      <div className="text-xl font-black">$2.34M</div>
                  </div>
                   <div className="border border-black p-2 bg-gray-50">
                      <div className="text-[10px] text-gray-500 uppercase">Pending Appeals</div>
                      <div className="text-xl font-black text-red-500">12</div>
                  </div>
                   <div className="border border-black p-2 bg-gray-50">
                      <div className="text-[10px] text-gray-500 uppercase">Auto-Resolved</div>
                      <div className="text-xl font-black text-green-600">892</div>
                  </div>
              </div>
              <div className="border border-gray-200 h-32 flex items-center justify-center text-gray-400 font-mono text-xs bg-gray-50">
                  [Interactive Risk Heatmap Visualization]
              </div>
          </div>
          
          {/* Warrant Detail View */}
           <div className="border-2 border-black bg-white p-4 retro-shadow">
               <div className="flex justify-between items-center border-b-2 border-black pb-2 mb-4">
                   <div className="flex items-center gap-2">
                       <ShieldCheck size={20} />
                       <span className="font-bold uppercase text-sm">Warrant #W-2024-11-30-00147</span>
                   </div>
                   <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 uppercase">Active</span>
               </div>
               
               <div className="grid grid-cols-3 gap-4 mb-4">
                   <div className="col-span-2 space-y-2">
                        <div className="p-2 bg-red-50 border-l-4 border-red-500">
                            <div className="text-[10px] font-bold uppercase text-red-500">Risk Factor 1</div>
                            <div className="text-xs font-bold">Phishing Resilience (-32 pts)</div>
                            <div className="text-[10px] text-gray-600 font-mono">Failed 3 of last 5 simulations</div>
                        </div>
                         <div className="p-2 bg-orange-50 border-l-4 border-orange-500">
                            <div className="text-[10px] font-bold uppercase text-orange-500">Risk Factor 2</div>
                            <div className="text-xs font-bold">Access Level (x2.8)</div>
                            <div className="text-[10px] text-gray-600 font-mono">Privileged access to Finance systems</div>
                        </div>
                   </div>
                   <div className="border-l border-gray-200 pl-4">
                       <div className="text-[10px] font-bold uppercase mb-2">Controls Applied</div>
                       <ul className="text-[10px] space-y-1 font-mono text-gray-600">
                           <li className="flex items-center gap-1"><Clock size={10} /> Step-up MFA</li>
                           <li className="flex items-center gap-1"><Clock size={10} /> 1hr Session Limit</li>
                           <li className="flex items-center gap-1"><Clock size={10} /> DLP Enabled</li>
                       </ul>
                   </div>
               </div>
           </div>

          {/* Employee Email Mockup */}
          <div className="border-2 border-black bg-white p-6 retro-shadow max-w-2xl mx-auto relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 text-xs font-bold uppercase">User Notification</div>
              <div className="flex items-center gap-2 mb-6 text-gray-500 text-xs font-mono border-b border-gray-100 pb-4">
                  <Mail size={16} />
                  <span>Subject: Security Profile Update - Action Required</span>
              </div>
              <div className="space-y-4 font-serif text-sm">
                  <p>Dear John,</p>
                  <p>Based on recent security assessments, your account has been assigned <strong className="bg-[#ffdd57] px-1">Tier 2 Enhanced Controls</strong>.</p>
                  
                  <div className="bg-gray-50 p-4 border-l-4 border-black">
                      <h4 className="font-bold text-xs uppercase mb-2">Why this happened:</h4>
                      <ul className="list-disc pl-4 text-xs space-y-1">
                          <li>Recent phishing simulation failure (2 of last 5)</li>
                          <li>Role involves access to sensitive financial systems</li>
                      </ul>
                  </div>

                  <p>What you'll notice: You will be asked for additional verification when accessing sensitive apps.</p>
                  
                  <div className="flex gap-4 mt-6">
                      <button className="bg-black text-white px-4 py-2 text-xs font-bold uppercase hover:bg-gray-800">View Remediation Plan</button>
                      <button className="border-2 border-black px-4 py-2 text-xs font-bold uppercase hover:bg-gray-50">Appeal Decision</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default UXWorkflows;