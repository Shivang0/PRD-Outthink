import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title }) => {
  return (
    <div className={`bg-white border-2 border-black p-6 retro-shadow transition-all ${className}`}>
      {title && (
        <div className="border-b-2 border-black pb-3 mb-4">
          <h3 className="text-lg font-bold uppercase tracking-tight text-black flex items-center gap-2">
            <span className="w-3 h-3 bg-black inline-block"></span>
            {title}
          </h3>
        </div>
      )}
      {children}
    </div>
  );
};