package com.viniciusvieira.server.domain.service;

import com.viniciusvieira.server.domain.repository.PoolRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PoolService {
    private final PoolRepository poolRepository;

    public long getCount(){
        return poolRepository.count();
    }
}
