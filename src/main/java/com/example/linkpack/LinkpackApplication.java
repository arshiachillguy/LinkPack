package com.example.linkpack;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.example.linkpack") // اسکن همه زیرپکیج‌ها
public class LinkpackApplication {

	public static void main(String[] args) {
		SpringApplication.run(LinkpackApplication.class, args);
	}

}
