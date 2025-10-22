package com.example.linkpack.Models;

import java.time.LocalDateTime;

// برای آمار یک لینک خاص
public class LinkStatsResponse {
    private String shortCode;
    private String originalUrl;
    private int clickCount;
    private LocalDateTime createdAt;
    private String shortUrl;

    public LinkStatsResponse(String shortCode, String originalUrl, int clickCount,LocalDateTime createdAt, String shortUrl) {
        this.shortCode = shortCode;
        this.originalUrl = originalUrl;
        this.clickCount = clickCount;
        this.createdAt = createdAt;
        this.shortUrl = shortUrl;
    }

    // Getters
    public String getShortCode() { return shortCode; }
    public String getOriginalUrl() { return originalUrl; }
    public int getClickCount() { return clickCount; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public String getShortUrl() { return shortUrl; }
}
