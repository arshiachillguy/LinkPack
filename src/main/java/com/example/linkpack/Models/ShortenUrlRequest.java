package com.example.linkpack.Models;

// Request DTO
public class ShortenUrlRequest {
    private String originalUrl;

    // constructor, getters, setters
    public ShortenUrlRequest() {}

    public ShortenUrlRequest(String originalUrl) {
        this.originalUrl = originalUrl;
    }

    public String getOriginalUrl() {
        return originalUrl;
    }

    public void setOriginalUrl(String originalUrl) {
        this.originalUrl = originalUrl;
    }
}
