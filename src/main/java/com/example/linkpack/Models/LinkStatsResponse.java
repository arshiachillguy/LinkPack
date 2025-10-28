package com.example.linkpack.Models;

import java.time.LocalDateTime;

// برای آمار یک لینک خاص
public class LinkStatsResponse {
    private String shortCode;
    private String originalUrl;
    private int clicks;
    private LocalDateTime timestamp;
    private String shortUrl;

    public LinkStatsResponse(String shortCode, String originalUrl, int clicks, LocalDateTime createdAt, String shortUrl) {
        this.shortCode = shortCode;
        this.originalUrl = originalUrl;
        this.clicks = clicks;
        this.timestamp = createdAt;
        this.shortUrl = shortUrl;
    }

    // Getters
    public String getShortCode() { return shortCode; }
    public String getOriginalUrl() { return originalUrl; }
    public int getClicks() { return clicks; }
    public LocalDateTime getCreatedAt() { return timestamp; }
    public String getShortUrl() { return shortUrl; }
}
