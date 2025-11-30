import React from 'react';
import { Card } from '../ui/Card';

const VisionStrategy: React.FC = () => {
    return (
        <div id="vision_strategy" className="space-y-8 py-12 border-b-2 border-dashed border-gray-300">
            <h2 className="text-3xl font-black text-black uppercase">04. Vision & Strategy</h2>
            <div className="bg-black text-white p-8 border-2 border-black retro-shadow">
                <h3 className="text-xs font-mono text-gray-400 mb-4 uppercase tracking-widest">Vision Statement</h3>
                <p className="text-xl md:text-2xl font-serif italic leading-relaxed">
                    "OutThink Risk Warrant will become the industry standard for defensible human risk management, enabling organizations to proactively prevent human-initiated security incidents while creating audit-ready documentation."
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card title="Strategic Shift">
                    <div className="flex justify-between items-center mb-4 text-xs font-mono uppercase text-gray-500 border-b border-gray-200 pb-2">
                        <span>From</span>
                        <span>To</span>
                    </div>
                    <div className="flex justify-between items-center font-bold text-black border-b-2 border-black pb-3 mb-3 text-sm md:text-base">
                        <span className="bg-gray-200 px-2 py-1 line-through decoration-red-500">"Know your risk"</span>
                        <span className="bg-[#ffdd57] px-2 py-1">"Manage your risk"</span>
                    </div>
                    <div className="flex justify-between items-center font-bold text-black text-sm md:text-base">
                        <span className="text-gray-400">Training Vendor</span>
                        <span>Enforcement Platform</span>
                    </div>
                </Card>
                <Card title="Product Principles">
                    <ul className="list-disc pl-4 space-y-2 text-black font-mono text-sm">
                        <li><strong>Proportionality:</strong> Never over-restrict.</li>
                        <li><strong>Transparency:</strong> Users can appeal.</li>
                        <li><strong>Financial Language:</strong> Risk in dollars.</li>
                        <li><strong>Auditability:</strong> Every decision logged.</li>
                    </ul>
                </Card>
            </div>
        </div>
    );
};

export default VisionStrategy;