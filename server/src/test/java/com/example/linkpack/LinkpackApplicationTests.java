package com.example.linkpack;
import com.example.linkpack.Services.UrlServiceWithDataBase;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

@Configuration
@SpringBootTest
@ComponentScan(basePackages = "com.example.linkpack")
class LinkpackApplicationTests {

    @Test
    public void generateshortcode(){
        UrlServiceWithDataBase test = new UrlServiceWithDataBase();

        String resulte = test.createShortLink("www.google.com");

        assertNotNull(resulte);
    }
}
