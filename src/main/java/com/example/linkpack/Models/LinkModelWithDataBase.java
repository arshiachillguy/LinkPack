package com.example.linkpack.Models;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "shortlink")
public class LinkModelWithDataBase {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long Id;

        @Column(nullable = false)
        private String OriginalUrl;


        @Column(name = "short_code", unique = true, nullable = false, length = 15)
        private String shortCode;

        @Column(name = "created_at")
        private LocalDateTime timestamp;

        @Column(name = "clicks")
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

        public String getshortCode() {
            return shortCode;
        }

        public void setShortCode(String shortCode) {
            this.shortCode = shortCode;
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

        // default constructor
        public LinkModelWithDataBase(){

        }

        public LinkModelWithDataBase(String origin, String code) {
        }

        public LinkModelWithDataBase(int clicks, LocalDateTime timestamp, String shortCode, String originalURL, Long id) {
            this.Clicks = 0;
            this.timestamp = LocalDateTime.now();
            this.shortCode = shortCode;
            this.OriginalUrl = originalURL;
            this.Id = id;
        }

        public LinkModelWithDataBase(Long aLong, String originalUrl, String code) {
        }

        @Override
        public String toString() {
            return "model{" +
                    "Id=" + Id +
                    ", OriginalURL='" + OriginalUrl + '\'' +
                    ", ShortCODE='" + shortCode + '\'' +
                    ", timestamp=" + timestamp +
                    ", Clicks=" + Clicks +
                    '}';
        }
}


