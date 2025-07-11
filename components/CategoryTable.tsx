import React, { useState } from 'react';
import { CategoryData } from '../types';

function FolderIcon() {
    return (
        <svg className="w-5 h-5 text-sky-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
        </svg>
    )
}

function ChevronIcon({ open, direction }: { open?: boolean; direction?: 'asc' | 'desc' }) {
    if (direction) {
        return (
            <svg className={`w-4 h-4 ml-1 inline transition-transform ${direction === 'desc' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        );
    }
    return (
        <svg className={`w-4 h-4 ml-2 transition-transform ${open ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
    );
}

interface CategoryTableProps {
  data: CategoryData[];
}

type SortKey = keyof Pick<CategoryData, 'category' | 'totalRedditThreads' | 'sumOfTraffic' | 'sumOfKeywords' | 'averageKeywordPosition' | 'threadsInSERPTop10'>;

export const CategoryTable: React.FC<CategoryTableProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [sortKey, setSortKey] = useState<SortKey>('sumOfTraffic');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    let aValue = a[sortKey];
    let bValue = b[sortKey];
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    } else if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    }
    return 0;
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-slate-300">
        <thead className="text-xs text-slate-400 uppercase" style={{backgroundColor: '#2C384C'}}>
          <tr>
            <th scope="col" className="px-6 py-4 cursor-pointer select-none" onClick={() => handleSort('category')}>
              Category Name {sortKey === 'category' && <ChevronIcon direction={sortOrder} />}
            </th>
            <th scope="col" className="px-6 py-4 text-center cursor-pointer select-none" onClick={() => handleSort('totalRedditThreads')}>
              No of Threads {sortKey === 'totalRedditThreads' && <ChevronIcon direction={sortOrder} />}
            </th>
            <th scope="col" className="px-6 py-4 text-center cursor-pointer select-none" onClick={() => handleSort('sumOfTraffic')}>
              Total Traffic {sortKey === 'sumOfTraffic' && <ChevronIcon direction={sortOrder} />}
            </th>
            <th scope="col" className="px-6 py-4 text-center cursor-pointer select-none" onClick={() => handleSort('sumOfKeywords')}>
              No of Keywords {sortKey === 'sumOfKeywords' && <ChevronIcon direction={sortOrder} />}
            </th>
            <th scope="col" className="px-6 py-4 text-center cursor-pointer select-none" onClick={() => handleSort('averageKeywordPosition')}>
              Avg. SERP Position {sortKey === 'averageKeywordPosition' && <ChevronIcon direction={sortOrder} />}
            </th>
            <th scope="col" className="px-6 py-4 text-center cursor-pointer select-none" onClick={() => handleSort('threadsInSERPTop10')}>
              No of Threads in Top 10 {sortKey === 'threadsInSERPTop10' && <ChevronIcon direction={sortOrder} />}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item: CategoryData, idx: number) => {
            // Find the original index for open/close logic
            const originalIdx = data.findIndex(d => d.category === item.category);
            return (
              <React.Fragment key={item.category}>
                <tr
                  className={`border-b border-slate-700 cursor-pointer ${openIndex === originalIdx ? 'bg-[#202940]' : 'hover:bg-[#202940]'} transition-colors duration-200`}
                  onClick={() => handleToggle(originalIdx)}
                >
                  <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <FolderIcon />
                      <span>{item.category}</span>
                      <ChevronIcon open={openIndex === originalIdx} />
                    </div>
                  </th>
                  <td className="px-6 py-4 text-center">{item.totalRedditThreads.toLocaleString()}</td>
                  <td className="px-6 py-4 text-center">{item.sumOfTraffic.toLocaleString()}</td>
                  <td className="px-6 py-4 text-center">{item.sumOfKeywords.toLocaleString()}</td>
                  <td className="px-6 py-4 text-center">{item.averageKeywordPosition.toFixed(1)}</td>
                  <td className="px-6 py-4 text-center">{item.threadsInSERPTop10.toLocaleString()}</td>
                </tr>
                {openIndex === originalIdx && item.threads && item.threads.length > 0 && (
                  <tr className="bg-[#171F32]">
                    <td colSpan={6} className="px-10 py-4">
                      <div>
                        <h3 className="text-base font-semibold text-white mb-2">Sample Reddit Threads:</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          {item.threads.map((thread: { title: string; url: string }, tIdx: number) => (
                            <li key={tIdx}>
                              <a href={thread.url} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">{thread.title}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};