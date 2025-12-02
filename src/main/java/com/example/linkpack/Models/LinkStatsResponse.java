package com.example.linkpack.Models;

import java.time.LocalDateTime;

// برای آمار یک لینک خاص
public class LinkStatsResponse {
    private String shortCode;
    private String originalUrl;
    private int Clicks;
    private LocalDateTime timestamp;
    private String shortUrl;

    public LinkStatsResponse(String originalUrl, String shortcode, String shorturl , LocalDateTime timestamp) {
        this.originalUrl = originalUrl;
        this.shortCode = shortcode;
        this.shortUrl = shorturl;
        this.timestamp = LocalDateTime.now();
    }



    public LinkStatsResponse(String shortCode, String originalUrl, LocalDateTime timestamp, int clicks, String url) {
        this.shortCode = shortCode;
        this.originalUrl = originalUrl;
        this.timestamp = LocalDateTime.now();
        this.Clicks = clicks;
    }


    // Getters
    public String getShortCode() {
        return shortCode; }
    public String getoriginalUrl() {
        return originalUrl; }
    public int getClicks() {
        return Clicks; }
    public LocalDateTime getCreatedAt() {
        return timestamp; }
    public String getShortUrl() {
        return shortUrl; }
}
