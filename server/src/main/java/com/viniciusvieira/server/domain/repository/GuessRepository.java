package com.viniciusvieira.server.domain.repository;

import com.viniciusvieira.server.domain.model.Guess;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface GuessRepository extends JpaRepository<Guess, UUID> {
    Optional<Guess> findByGameIdAndParticipantId(UUID idGame, UUID idParticipant);

    boolean existsByGameIdAndParticipantId(UUID idGame, UUID idParticipant);
}
