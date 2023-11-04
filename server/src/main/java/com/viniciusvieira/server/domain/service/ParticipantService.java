package com.viniciusvieira.server.domain.service;

import com.viniciusvieira.server.domain.model.Participant;
import com.viniciusvieira.server.domain.model.Poll;
import com.viniciusvieira.server.domain.model.User;
import com.viniciusvieira.server.domain.repository.ParticipantRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ParticipantService {
    private final ParticipantRepository participantRepository;

    @Transactional
    public void createParticipant(User user, Poll poll){
        Participant participant = Participant.builder()
                .poll(poll)
                .user(user)
                .build();

        participantRepository.saveAndFlush(participant);
    }

    public boolean isUserAlreadyParticipantInThePoll(UUID idUser, UUID idPoll){
        Optional<Participant> participant = participantRepository.findByUserIdAndPollId(idUser, idPoll);
        return participant.isPresent();
    }

    public List<Participant> getAllPollsUserParticipating(UUID idUser){
        return participantRepository.findByUserId(idUser);
    }

    public List<Participant> getAllParticipantsByPollId(UUID idPoll){
        return participantRepository.findByPollId(idPoll);
    }

    public int countPollParticipantsByPollId(UUID idPoll){
        List<Participant> participants = participantRepository.findByPollId(idPoll);
        return participants.size();
    }

}
