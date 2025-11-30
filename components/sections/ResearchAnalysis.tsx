import React from 'react';
import { Card } from '../ui/Card';
import { Check, X, AlertTriangle } from 'lucide-react';

const ResearchAnalysis: React.FC = () => {
  return (
    <div id="research_analysis" className="space-y-8 py-12 border-b-2 border-dashed border-gray-300">
      <div>
        <h2 className="text-3xl font-black text-black mb-4 uppercase">03. Research & Analysis</h2>
        <p className="text-gray-600 font-serif text-lg">Analysis of the current market landscape and competitive differentiation.</p>
      </div>

      <Card title="Competitive Differentiation Matrix">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm font-mono border-collapse">
            <thead>
              <tr className="bg-black text-white">
                <th className="p-3 border-r border-gray-700">Capability</th>
                <th className="p-3 border-r border-gray-700">KnowBe4</th>
                <th className="p-3 border-r border-gray-700">Proofpoint</th>
                <th className="p-3 border-r border-gray-700">Entra ID</th>
                <th className="p-3 bg-[#ffdd57] text-black">OutThink</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-black">
                <td className="p-3 font-bold">Training Content</td>
                <td className="p-3"><Check size={16} className="inline mr-1"/> Strong</td>
                <td className="p-3 text-gray-500"><AlertTriangle size={16} className="inline mr-1"/> Basic</td>
                <td className="p-3 text-red-500"><X size={16} className="inline mr-1"/> None</td>
                <td className="p-3 bg-[#fffbe6] font-bold border-l-2 border-black"><Check size={16} className="inline mr-1"/> Strong</td>
              </tr>
              <tr className="border-b-2 border-black">
                <td className="p-3 font-bold">Behavioral Signals</td>
                <td className="p-3 text-gray-500"><AlertTriangle size={16} className="inline mr-1"/> Limited</td>
                <td className="p-3 text-gray-500"><AlertTriangle size={16} className="inline mr-1"/> Limited</td>
                <td className="p-3 text-gray-500"><AlertTriangle size={16} className="inline mr-1"/> Tech Only</td>
                <td className="p-3 bg-[#fffbe6] font-bold border-l-2 border-black"><Check size={16} className="inline mr-1"/> 20+ Factors</td>
              </tr>
              <tr className="border-b-2 border-black">
                <td className="p-3 font-bold">Automated Control</td>
                <td className="p-3 text-red-500"><X size={16} className="inline mr-1"/> None</td>
                <td className="p-3 text-red-500"><X size={16} className="inline mr-1"/> None</td>
                <td className="p-3"><Check size={16} className="inline mr-1"/> Strong</td>
                <td className="p-3 bg-[#fffbe6] font-bold border-l-2 border-black"><Check size={16} className="inline mr-1"/> Integrated</td>
              </tr>
              <tr className="border-b-2 border-black">
                <td className="p-3 font-bold">Audit "Warrants"</td>
                <td className="p-3 text-gray-500"><AlertTriangle size={16} className="inline mr-1"/> Basic</td>
                <td className="p-3 text-gray-500"><AlertTriangle size={16} className="inline mr-1"/> Basic</td>
                <td className="p-3 text-gray-500"><AlertTriangle size={16} className="inline mr-1"/> Logs Only</td>
                <td className="p-3 bg-[#fffbe6] font-bold border-l-2 border-black"><Check size={16} className="inline mr-1"/> Native</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Inspiration Sources">
              <ul className="space-y-3 text-sm font-mono">
                  <li className="flex gap-2"><span className="font-bold">FAIR Institute:</span> Risk quantification standards.</li>
                  <li className="flex gap-2"><span className="font-bold">Splunk SOAR:</span> Automated playbooks.</li>
                  <li className="flex gap-2"><span className="font-bold">CrowdStrike:</span> Real-time behavioral analytics.</li>
              </ul>
          </Card>
          <Card title="Design Principles">
              <ul className="space-y-3 text-sm font-mono">
                  <li className="flex gap-2"><span className="font-bold">1. Proportionality:</span> Never over-restrict.</li>
                  <li className="flex gap-2"><span className="font-bold">2. Transparency:</span> Explain "Why".</li>
                  <li className="flex gap-2"><span className="font-bold">3. Auditability:</span> Document everything.</li>
              </ul>
          </Card>
      </div>
    </div>
  );
};

export default ResearchAnalysis;