package com.viniciusvieira.server.domain.service;

import com.viniciusvieira.server.api.mapper.GameMapper;
import com.viniciusvieira.server.api.representation.model.response.CustomGameResponse;
import com.viniciusvieira.server.api.representation.model.response.GameResponse;
import com.viniciusvieira.server.api.representation.model.response.GuessResponse;
import com.viniciusvieira.server.common.util.ExtractEntityUtils;
import com.viniciusvieira.server.domain.model.Game;
import com.viniciusvieira.server.domain.model.Participant;
import com.viniciusvieira.server.domain.model.Poll;
import com.viniciusvieira.server.domain.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class GetAllGamesResponseService {
    private final GameService gameService;
    private final GameMapper gameMapper;
    private final PollService pollService;
    private final GuessService guessService;
    private final ParticipantService participantService;

    public List<CustomGameResponse> getAllGamesResponse(UUID idPoll) {
        // valida o id do bolão
        Poll poll = pollService.findPollsByIdOrThorws(idPoll);
        //extrai o usuário elogado
        User user = ExtractEntityUtils.extractEntityFromContex();
        List<CustomGameResponse> response = new ArrayList<>();

        //procura o participande pelo usuário e bolão
        Participant participant = participantService.findParticipantByUserAndPollOrThrows(user, poll);
        List<Game> games = gameService.findAll();

        // retorna todos os games
        // para cada game verifica se o usuário possui um palpite, levando em consideração o bolão que está participando
        // ou seja, o usuário pode fazer vários palpites para o mesmo jogo, desde que estejá em bolões diferentes
        // para cada bolão, o usuário poderá realizar um palpite por jogo
        games.forEach(game -> {
            GameResponse gameResponse = gameMapper.toGameResponse(game);
            GuessResponse guess = guessService.getGuessResponseByGameAndParticipant(game, participant);
            response.add(
                    CustomGameResponse.builder()
                            .game(gameResponse)
                            .guess(guess)
                            .build()
            );
        });

        return response;
    }
}
