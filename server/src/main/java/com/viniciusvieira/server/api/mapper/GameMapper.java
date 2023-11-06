package com.viniciusvieira.server.api.mapper;

import com.viniciusvieira.server.api.representation.model.response.GameResponse;
import com.viniciusvieira.server.domain.model.Game;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class GameMapper {
    private final ModelMapper modelMapper;

    public GameResponse toGameResponse(Game game){
        return modelMapper.map(game, GameResponse.class);
    }

    public List<GameResponse> toListGameResponse(List<Game> games){
        return games.stream()
                .map(this::toGameResponse)
                .toList();
    }
}
