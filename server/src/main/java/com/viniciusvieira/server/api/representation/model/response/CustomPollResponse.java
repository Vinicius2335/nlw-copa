package com.viniciusvieira.server.api.representation.model.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class CustomPollResponse {
    private PollResponse poll;
    private Integer countParticipants;
    private List<ParticipantUserResponse> participants;
}
