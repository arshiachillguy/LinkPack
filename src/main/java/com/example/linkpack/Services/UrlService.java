package com.example.linkpack.Services;
import com.example.linkpack.Models.LinkModel;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Random;

@Service
public class UrlService {

    private Map<String, LinkModel> urlStorage = new HashMap<>();
    private Long Id = 1L;


    // Create a short Url From original Url
    public String ShortUrl(String OriginalUrl){
        if (OriginalUrl == null){
            return null;
        }

        // generate code
        String code = CreateCode().toUpperCase();

        // create object
        LinkModel shortUrl = new LinkModel(Id++ , OriginalUrl , code);

        // save on HashMap
        urlStorage.put(code , shortUrl);
        System.out.println("new link created:");
        System.out.println("code: " + code + " -> " + OriginalUrl);
        System.out.println("saved links: " + urlStorage.size());


        // return short link
        return "http://localhost:8080/api/" + code;

    }

    //    Create a code for Short url
    public String CreateCode(){

        String SALTCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        StringBuilder salt = new StringBuilder();
        Random rnd = new Random();
        while (salt.length() < 5) { // length of the random string.
            int index = (int) (rnd.nextFloat() * SALTCHARS.length());
            salt.append(SALTCHARS.charAt(index));
        }
        String saltStr = salt.toString();
        return saltStr;
    }

    //    this will find the original url
    public String FindOriginalUrl(String shortCode){

        shortCode = shortCode.toUpperCase();

        LinkModel shortrul = urlStorage.get(shortCode);

        System.out.println("search for this code: " + shortCode);
        System.out.println("exited links: " + urlStorage.keySet());
        // increase clicks
        if (shortrul != null){
            shortrul.setClicks(shortrul.getClicks() + 1);
            System.out.println("resulte" + shortrul.getOriginalUrl());
            return shortrul.getOriginalUrl();
        }
        System.out.println("i can't find your link ! ");
        return null; //not found
    }


    // this method will count the clicks
    public Optional<LinkModel> Statistics(String shortCode) {

        System.out.println("statistics for this : " + shortCode);

        LinkModel link = urlStorage.get(shortCode);
        if (link != null) {
            System.out.println("founded: " + link.getOriginalUrl());
            System.out.println("🆔 ID: " + link.getId());
            System.out.println("🔗 OriginalURL: " + link.getOriginalUrl());
            System.out.println("📝 ShortCODE: " + link.getShortCODE());
            System.out.println("🕒 timestamp: " + link.getTimestamp());
            System.out.println("👆 Clicks: " + link.getClicks());
        } else {
            System.out.println("nothing for show !");
        }

        return Optional.ofNullable(link);
    }
}
