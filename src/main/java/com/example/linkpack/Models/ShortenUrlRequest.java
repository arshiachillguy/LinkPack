package com.example.linkpack.Models;

import com.fasterxml.jackson.annotation.JsonProperty;

// Request DTO
public class ShortenUrlRequest {
    @JsonProperty("url")
    private String originalUrl;

    // constructor, getters, setters
    public ShortenUrlRequest() {}

    public ShortenUrlRequest(String originalUrl) {
        this.originalUrl = originalUrl;
    }

    public ShortenUrlRequest(String originalUrl, String shortUrl) {
    }

    public ShortenUrlRequest(String originalUrl, String shortUrl, String shortCode) {
    }

    public String getOriginalUrl() {
        return originalUrl;
    }

    public void setOriginalUrl(String originalUrl) {
        this.originalUrl = originalUrl;
    }
}
