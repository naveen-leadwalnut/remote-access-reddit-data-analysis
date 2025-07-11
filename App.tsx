import React from 'react';
import { DATA, TOTALS, SUBCATEGORY_TOTALS } from './constants';
import { StatCard } from './components/StatCard';
import { CategoryTable } from './components/CategoryTable';
import { TrafficDistributionChart } from './components/TrafficDistributionChart';
import { ThreadsComparisonChart } from './components/ThreadsComparisonChart';
import { ChartCard } from './components/ChartCard';
import { ThreadsIcon, TrafficIcon, KeywordsIcon, SerpIcon } from './components/Icons';

const App: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
      <div className="mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wider">Reddit data analysis for the keyword Remote Access</h1>
          <p className="text-slate-400 mt-3 max-w-2xl mx-auto">This dashboard analyzes Reddit data for the keyword "Remote Access". It provides a high-level overview and a detailed breakdown of key categories.</p>
        </header>

        <main className="flex flex-col gap-12">
          {/* Overall Statistics */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Overall Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StatCard title="Total Reddit Threads" value={TOTALS.threads.toLocaleString()} icon={<ThreadsIcon />} iconBgColor="bg-sky-500/80" />
              <StatCard title="Total Traffic" value={TOTALS.traffic.toLocaleString()} icon={<TrafficIcon />} iconBgColor="bg-emerald-500/80" />
              <StatCard title="Total Keywords" value={TOTALS.keywords.toLocaleString()} icon={<KeywordsIcon />} iconBgColor="bg-amber-500/80" />
            </div>
          </section>

          {/* Sub Categories in Ransomware */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Top Sub Categories in Remote Access</h2>
            <p className="text-slate-400 mb-6">From the total dataset, we've filtered and analyzed several key sub categories. The metrics below represent the data points within these specific groups.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard title="Total Reddit Threads" value={SUBCATEGORY_TOTALS.threads.toLocaleString()} icon={<ThreadsIcon />} iconBgColor="bg-sky-500/80"/>
              <StatCard title="Sum of Traffic" value={SUBCATEGORY_TOTALS.traffic.toLocaleString()} icon={<TrafficIcon />} iconBgColor="bg-emerald-500/80" />
              <StatCard title="Sum of Keywords" value={SUBCATEGORY_TOTALS.keywords.toLocaleString()} icon={<KeywordsIcon />} iconBgColor="bg-amber-500/80" />
              <StatCard title="Threads in SERP Top 10" value={SUBCATEGORY_TOTALS.serpTop10.toLocaleString()} icon={<SerpIcon />} iconBgColor="bg-indigo-500/80" />
            </div>
          </section>

          {/* Detailed Table */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Detailed Subcategory Analysis</h2>
            <div className="bg-[#171F32] rounded-lg overflow-hidden shadow-lg">
                <CategoryTable data={DATA} />
            </div>
          </section>
          
          {/* Charts Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
               <ChartCard title="Traffic Distribution by Category">
                 <TrafficDistributionChart data={DATA} />
               </ChartCard>
            </div>
            <div className="lg:col-span-3">
              <ChartCard title="Total Threads vs. SERP Top 10 Threads">
                <ThreadsComparisonChart data={DATA} />
              </ChartCard>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;