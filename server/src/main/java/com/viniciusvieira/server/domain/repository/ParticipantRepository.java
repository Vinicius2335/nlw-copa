package com.viniciusvieira.server.domain.repository;

import com.viniciusvieira.server.domain.model.Participant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ParticipantRepository extends JpaRepository<Participant, UUID> {
    Optional<Participant> findByUserIdAndPollId(UUID idUser, UUID idPoll);

    List<Participant> findByUserId(UUID idUser);
    List<Participant> findByPollId(UUID idPoll);

}
