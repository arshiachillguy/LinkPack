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
        private String originalUrl;


        @Column(name = "short_code", unique = true, nullable = false, length = 15)
        private String shortCode;

        @Column(name = "created_at")
        private LocalDateTime timestamp;

        @Column(name = "clicks")
        private int clicks = 0;

        public Long getId() {
            return Id;
        }

        public void setId(Long Id) {
            this.Id = this.Id;
        }

        public String getOriginalUrl() {
            return originalUrl;
        }

        public void setOriginalUrl(String originalUrl) {
                this.originalUrl = originalUrl;
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
            return clicks;
        }

        public void setClicks(int clicks) {
            this.clicks = clicks;
        }

        // default constructor
        public LinkModelWithDataBase(){

        }

        @Override
        public String toString() {
            return "model{" +
                    "Id=" + Id +
                    ", OriginalURL='" + originalUrl + '\'' +
                    ", ShortCODE='" + shortCode + '\'' +
                    ", timestamp=" + timestamp +
                    ", Clicks=" + clicks +
                    '}';
        }
}


