package com.example.linkpack.Models;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.processing.Pattern;

// Request DTO
public class ShortenUrlRequest {
    @JsonProperty("originalUrl")
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
