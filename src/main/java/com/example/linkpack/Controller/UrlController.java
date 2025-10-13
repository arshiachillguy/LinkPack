package com.example.linkpack.Controller;

import com.example.linkpack.Models.LinkModel;
import com.example.linkpack.Services.UrlService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UrlController {

    private static final Logger log = LoggerFactory.getLogger(UrlController.class);

    @Autowired
    private UrlService service;

    // generate short linke
    @PostMapping("/shorten")
    public ResponseEntity<?> createShortUrl(@RequestBody Map<String , String> request){
        try {
            String OriginalUrl = request.get("url");
            if (OriginalUrl == null || OriginalUrl.trim().isEmpty()){
                return ResponseEntity.badRequest().body("link can not be empty");
            }

            String shorturl = service.ShortUrl(OriginalUrl);
            Map<String , String> response = new HashMap<>();
            response.put("shortUrl" , shorturl);
            return ResponseEntity.ok(response);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("server error !!");
        }
    }

    // redirect to main page
    @GetMapping("/{shortCode}")
    public ResponseEntity<?> redirectToOriginal(@PathVariable String shortCode){
        try {
            String originalUrl = service.FindOriginalUrl(shortCode);
            if (originalUrl != null){
                //this line will redirect us to the main page of the link
                return ResponseEntity.status(HttpStatus.FOUND).header(HttpHeaders.LOCATION, originalUrl).build();
            }else {
                return  ResponseEntity.status(HttpStatus.NOT_FOUND).body("link not found please check your link ! ");
            }
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("server error !!");
        }

    }

    @GetMapping("/stats/{shortCode}")
    public ResponseEntity<?> status(@PathVariable String shortCode){

        try {
            Optional<LinkModel> status = service.Statistics(shortCode);
            if (status != null){
                return ResponseEntity.ok(status);
            }else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("link not found please check what happened !! ");
            }
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("server error !!");
        }
    }
}
