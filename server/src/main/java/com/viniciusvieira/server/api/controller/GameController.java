package com.viniciusvieira.server.api.controller;

import com.viniciusvieira.server.api.representation.model.response.CustomGameResponse;
import com.viniciusvieira.server.domain.service.GameService;
import com.viniciusvieira.server.domain.service.GetAllGamesResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class GameController {
    private final GetAllGamesResponseService gameService;

    /**
     * Rota responsável por retornar todos os games, e se o usuário fez um palpite num game para esse bolão.
     * O Usuário deve estár autenticado.
     * @param idPoll id do bolão
     * @return custom response
     */
    @GetMapping("/polls/{idPoll}/games")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<CustomGameResponse>> getGamesByIdPoll(@PathVariable UUID idPoll){
        return ResponseEntity.ok(gameService.getAllGamesResponse(idPoll));
    }
}
