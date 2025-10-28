package com.example.linkpack.Controller;

import com.example.linkpack.Models.*;
import com.example.linkpack.RepositoryLink.LinkRepository;
import com.example.linkpack.Services.UrlServiceWithDataBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api1")
public class UrlControllerWithDatabase {

        @Autowired
        private LinkRepository linkRepository;

        @Autowired
        private UrlServiceWithDataBase urlService;

        @PostMapping("/shorten")
        public ResponseEntity<?> shortenUrl(@RequestBody ShortenUrlRequest request) {
            try {
                if (request == null || request.getOriginalUrl() == null){
                    return ResponseEntity.badRequest().body("URL can not be empty !!");
                }
                System.out.println("Json :" + request);
                String shortCode = urlService.createShortLink(request.getOriginalUrl());
                String shortUrl = "http://localhost:8080/" + shortCode;
                // ایجاد Response برای درخواست اولیه
                ShortURl response = new ShortURl(
                        request.getOriginalUrl(),
                        shortUrl,
                        shortCode
                );
                System.out.println("Json2:" + request);
                return ResponseEntity.ok(response);

            } catch (Exception e) {
                return ResponseEntity.badRequest().body(
                        "error in creating shortlink : " + e.getMessage()
                );
            }
        }


    @GetMapping("/{shortCode}/stats")
    public ResponseEntity<?> getLinkStats(@PathVariable String shortCode) {
        try {
            Optional<LinkModelWithDataBase> link = linkRepository.findByShortCode(shortCode);

            if (link.isEmpty()) {
                return ResponseEntity.notFound().build();
            }

            LinkModelWithDataBase linkData = link.get();

            // ایجاد response برای آمار
            LinkStatsResponse stats = new LinkStatsResponse(
                    linkData.getshortCode(),
                    linkData.getOriginalUrl(),
                    linkData.getClicks(),
                    linkData.getTimestamp(),
                    "http://localhost:8080/" + linkData.getshortCode()
            );

            return ResponseEntity.ok(stats);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body("nothing here to show about link ! ");
        }
    }


    @GetMapping("/stats/overview")
    public ResponseEntity<?> getOverviewStats() {
        try {
            List<LinkModelWithDataBase> allLinks = linkRepository.findAll();

            // محاسبه آمار کلی
            int totalLinks = ((List<?>) allLinks).size();
            int totalClicks = allLinks.stream().mapToInt(LinkModelWithDataBase::getClicks).sum();

            // پیدا کردن پرکلیک‌ترین لینک
            Optional<LinkModelWithDataBase> mostPopular = allLinks.stream()
                    .max(Comparator.comparingInt(LinkModelWithDataBase::getClicks));

            // ایجاد response
            OverviewStatsResponse overview = new OverviewStatsResponse(
                    totalLinks,
                    totalClicks,
                    mostPopular.map(LinkModelWithDataBase::getshortCode).orElse("None"),
                    mostPopular.map(LinkModelWithDataBase::getClicks).orElse(0),
                    LocalDateTime.now()
            );

            return ResponseEntity.ok(overview);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body("error in finding things about link ! ");
        }
    }
}

