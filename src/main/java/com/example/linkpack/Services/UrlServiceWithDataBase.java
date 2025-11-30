package com.example.linkpack.Services;

import com.example.linkpack.Models.LinkModelWithDataBase;
import com.example.linkpack.RepositoryLink.LinkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

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
        // بررسی اینکه URL قبلاً وجود دارد
        Optional<LinkModelWithDataBase> existingLink = linkRepository.findByOriginalUrl(originalUrl);
        if (existingLink.isPresent()) {
            return existingLink.get().getshortCode();
        }

        System.out.println("🔍 Existing link found: " + existingLink.isPresent());
        if (originalUrl == null || originalUrl.trim().isEmpty()){
            System.out.println("🔍 Returning existing code: " + existingLink);
            throw new IllegalArgumentException("URL can not be null or empty buddy !!");
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