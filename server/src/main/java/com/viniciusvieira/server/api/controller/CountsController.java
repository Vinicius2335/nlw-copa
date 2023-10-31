package com.viniciusvieira.server.api.controller;

import com.viniciusvieira.server.domain.service.GuessService;
import com.viniciusvieira.server.domain.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class CountsController {
    private final GuessService guessService;
    private final UserService userService;

    @GetMapping("/users/count")
    public ResponseEntity<Map<String, Long>> countUsers(){
        Map<String, Long> map = new HashMap<>();
        map.put("count", userService.countUsers());
        return ResponseEntity.ok(map);
    }

    @GetMapping("/guesses/count")
    public ResponseEntity<Map<String, Long>> countGuesses(){
        Map<String, Long> map = new HashMap<>();
        map.put("count", guessService.countGuesses());
        return ResponseEntity.ok(map);
    }
}
