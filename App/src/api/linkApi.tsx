import axios from "axios";

// base config
const api = axios.create({
  baseURL: "http://localhost:8080/api1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Types
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

// get stats for one short link
export const getLinkStats = async (shortCode: string) => {
  const response = await api.get<LinkStatsResponse>(`/${shortCode}/stats`);
  return response.data;
};

// get overview stats
export const getOverviewStats = async () => {
  const response = await api.get<OverviewStatsResponse>(`/stats/overview`);
  return response.data;
};

// create short link
export const shortenUrl = async (originalUrl: string) => {
  const response = await api.post<LinkStatsResponse>(`/shorten`, {
    originalUrl,
  } as ShortenUrlRequest);
  return response.data;
};
