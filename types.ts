
export interface CategoryData {
  category: string;
  totalRedditThreads: number;
  sumOfTraffic: number;
  sumOfKeywords: number;
  averageKeywordPosition: number;
  threadsInSERPTop10: number;
  threads?: { title: string; url: string }[];
}
