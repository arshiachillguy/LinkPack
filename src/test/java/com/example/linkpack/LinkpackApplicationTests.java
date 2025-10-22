package com.example.linkpack;
import com.example.linkpack.Services.UrlServiceWithDataBase;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@SpringBootTest
@ComponentScan(basePackages = "com.example.linkpack")
class LinkpackApplicationTests {

//	@Test
//	public void testURl(){
//		UrlServiceWithDataBase test = new UrlServiceWithDataBase();
//		String result = test.ShortUrl("https://grok.com/c/18deaa0e-f24f-4cfe-8a34-f6492d7e00a4");
//		System.out.println(result);
//	}
//
//



}
