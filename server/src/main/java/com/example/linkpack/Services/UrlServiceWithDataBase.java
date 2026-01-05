package com.example.linkpack.Services;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.linkpack.Models.LinkModelWithDataBase;
import com.example.linkpack.RepositoryLink.LinkRepository;

@Service
public class UrlServiceWithDataBase {

    @Autowired
    private LinkRepository linkRepository;

    private static final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private static final int CODE_LENGTH = 6;

    public String generateShortCode() {
        Random random = new Random();
        StringBuilder sb = new StringBuilder(CODE_LENGTH);

        for (int i = 0; i < CODE_LENGTH; i++) {
            int index = random.nextInt(CHARACTERS.length());
            sb.append(CHARACTERS.charAt(index));
        }

        return sb.toString();
    }

    public String createShortLink(String originalUrl) {

        if (originalUrl == null || originalUrl.trim().isEmpty()){
            throw new IllegalArgumentException("URL can not be null or empty buddy !!");
        }

         // نرمال‌سازی
        originalUrl = normalizeUrl(originalUrl);

        Optional<LinkModelWithDataBase> existingLink =
                linkRepository.findByOriginalUrl(originalUrl);

        if (existingLink.isPresent()) {
            return existingLink.get().getshortCode();
        }

        // ایجاد و ذخیره لینک جدید
        LinkModelWithDataBase link = new LinkModelWithDataBase();
        link.setOriginalUrl(originalUrl);
        link.setShortCode(generateShortCode());
        link.setTimestamp(LocalDateTime.now());
        link.setClicks(0);
        LinkModelWithDataBase savedLink = linkRepository.save(link);
        return savedLink.getshortCode();

    }

    private String normalizeUrl(String url) {

    url = url.trim().toLowerCase();

    url = url.replaceAll("^https?://+", "https://");

    if (!url.startsWith("http")) {
        url = "https://" + url;
    }

    url = url.replace("https://www.", "https://");

        if (url.endsWith("/")) {
            url = url.substring(0, url.length() - 1);
        }

        return url ;
    }



    // متد برای redirect کردن
    public Optional<String> getOriginalUrl(String shortCode) {
        Optional<LinkModelWithDataBase> link = linkRepository.findByShortCode(shortCode);
        if (link.isPresent()) {
            // افزایش تعداد کلیک‌ها
            LinkModelWithDataBase foundLink = link.get();
            foundLink.setClicks(foundLink.getClicks() + 1);
            linkRepository.save(foundLink);

            return Optional.of(foundLink.getoriginalUrl());
        }
        return Optional.empty();
    }

}