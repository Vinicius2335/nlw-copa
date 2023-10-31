package com.viniciusvieira.server.domain.repository;

import com.viniciusvieira.server.domain.model.Guess;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface GuessRepository extends JpaRepository<Guess, UUID> {
}
