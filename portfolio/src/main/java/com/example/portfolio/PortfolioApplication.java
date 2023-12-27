package com.example.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;



@SpringBootApplication
@RestController
public class PortfolioApplication {

	
	@GetMapping("/api/data")
    public String getData() {
        return "Hello from Spring Boot!";
    }

	public static void main(String[] args) {
		SpringApplication.run(PortfolioApplication.class, args);
	}

}
