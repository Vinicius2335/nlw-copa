package com.viniciusvieira.server.api.mapper;

import com.viniciusvieira.server.api.representation.model.response.ParticipantUserResponse;
import com.viniciusvieira.server.domain.model.Participant;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class ParticipantMapper {
    private final ModelMapper modelMapper;

    public ParticipantUserResponse toParticipantUserResponse(Participant participant){
        return modelMapper.map(participant, ParticipantUserResponse.class);
    }

    public List<ParticipantUserResponse> toListParticipantUserResponse(List<Participant> participants){
        return participants.stream()
                .map(this::toParticipantUserResponse)
                .toList();
    }
}
