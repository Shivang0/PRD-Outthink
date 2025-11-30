import React from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

const RisksMitigations: React.FC = () => {
  return (
    <div id="risks" className="space-y-8 py-12 border-b-2 border-dashed border-gray-300">
      <div>
        <h2 className="text-3xl font-black text-black mb-4 uppercase">14. Risks & Mitigations</h2>
        <p className="text-gray-600 font-serif text-lg">Proactive planning for potential pitfalls.</p>
      </div>

      <div className="overflow-x-auto border-2 border-black retro-shadow">
          <table className="w-full text-left text-sm font-mono">
              <thead className="bg-black text-white uppercase">
                  <tr>
                      <th className="p-3">Risk</th>
                      <th className="p-3 w-24">Impact</th>
                      <th className="p-3">Mitigation Strategy</th>
                  </tr>
              </thead>
              <tbody className="divide-y-2 divide-black bg-white">
                  <tr>
                      <td className="p-3 font-bold flex items-start gap-2">
                          <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />
                          Integration API Changes
                      </td>
                      <td className="p-3 font-bold text-red-600">HIGH</td>
                      <td className="p-3 text-gray-600">Abstract integration layer; monitor vendor changelogs; strong partnerships.</td>
                  </tr>
                  <tr>
                      <td className="p-3 font-bold flex items-start gap-2">
                          <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />
                          False Positives Erode Trust
                      </td>
                      <td className="p-3 font-bold text-red-600">HIGH</td>
                      <td className="p-3 text-gray-600">Conservative initial thresholds; robust appeal process; continuous calibration.</td>
                  </tr>
                   <tr>
                      <td className="p-3 font-bold flex items-start gap-2">
                          <AlertTriangle size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                          Employee Pushback
                      </td>
                      <td className="p-3 font-bold text-yellow-600">MED</td>
                      <td className="p-3 text-gray-600">Clear communication; fair appeal process; manager involvement.</td>
                  </tr>
                   <tr>
                      <td className="p-3 font-bold flex items-start gap-2">
                          <AlertTriangle size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                          Performance at Scale
                      </td>
                      <td className="p-3 font-bold text-yellow-600">MED</td>
                      <td className="p-3 text-gray-600">Load testing; architecture review; phased rollout.</td>
                  </tr>
              </tbody>
          </table>
      </div>
    </div>
  );
};

export default RisksMitigations;