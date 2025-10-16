package com.example.linkpack.Models;
import jakarta.persistence.*;

import java.time.LocalDateTime;

public class LinkModel {

    private Long Id;

    private String OriginalUrl;

    private String ShortCODE;


    private LocalDateTime timestamp;

    private int Clicks;

    public LinkModel(String origin, String code) {
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getOriginalUrl() {
        return OriginalUrl;
    }

    public void setOriginalUrl(String originalUrl) {
        OriginalUrl = originalUrl;
    }

    public String getShortCODE() {
        return ShortCODE;
    }

    public void setShortCODE(String shortCODE) {
        ShortCODE = shortCODE;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public int getClicks() {
        return Clicks;
    }

    public void setClicks(int clicks) {
        Clicks = clicks;
    }
    
    public LinkModel(int clicks, LocalDateTime timestamp, String shortCODE, String originalURL, Long id) {
        this.Clicks = 0;
        this.timestamp = LocalDateTime.now();
        this.ShortCODE = shortCODE;
        this.OriginalUrl = originalURL;
        this.Id = id;
    }

    public LinkModel(Long aLong, String originalUrl, String code) {
    }

    @Override
    public String toString() {
        return "model{" +
                "Id=" + Id +
                ", OriginalURL='" + OriginalUrl + '\'' +
                ", ShortCODE='" + ShortCODE + '\'' +
                ", timestamp=" + timestamp +
                ", Clicks=" + Clicks +
                '}';
    }

}
