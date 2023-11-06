package com.viniciusvieira.server.api.controller;

import com.viniciusvieira.server.api.representation.model.request.CreatePollRequest;
import com.viniciusvieira.server.api.representation.model.request.EnterPollRequest;
import com.viniciusvieira.server.api.representation.model.response.CustomPollResponse;
import com.viniciusvieira.server.domain.service.PollService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/polls")
@RequiredArgsConstructor
public class PollController {
    private final PollService pollService;

    @GetMapping("/count")
    public ResponseEntity<Map<String, Long>> countPolls(){
        Map<String, Long> map = new HashMap<>();
        map.put("count", pollService.countPolls());
        return ResponseEntity.ok(map);
    }

    /**
     * Rota responsável por criar um bolão. Funciona para usuários logados ou não.
     * @param createPollRequest campos necessários para criar um bolão válido.
     * @return o código único do bolão criado.
     */
    @PostMapping
    public ResponseEntity<Map<String, Object>> createNewPoll(@Valid @RequestBody CreatePollRequest createPollRequest){
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(pollService.createPoll(createPollRequest));
    }

    /**
     * Rota responsável em registrar o usuário autenticado num bolão.
     * @param request corpo da requisição que deve conter o código de um bolão.
     * @return
     */
    @PostMapping("/join")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<Void> joinInPoll(@Valid @RequestBody EnterPollRequest request){
        pollService.joinInPoll(request);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    /**
     * Rota reponável por buscar todos os bolões que o usuário autenticado está participando.
     * @return lista de bolões.
     */
    @GetMapping
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<CustomPollResponse>> getPolls(){
        return ResponseEntity.ok(pollService.getPollsResponse());
    }

    /**
     * Rota responável por buscar um bolão apartir de seu id.
     * @param idPoll id do bolão.
     * @return bolão.
     */
    @GetMapping("/{idPoll}")
    public ResponseEntity<CustomPollResponse> getPollById(@PathVariable UUID idPoll){
        return ResponseEntity.ok(pollService.getPollResponseById(idPoll));
    }
}
