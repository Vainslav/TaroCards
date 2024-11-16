package com.javagnomes.TaroCards;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Сейчас имеет Hello, World! по /api/data
 * Тут будет ручка для отправки формы
 */
@RestController
public class MainRestController {

        @GetMapping("/api/data")
        public String getData() {
            return "Hello, World!";
        }
}
