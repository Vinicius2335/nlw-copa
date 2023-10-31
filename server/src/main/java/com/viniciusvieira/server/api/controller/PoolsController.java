package com.viniciusvieira.server.api.controller;

import com.viniciusvieira.server.api.representation.model.request.PoolRequest;
import com.viniciusvieira.server.api.representation.model.response.PoolResponse;
import com.viniciusvieira.server.domain.service.PoolService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/pools")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", maxAge = 3600)
public class PoolsController {
    private final PoolService poolService;

    @GetMapping("/count")
    public ResponseEntity<Map<String, Long>> countPools(){
        Map<String, Long> map = new HashMap<>();
        map.put("count", poolService.countPools());
        return ResponseEntity.ok(map);
    }

    @PostMapping
    public ResponseEntity<PoolResponse> createNewPool(@Valid @RequestBody PoolRequest poolRequest){
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(poolService.createPool(poolRequest));
    }
}
