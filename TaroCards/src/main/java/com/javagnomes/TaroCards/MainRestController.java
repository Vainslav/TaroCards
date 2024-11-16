package com.javagnomes.TaroCards;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainRestController {

        @GetMapping("/api/data")
        public String getData() {
            return "Hello, World!";
        }
}
