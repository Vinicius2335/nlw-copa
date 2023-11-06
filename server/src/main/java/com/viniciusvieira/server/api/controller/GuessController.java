package com.viniciusvieira.server.api.controller;

import com.viniciusvieira.server.api.representation.model.request.GuessRequest;
import com.viniciusvieira.server.domain.service.GuessService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class GuessController {
    private final GuessService guessService;

    @GetMapping("/guesses/count")
    public ResponseEntity<Map<String, Long>> countGuesses() {
        Map<String, Long> map = new HashMap<>();
        map.put("count", guessService.countGuesses());
        return ResponseEntity.ok(map);
    }

    /**
     * Rota responsável por criar um novo palpite.
     * O usuário deve estar autenticado.
     * @param idPoll id do bolão que o usuário está participando
     * @param idGame id do game que o usuário deseja realizar um palpite
     * @param guessRequest campos necessário para criar um palpite válido
     * @return status 201
     */
    @PostMapping("/polls/{idPoll}/games/{idGame}/guesses")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<Void> createNewGuess(
            @PathVariable UUID idPoll,
            @PathVariable UUID idGame,
            @Valid @RequestBody GuessRequest guessRequest
    ) {
        guessService.createNewGuess(idPoll, idGame, guessRequest);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .build();
    }
}