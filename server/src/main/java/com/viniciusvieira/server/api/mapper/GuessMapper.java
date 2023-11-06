package com.viniciusvieira.server.api.mapper;

import com.viniciusvieira.server.api.representation.model.response.GuessResponse;
import com.viniciusvieira.server.domain.model.Guess;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class GuessMapper {
    private final ModelMapper modelMapper;

    public GuessResponse toGuessResponse(Guess guess){
        return modelMapper.map(guess, GuessResponse.class);
    }
}
