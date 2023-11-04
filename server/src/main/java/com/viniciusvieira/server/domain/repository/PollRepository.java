package com.viniciusvieira.server.domain.repository;

import com.viniciusvieira.server.domain.model.Poll;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface PollRepository extends JpaRepository<Poll, UUID> {
    Optional<Poll> findByCode(String code);
}
