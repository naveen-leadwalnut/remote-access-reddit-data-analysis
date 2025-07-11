
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { CategoryData } from '../types';

interface TrafficDistributionChartProps {
  data: CategoryData[];
}

const COLORS = ['#38bdf8', '#4ade80', '#fbbf24', '#818cf8', '#f87171'];

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2 bg-slate-800 border border-slate-700 rounded-md shadow-lg">
          <p className="label text-white font-semibold">{`${payload[0].name}`}</p>
          <p className="intro text-cyan-400">{`Traffic: ${payload[0].value.toLocaleString()}`}</p>
        </div>
      );
    }
  
    return null;
  };

export const TrafficDistributionChart: React.FC<TrafficDistributionChartProps> = ({ data }) => {
  const chartData = data.map(item => ({
    name: item.category,
    value: item.sumOfTraffic
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Tooltip content={<CustomTooltip />} />
        <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
            wrapperStyle={{ fontSize: '12px', color: '#cbd5e1', paddingLeft: '20px' }}
            formatter={(value) => <span className="text-slate-300 truncate" style={{maxWidth: "150px"}}>{value}</span>}
        />
        <Pie
          data={chartData}
          cx="45%"
          cy="50%"
          labelLine={false}
          outerRadius="90%"
          innerRadius="60%"
          fill="#8884d8"
          dataKey="value"
          stroke="none"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};