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
import com.viniciusvieira.server.domain.repository.GameRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class GameService {
    private final GameRepository gameRepository;
    public Optional<Game> findGameById(UUID idGame){
        return gameRepository.findById(idGame);
    }

    public List<Game> findAll(){ return gameRepository.findAll(); }
}
