package com.viniciusvieira.server.domain.service;

import com.viniciusvieira.server.domain.repository.GuessRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GuessService {
    private final GuessRepository guessRepository;

    public long countGuesses(){
        return guessRepository.count();
    }

}
