package com.viniciusvieira.server.domain.service;

import com.viniciusvieira.server.api.mapper.GuessMapper;
import com.viniciusvieira.server.api.representation.model.request.GuessRequest;
import com.viniciusvieira.server.api.representation.model.response.GuessResponse;
import com.viniciusvieira.server.common.util.ExtractEntityUtils;
import com.viniciusvieira.server.domain.exception.BusinessRuleException;
import com.viniciusvieira.server.domain.exception.GameNotFoundException;
import com.viniciusvieira.server.domain.model.Game;
import com.viniciusvieira.server.domain.model.Guess;
import com.viniciusvieira.server.domain.model.Participant;
import com.viniciusvieira.server.domain.model.User;
import com.viniciusvieira.server.domain.repository.GuessRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.OffsetDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class GuessService {
    private final GuessRepository guessRepository;
    private final GuessMapper guessMapper;
    private final ParticipantService participantService;
    private final GameService gameService;

    public long countGuesses() {
        return guessRepository.count();
    }

    public GuessResponse getGuessResponseByGameAndParticipant(Game game, Participant participant) {
        Optional<Guess> guess = guessRepository.findByGameIdAndParticipantId(game.getId(), participant.getId());
        return guess.map(guessMapper::toGuessResponse).orElse(null);
    }

    @Transactional
    public void createNewGuess(UUID idPoll, UUID idGame, GuessRequest guessRequest) {
        User user = ExtractEntityUtils.extractEntityFromContex();
        Participant participant;
        Game game;

        Optional<Participant> optionalParticipant = participantService.findParticipantByIdUserAndIdPoll(user.getId(), idPoll);
        Optional<Game> optionalGame = gameService.findGameById(idGame);

        // verifica se participant for nullo, significa que o usuário não faz parte desse bolão.
        if (optionalParticipant.isEmpty()) {
            throw new BusinessRuleException("You're not allowed to create a guess inside this poll...");
        } else {
            participant = optionalParticipant.get();
        }

        boolean existsGuess = guessRepository.existsByGameIdAndParticipantId(idGame, participant.getId());
        // verifica se existe um palpite, significa que o usuário á fez um palpite antes
        if (existsGuess) {
            throw new BusinessRuleException("You already sent a guess to this game on this poll...");
        }

        // verifica se o game existe
        if (optionalGame.isEmpty()) {
            throw new GameNotFoundException("Game not found...");
        } else {
            game = optionalGame.get();
        }

        // verifica se a data do game for anterior a data atual
        if (game.getDate().isBefore(OffsetDateTime.now())) {
            throw new BusinessRuleException("You cannot send guesses after the game date...");
        }

        Guess newGuess = Guess.builder()
                .firstTeamPoints(guessRequest.getFirstTeamPoints())
                .secondTeamPoints(guessRequest.getSecondTeamPoints())
                .game(game)
                .participant(participant)
                .build();

        guessRepository.saveAndFlush(newGuess);
    }
}
