package com.viniciusvieira.server;


import com.viniciusvieira.server.api.mapper.PoolMapper;
import com.viniciusvieira.server.api.representation.model.response.PoolResponse;
import com.viniciusvieira.server.domain.model.Pool;
import com.viniciusvieira.server.domain.model.User;
import org.apache.commons.lang3.RandomStringUtils;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;

import java.time.OffsetDateTime;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

class ClassTest {
    @Test
    void testPoolMapper(){
        PoolMapper poolMapper = new PoolMapper(new ModelMapper());

        User user = User.builder()
                .id(UUID.randomUUID())
                .createdAt(OffsetDateTime.now())
                .name("Teste")
                .email("Teste@gmail.com")
                .avatarUrl("dale")
                .build();

        Pool pool = Pool.builder()
                .id(UUID.randomUUID())
                .createdAt(OffsetDateTime.now())
                .title("Examplo")
                .code("BOL123")
                .owner(user)
                .build();

        assertDoesNotThrow(() -> {
            PoolResponse poolResponse = poolMapper.toPoolResponse(pool);
            System.out.println(poolResponse);
        });
    }

    @Test
    void testCreateRandomCode(){
        String code = RandomStringUtils.randomAlphanumeric(6).toUpperCase();

        for (int i = 0; i <= 10; i++){
            System.out.println(RandomStringUtils.randomAlphanumeric(6).toUpperCase());
        }

        assertEquals(6, code.length());
    }
}
