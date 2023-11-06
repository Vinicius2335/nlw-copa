package com.viniciusvieira.server.domain.service;

import com.viniciusvieira.server.api.mapper.ParticipantMapper;
import com.viniciusvieira.server.api.representation.model.response.ParticipantUserResponse;
import com.viniciusvieira.server.domain.exception.ParticipantNotFoundException;
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
    private final ParticipantMapper participantMapper;

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

    public List<Participant> findAllParticipantsByIdUser(UUID idUser){
        return participantRepository.findByUserId(idUser);
    }

    public List<Participant> findAllParticipantsByIdPoll(UUID idPoll){
        return participantRepository.findByPollId(idPoll);
    }

    public List<ParticipantUserResponse> converterToParticipantUserResponseList(List<Participant> participants){
        return participantMapper.toListParticipantUserResponse(participants);
    }

    public Participant findParticipantByUserAndPollOrThrows(User user, Poll poll) throws ParticipantNotFoundException {
        return findParticipantByIdUserAndIdPoll(user.getId(), poll.getId())
                .orElseThrow(() -> new ParticipantNotFoundException("Participant not found..."));
    }

    public Optional<Participant> findParticipantByIdUserAndIdPoll(UUID idUser, UUID idPoll){
        return participantRepository.findByUserIdAndPollId(idUser, idPoll);
    }
}
