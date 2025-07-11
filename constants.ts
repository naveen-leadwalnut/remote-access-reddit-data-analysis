import { CategoryData } from './types';

export const TOTALS = {
  threads: 1346,
  traffic: 9079,
  keywords: 26007
};

export const SUBCATEGORY_TOTALS = {
  threads: 534,
  traffic: 7008,
  keywords: 12197,
  serpTop10: 476,
};

export const DATA: CategoryData[] = [
  {
    category: "Remote Access Software and Tools",
    totalRedditThreads: 160,
    sumOfTraffic: 3982,
    sumOfKeywords: 7236,
    averageKeywordPosition: 4.9,
    threadsInSERPTop10: 144,
    threads: [
      { title: "What is the best remote access software?", url: "https://www.reddit.com/r/it/comments/1iidnrn/what_is_the_best_remote_access_software/" },
      { title: "Looking for a free remote desktop software", url: "https://www.reddit.com/r/software/comments/17lqk4c/looking_for_a_free_remote_desktop_software_that/" }
    ]
  },
  {
    category: "Remote Access for Specific Devices and Systems",
    totalRedditThreads: 221,
    sumOfTraffic: 1761,
    sumOfKeywords: 3411,
    averageKeywordPosition: 5.9,
    threadsInSERPTop10: 203,
    threads: [
      { title: "Good apps to control an Android device?", url: "https://www.reddit.com/r/androidapps/comments/kp4ze8/are_there_any_good_apps_to_control_an_android/" },
      { title: "Best way to remote into your Linux PC?", url: "https://www.reddit.com/r/linuxmasterrace/comments/xqb6kj/whats_the_best_way_to_remote_into_your_linux_pc/" }
    ]
  },
  {
    category: "Remote Access Methods and Solutions",
    totalRedditThreads: 114,
    sumOfTraffic: 735,
    sumOfKeywords: 1372,
    averageKeywordPosition: 8.3,
    threadsInSERPTop10: 93,
    threads: [
      { title: "Most secure remote access solution?", url: "https://www.reddit.com/r/msp/comments/yviete/most_secure_remote_access_solution/" },
      { title: "Remote monitoring with industrial IoT", url: "https://www.reddit.com/r/PLC/comments/1gpe70t/remote_monitoring_with_industrial_iot/" }
    ]
  },
  {
    category: "Security and Risks Related to Remote Access",
    totalRedditThreads: 36,
    sumOfTraffic: 340,
    sumOfKeywords: 113,
    averageKeywordPosition: 4.9,
    threadsInSERPTop10: 33,
    threads: [
      { title: "What's a remote access code?", url: "https://www.reddit.com/r/techsupport/comments/1avm179/whats_a_remote_access_code/" },
      { title: "Is it safe to allow friends and family remote access?", url: "https://www.reddit.com/r/jellyfin/comments/olvtvk/is_it_safe_to_allow_friends_and_family_remote/" }
    ]
  },
  {
    category: "Unattended Remote Access",
    totalRedditThreads: 3,
    sumOfTraffic: 190,
    sumOfKeywords: 65,
    averageKeywordPosition: 1.0,
    threadsInSERPTop10: 3,
    threads: []
  },
];