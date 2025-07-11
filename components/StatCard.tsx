import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconBgColor: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon, iconBgColor }) => {
  return (
    <div className="bg-[#171F32] p-5 rounded-lg flex items-center gap-5 transition-transform duration-300 ease-in-out hover:scale-[1.03] cursor-pointer shadow-lg">
      <div className={`h-14 w-14 rounded-lg flex items-center justify-center flex-shrink-0 ${iconBgColor}`}>
        <div className="h-7 w-7 text-white">{icon}</div>
      </div>
      <div className="flex-grow">
        <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider">{title}</h3>
        <p className="text-2xl font-bold text-white mt-1">{value}</p>
      </div>
    </div>
  );
};