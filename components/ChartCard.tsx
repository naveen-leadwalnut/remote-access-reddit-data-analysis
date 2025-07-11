import React from 'react';

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

export const ChartCard: React.FC<ChartCardProps> = ({ title, children }) => {
  return (
    <div className="bg-[#171F32] p-4 sm:p-6 rounded-lg shadow-lg h-full flex flex-col">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <div className="flex-grow w-full h-80">
        {children}
      </div>
    </div>
  );
};