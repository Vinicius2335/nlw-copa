package com.viniciusvieira.server.domain.service;

import com.viniciusvieira.server.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public long countUsers(){
        return userRepository.count();
    }
}
