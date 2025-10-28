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

    public String createShortLink(String originalUrl) {
        // بررسی اینکه URL قبلاً وجود دارد
        Optional<LinkModelWithDataBase> existingLink = linkRepository.findByOriginalUrl(originalUrl);
        if (existingLink.isPresent()) {
            return existingLink.get().getshortCode();
        }

        if (originalUrl == null || originalUrl.trim().isEmpty()){
            throw new IllegalArgumentException("URL can not be null or empty buddy !!");
        }

        // تولید کد کوتاه یکتا
        String shortCode;
        do {
            shortCode = generateShortCode();
        } while (linkRepository.findByShortCode(shortCode).isPresent());

        // ایجاد و ذخیره لینک جدید
        LinkModelWithDataBase link = new LinkModelWithDataBase();
        link.setOriginalUrl(originalUrl);
        link.setShortCode(shortCode);
        link.setClicks(0);
        link.setTimestamp(LocalDateTime.now());

        linkRepository.save(link);
        return shortCode;
    }

    private String generateShortCode() {
        Random random = new Random();
        StringBuilder sb = new StringBuilder(CODE_LENGTH);

        for (int i = 0; i < CODE_LENGTH; i++) {
            int index = random.nextInt(CHARACTERS.length());
            sb.append(CHARACTERS.charAt(index));
        }

        return sb.toString();
    }

    // متد برای redirect کردن
    public Optional<String> getOriginalUrl(String shortCode) {
        Optional<LinkModelWithDataBase> link = linkRepository.findByShortCode(shortCode);
        if (link.isPresent()) {
            // افزایش تعداد کلیک‌ها
            LinkModelWithDataBase foundLink = link.get();
            foundLink.setClicks(foundLink.getClicks() + 1);
            linkRepository.save(foundLink);

            return Optional.of(foundLink.getOriginalUrl());
        }
        return Optional.empty();
    }

}