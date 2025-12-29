package com.example.linkpack.Models;

import java.time.LocalDateTime;

// برای آمار کلی
public class OverviewStatsResponse {
    private int totalLinks;
    private int totalClicks;
    private String mostPopularShortCode;
    private int mostPopularClicks;
    private LocalDateTime generatedAt;

    public OverviewStatsResponse(int totalLinks, int totalClicks, String mostPopularShortCode,
                                 int mostPopularClicks, LocalDateTime generatedAt) {
        this.totalLinks = totalLinks;
        this.totalClicks = totalClicks;
        this.mostPopularShortCode = mostPopularShortCode;
        this.mostPopularClicks = mostPopularClicks;
        this.generatedAt = LocalDateTime.now();
    }

    // Getters
    public int getTotalLinks() { return totalLinks; }
    public int getTotalClicks() { return totalClicks; }
    public String getMostPopularShortCode() { return mostPopularShortCode; }
    public int getMostPopularClicks() { return mostPopularClicks; }
    public LocalDateTime getGeneratedAt() { return generatedAt; }
}
