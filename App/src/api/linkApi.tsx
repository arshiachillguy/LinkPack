import apiClient from "./apiClient";

/*TYPES*/

export interface LinkStatsResponse {
  shortCode: string;
  originalUrl: string;
  createdAt: string;
  clicks: number;
  shortUrl: string;
}

export interface OverviewStatsResponse {
  totalLinks: number;
  totalClicks: number;
  mostPopularShortCode: string;
  mostPopularClicks: number;
  generatedAt: string;
}

export interface ShortenUrlRequest {
  originalUrl: string;
}

/*PROTECTED APIs */

// create short link
export const shortenUrl = (originalUrl: string) =>
  apiClient.post<LinkStatsResponse>("/shorten", { originalUrl });

// get stats for one short link
export const getLinkStats = (shortCode: string) =>
  apiClient.get<LinkStatsResponse>(`/${shortCode}/stats`);

// get overview stats
export const getOverviewStats = () =>
  apiClient.get<OverviewStatsResponse>("/stats/overview");
