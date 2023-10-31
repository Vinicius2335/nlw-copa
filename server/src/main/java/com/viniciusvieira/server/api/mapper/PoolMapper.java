package com.viniciusvieira.server.api.mapper;

import com.viniciusvieira.server.api.representation.model.request.PoolRequest;
import com.viniciusvieira.server.api.representation.model.response.PoolResponse;
import com.viniciusvieira.server.domain.model.Pool;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class PoolMapper {
    private final ModelMapper modelMapper;

    public Pool toPool(PoolRequest poolRequest){
        return modelMapper.map(poolRequest, Pool.class);
    }

    public PoolResponse toPoolResponse(Pool pool){
        return modelMapper.map(pool, PoolResponse.class);
    }
}
