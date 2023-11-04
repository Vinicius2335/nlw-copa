package com.viniciusvieira.server.api.controller;

import com.viniciusvieira.server.domain.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/count")
    public ResponseEntity<Map<String, Long>> countUsers(){
        Map<String, Long> map = new HashMap<>();
        map.put("count", userService.countUsers());
        return ResponseEntity.ok(map);
    }
}
