package com.viniciusvieira.server.api.controller;

import com.viniciusvieira.server.domain.service.GuessService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/guesses")
@RequiredArgsConstructor
public class GuessController {
    private final GuessService guessService;

    @GetMapping("/count")
    public ResponseEntity<Map<String, Long>> countGuesses(){
        Map<String, Long> map = new HashMap<>();
        map.put("count", guessService.countGuesses());
        return ResponseEntity.ok(map);
    }
}
