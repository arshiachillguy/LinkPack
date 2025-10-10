package com.example.linkpack.Models;
import jakarta.persistence.*;

import java.time.LocalDateTime;

//@Entity
//@Table(name = "shortly link")
public class LinkModel {

//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

//    @Column(nullable = false)
    private String OriginalUrl;

//    @Size(min = 3, max = 10)
    private String ShortCODE;


    private LocalDateTime timestamp;

//    @Min(0)
    private int Clicks;

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

    public LinkModel() {
    }

    public LinkModel(int clicks, LocalDateTime timestamp, String shortCODE, String originalURL, Long id) {
        Clicks = clicks;
        this.timestamp = timestamp;
        ShortCODE = shortCODE;
        OriginalUrl = originalURL;
        Id = id;
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
