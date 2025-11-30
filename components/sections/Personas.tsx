import React from 'react';
import { PERSONAS_DATA } from '../../constants';
import { Card } from '../ui/Card';
import { User, Target, Frown } from 'lucide-react';

const Personas: React.FC = () => {
  return (
    <div id="personas" className="space-y-8 py-12 border-b-2 border-dashed border-gray-300">
      <div>
        <h2 className="text-3xl font-black text-black mb-4 uppercase">User Personas</h2>
        <p className="text-gray-600 font-serif text-lg">Tailored solutions for the stakeholders who feel the pain of human risk management most acutely.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {PERSONAS_DATA.map((persona, idx) => (
            <div key={idx} className="bg-[#f0f0f0] border-2 border-black p-4 retro-shadow flex flex-col h-full relative">
                {/* Hole punch graphic */}
                <div className="absolute top-4 right-1/2 translate-x-1/2 w-4 h-4 bg-[#f2f0e9] rounded-full border border-gray-300"></div>

                <div className="bg-white border-2 border-black p-4 mt-4 flex-1">
                    <div className="flex items-center gap-4 mb-6 border-b-2 border-black pb-4">
                        <div className="w-16 h-16 bg-gray-200 border-2 border-black flex items-center justify-center text-black">
                            <User size={32} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-black uppercase">{persona.name}</h3>
                            <div className="text-xs font-mono bg-black text-white px-1 inline-block mb-1">{persona.role}</div>
                            <div className="text-xs text-gray-500 font-serif italic">{persona.company}</div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center gap-2 text-black mb-2 font-bold text-xs uppercase tracking-wide border-b border-gray-200">
                                <Frown size={14} />
                                <span>Pain Points</span>
                            </div>
                            <ul className="list-disc list-outside pl-4 space-y-2 text-gray-600 text-xs font-mono">
                                {persona.painPoints.map((pt, i) => (
                                    <li key={i}>{pt}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 text-black mb-2 font-bold text-xs uppercase tracking-wide border-b border-gray-200">
                                <Target size={14} />
                                <span>Goals</span>
                            </div>
                            <ul className="list-disc list-outside pl-4 space-y-2 text-gray-600 text-xs font-mono">
                                {persona.goals.map((g, i) => (
                                    <li key={i}>{g}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Personas;