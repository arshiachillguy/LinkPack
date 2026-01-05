package com.example.linkpack.Controller;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.linkpack.Models.LinkModelWithDataBase;
import com.example.linkpack.Models.LinkStatsResponse;
import com.example.linkpack.Models.OverviewStatsResponse;
import com.example.linkpack.Models.ShortenUrlRequest;
import com.example.linkpack.RepositoryLink.LinkRepository;
import com.example.linkpack.Services.UrlServiceWithDataBase;

@RestController
@RequestMapping("/api1")
@CrossOrigin(origins = "*")
public class UrlControllerWithDatabase {

        @Autowired
        private LinkRepository linkRepository;

        @Autowired
        private UrlServiceWithDataBase urlService;

        // make short link from original link
        @PostMapping("/shorten")
        public ResponseEntity<?> shortenUrl(@Validated @RequestBody ShortenUrlRequest request) {
            try {
                if (request.getOriginalUrl() == null || request.getOriginalUrl().isEmpty()){
                    return ResponseEntity.badRequest().body("URL can not be empty !!");
                }
                System.out.println("recived : " + request.getOriginalUrl());
                System.out.println("-------------------------------------");

                String shortcode = urlService.createShortLink(request.getOriginalUrl());
                String shorturl = "http://localhost:8080/api1/" + shortcode;
                LinkStatsResponse response = new LinkStatsResponse(
                        request.getOriginalUrl(),
                        shortcode,
                        shorturl,
                        LocalDateTime.now()
                );

                return ResponseEntity.ok(response);

            } catch (Exception e) {
                return ResponseEntity.badRequest().body(
                        "error in creating shortlink : " + e.getMessage()
                );
            }
        }

        // redirect to original link page
        @GetMapping("/{shortCode}")
        public ResponseEntity<?> redirectToOriginalUrl(@PathVariable String shortCode){
            try{
                Optional<LinkModelWithDataBase> link = linkRepository.findByShortCode(shortCode);
                if (link.isEmpty()) {
                    return ResponseEntity.notFound().build();
                }

                LinkModelWithDataBase linkshortcode = link.get();
                int clicks = linkshortcode.getClicks();
                linkshortcode.setClicks(clicks + 1);
                linkRepository.save(linkshortcode);

                String originalUrl = linkshortcode.getoriginalUrl();
                HttpHeaders headers = new HttpHeaders();
                headers.setLocation(URI.create(originalUrl));
                return new ResponseEntity<>(headers, HttpStatus.FOUND);


            }catch (Exception e){
                return ResponseEntity.badRequest().body("nothing here to show about data");
            }
        }

        // result for one link
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
                        linkData.getoriginalUrl(),
                        linkData.getTimestamp(),
                        linkData.getClicks(),
                        "http://localhost:8080/" + linkData.getshortCode()
                );

                return ResponseEntity.ok(stats);

            } catch (Exception e) {
                return ResponseEntity.badRequest().body("nothing here to show about link ! ");
            }
         }

         // totoal result 
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

