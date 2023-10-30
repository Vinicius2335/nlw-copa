package com.viniciusvieira.server.api.controller;

import com.viniciusvieira.server.domain.service.PoolService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/pools")
@RequiredArgsConstructor
public class PoolsController {
    private final PoolService poolService;

    @GetMapping("/count")
    public ResponseEntity<String> count(){
        return ResponseEntity.ok("Total of pools: " + poolService.getCount());
    }
}
