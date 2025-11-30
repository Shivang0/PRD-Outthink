import React from 'react';
import { Card } from '../ui/Card';

const SuccessMetrics: React.FC = () => {
    return (
        <div id="metrics" className="py-12 border-b-2 border-dashed border-gray-300">
            <h2 className="text-3xl font-black text-black mb-4 uppercase">12. Success Metrics</h2>
            
            <div className="space-y-8">
                <div>
                    <h3 className="text-lg font-bold uppercase mb-4">Operational Metrics (Monthly)</h3>
                    <div className="overflow-x-auto border-2 border-black">
                        <table className="w-full text-left text-sm font-mono">
                            <thead className="bg-gray-100 border-b-2 border-black">
                                <tr>
                                    <th className="p-3 border-r border-black">Metric</th>
                                    <th className="p-3 border-r border-black">Target</th>
                                    <th className="p-3">Measurement</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-black bg-white">
                                <tr>
                                    <td className="p-3 font-bold border-r border-black">End-to-End Latency</td>
                                    <td className="p-3 border-r border-black">&lt;5 min</td>
                                    <td className="p-3 text-gray-600">p95 from event to control</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold border-r border-black">Integration Uptime</td>
                                    <td className="p-3 border-r border-black">99.9%</td>
                                    <td className="p-3 text-gray-600">Monitoring dashboards</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold border-r border-black">False Positive Rate</td>
                                    <td className="p-3 border-r border-black">&lt;5%</td>
                                    <td className="p-3 text-gray-600">Appeals upheld / Total</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold border-r border-black">Warrant Success</td>
                                    <td className="p-3 border-r border-black">&gt;99%</td>
                                    <td className="p-3 text-gray-600">Successful / Attempted</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold uppercase mb-4">Risk Reduction Metrics (Quarterly)</h3>
                    <div className="overflow-x-auto border-2 border-black">
                         <table className="w-full text-left text-sm font-mono">
                            <thead className="bg-gray-100 border-b-2 border-black">
                                <tr>
                                    <th className="p-3 border-r border-black">Metric</th>
                                    <th className="p-3 border-r border-black">6-Mo Target</th>
                                    <th className="p-3">Owner</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-black bg-white">
                                <tr>
                                    <td className="p-3 font-bold border-r border-black">Phishing Click Rate</td>
                                    <td className="p-3 border-r border-black">-50%</td>
                                    <td className="p-3 text-gray-600">Security</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold border-r border-black">Human Incidents</td>
                                    <td className="p-3 border-r border-black">-30%</td>
                                    <td className="p-3 text-gray-600">Security</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold border-r border-black">Average FAIR ALE</td>
                                    <td className="p-3 border-r border-black">-20%</td>
                                    <td className="p-3 text-gray-600">Product</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessMetrics;