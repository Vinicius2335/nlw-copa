package com.viniciusvieira.server.domain.service;

import com.viniciusvieira.server.api.mapper.PoolMapper;
import com.viniciusvieira.server.api.representation.model.request.PoolRequest;
import com.viniciusvieira.server.api.representation.model.response.PoolResponse;
import com.viniciusvieira.server.domain.model.Pool;
import com.viniciusvieira.server.domain.repository.PoolRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PoolService {
    private final PoolRepository poolRepository;
    private final PoolMapper poolMapper;

    public long countPools(){
        return poolRepository.count();
    }

    @Transactional
    public PoolResponse createPool(PoolRequest poolRequest){
        Pool poolToSaved = poolMapper.toPool(poolRequest);
        poolToSaved.setCode(createCode());

        Pool saved = poolRepository.saveAndFlush(poolToSaved);
        return poolMapper.toPoolResponse(saved);
    }

    private String createCode(){
        return RandomStringUtils.randomAlphanumeric(6).toUpperCase();
    }
}
