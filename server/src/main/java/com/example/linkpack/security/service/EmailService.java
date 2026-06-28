package com.example.linkpack.security.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String fromAddress;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendVerificationCode(String toEmail, String code) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromAddress);
        message.setTo(toEmail);
        message.setSubject("کد تایید حساب کاربری شما");
        message.setText("سلام!\n\nکد تایید شما: " + code +
                "\n\nاین کد تا ۱۵ دقیقه دیگه معتبره\n\nاگه این درخواست رو شما نفرستادید، این ایمیل رو نادیده بگیرید با تشکر");
        mailSender.send(message);
    }
}