import React from 'react';
import { Card } from '../ui/Card';

const Appendices: React.FC = () => {
  return (
    <div id="appendices" className="space-y-8 py-12">
      <div>
        <h2 className="text-3xl font-black text-black mb-4 uppercase">15. Appendices</h2>
        <p className="text-gray-600 font-serif text-lg">Detailed reference materials.</p>
      </div>

      <h3 className="text-xl font-bold uppercase mt-8 mb-4 border-b-2 border-black inline-block">Appendix A: 20 Human Risk Factors</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Category 1: Immutable" className="bg-gray-100">
              <ol className="list-decimal pl-4 text-xs font-mono space-y-2">
                  <li><strong>Attack Frequency:</strong> Real phishing attempts (Proofpoint VAP).</li>
                  <li><strong>Access Level:</strong> Admin/Privileged status (IAM).</li>
                  <li><strong>High Risk Role:</strong> Finance, C-Suite, HR.</li>
                  <li><strong>Work Factors:</strong> Travel, Email Volume, Fatigue.</li>
              </ol>
          </Card>
           <Card title="Category 2: Attitudinal" className="bg-gray-100">
              <ol className="list-decimal pl-4 text-xs font-mono space-y-2" start={5}>
                  <li><strong>Risk Understanding:</strong> Survey scores.</li>
                  <li><strong>Affective Security:</strong> Engagement level.</li>
                  <li><strong>Intention to Comply:</strong> Self-reported adherence.</li>
                  <li><strong>Friction Perception:</strong> "Controls slow me down".</li>
              </ol>
          </Card>
           <Card title="Category 3: Behavioral" className="bg-gray-100">
               <ol className="list-decimal pl-4 text-xs font-mono space-y-2" start={9}>
                  <li>Completes awareness training</li>
                  <li>Engages with security voluntarily</li>
                  <li>Reports phishing sims</li>
                  <li>Browses web securely</li>
                  <li>Uses password manager</li>
                  <li>Updates software promptly</li>
                  <li>...and 6 more telemetry points</li>
              </ol>
          </Card>
      </div>

      <h3 className="text-xl font-bold uppercase mt-8 mb-4 border-b-2 border-black inline-block">Appendix C: Regulatory Mapping</h3>
      <div className="overflow-x-auto border-2 border-black retro-shadow">
          <table className="w-full text-left text-xs font-mono">
              <thead className="bg-black text-white">
                  <tr>
                      <th className="p-2 border-r border-gray-700">Standard</th>
                      <th className="p-2">Key Controls Mapped</th>
                  </tr>
              </thead>
              <tbody className="divide-y divide-black bg-white">
                  <tr>
                      <td className="p-2 font-bold border-r border-black">SOC 2</td>
                      <td className="p-2">CC6.1 (Logical Access), CC6.2 (Auth), CC6.3 (Role-based)</td>
                  </tr>
                  <tr>
                      <td className="p-2 font-bold border-r border-black">ISO 27001</td>
                      <td className="p-2">A.9.2.1 (Registration), A.9.2.3 (Privileged Access)</td>
                  </tr>
                  <tr>
                      <td className="p-2 font-bold border-r border-black">NIST CSF</td>
                      <td className="p-2">PR.AC-1 (Identities), PR.AC-4 (Access Permissions)</td>
                  </tr>
                  <tr>
                      <td className="p-2 font-bold border-r border-black">HIPAA</td>
                      <td className="p-2">§164.312(a) (Access Control)</td>
                  </tr>
              </tbody>
          </table>
      </div>

      <h3 className="text-xl font-bold uppercase mt-8 mb-4 border-b-2 border-black inline-block">Appendix D: Glossary</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="border border-black p-2 bg-white">
              <strong className="block uppercase mb-1">ALE</strong>
              <span className="text-gray-600">Annualized Loss Expectancy. Expected $ loss per year based on FAIR model.</span>
          </div>
          <div className="border border-black p-2 bg-white">
              <strong className="block uppercase mb-1">Risk Warrant</strong>
              <span className="text-gray-600">OutThink's documented justification for security controls.</span>
          </div>
          <div className="border border-black p-2 bg-white">
              <strong className="block uppercase mb-1">Proportionality</strong>
              <span className="text-gray-600">Principle that controls should match risk level (never over-restrict).</span>
          </div>
          <div className="border border-black p-2 bg-white">
              <strong className="block uppercase mb-1">VAP</strong>
              <span className="text-gray-600">Very Attacked People. Proofpoint's metric for targeted users.</span>
          </div>
      </div>
    </div>
  );
};

export default Appendices;