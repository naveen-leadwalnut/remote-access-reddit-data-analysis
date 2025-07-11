import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { CategoryData } from '../types';

interface ThreadsComparisonChartProps {
  data: CategoryData[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2 bg-slate-800 border border-slate-700 rounded-md shadow-lg text-sm">
          <p className="label font-bold text-white">{`${label}`}</p>
          <p className="text-sky-400">{`Total Threads: ${payload[0].value.toLocaleString()}`}</p>
          <p className="text-indigo-400">{`Top 10 Threads: ${payload[1].value.toLocaleString()}`}</p>
        </div>
      );
    }
  
    return null;
  };
  
export const ThreadsComparisonChart: React.FC<ThreadsComparisonChartProps> = ({ data }) => {
    const chartData = data.map(item => ({
        name: item.category.split(' ').slice(0, 3).join(' ') + (item.category.split(' ').length > 3 ? '...' : ''),
        "Total Threads": item.totalRedditThreads,
        "Top 10 Threads": item.threadsInSERPTop10
    }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={chartData}
        margin={{
          top: 5,
          right: 20,
          left: -10,
          bottom: 5,
        }}
        barGap={8}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 12 }} />
        <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} />
        <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(71, 85, 105, 0.5)'}}/>
        <Legend wrapperStyle={{ fontSize: '14px', color: '#cbd5e1' }} />
        <Bar dataKey="Total Threads" fill="#38bdf8" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Top 10 Threads" fill="#818cf8" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};