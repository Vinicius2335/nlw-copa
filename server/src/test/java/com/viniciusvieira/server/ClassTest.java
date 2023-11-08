package com.viniciusvieira.server;


import com.viniciusvieira.server.api.mapper.PollMapper;
import com.viniciusvieira.server.api.representation.model.response.PollResponse;
import com.viniciusvieira.server.domain.model.Poll;
import com.viniciusvieira.server.domain.model.User;
import org.apache.commons.lang3.RandomStringUtils;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.time.OffsetDateTime;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

class ClassTest {
    @Test
    void testPoolMapper(){
        PollMapper pollMapper = new PollMapper(new ModelMapper());

        User user = User.builder()
                .id(UUID.randomUUID())
                .createdAt(OffsetDateTime.now())
                .name("Teste")
                .email("Teste@gmail.com")
                .avatarUrl("dale")
                .build();

        Poll poll = Poll.builder()
                .id(UUID.randomUUID())
                .createdAt(OffsetDateTime.now())
                .title("Examplo")
                .code("BOL123")
                .owner(user)
                .build();

        assertDoesNotThrow(() -> {
            PollResponse pollResponse = pollMapper.toPollResponse(poll);
            System.out.println(pollResponse);
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

    @Test
    void encodePassword(){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String password = encoder.encode("john123");

        System.out.println(password);

        assertEquals(password.getClass(), String.class);
    }
}
