package com.example.linkpack.Models;

import java.time.LocalDateTime;

// برای آمار یک لینک خاص
public class LinkStatsResponse {
    private String shortCode;
    private String originalUrl;
    private int clicks;
    private LocalDateTime timestamp;
    private String shortUrl;

    public LinkStatsResponse(String originalUrl, String shortcode, String shorturl , LocalDateTime timestamp) {
        this.originalUrl = originalUrl;
        this.shortCode = shortcode;
        this.shortUrl = shorturl;
        this.timestamp = LocalDateTime.now();
    }

    public LinkStatsResponse(String originalUrl, int clicks, LocalDateTime timestamp, String s) {
        this.clicks = 0;
        this.timestamp = LocalDateTime.now();
    }


    // Getters
    public String getShortCode() {
        return shortCode; }
    public String getOriginalUrl() {
        return originalUrl; }
    public int getClicks() {
        return clicks; }
    public LocalDateTime getCreatedAt() {
        return timestamp; }
    public String getShortUrl() {
        return shortUrl; }
}
