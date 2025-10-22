package com.example.linkpack.Models;

// Response DTO
public class ShortURl {
    private String originalUrl;
    private String shortUrl;
    private String shortCode;

    public ShortURl(String originalUrl, String shortUrl, String shortCode) {
        this.originalUrl = originalUrl;
        this.shortUrl = shortUrl;
        this.shortCode = shortCode;
    }

    // getters
    public String getOriginalUrl() { return originalUrl; }
    public String getShortUrl() { return shortUrl; }
    public String getShortCode() { return shortCode; }
}

