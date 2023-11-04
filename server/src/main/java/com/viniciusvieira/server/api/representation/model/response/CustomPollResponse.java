package com.viniciusvieira.server.api.representation.model.response;

import com.viniciusvieira.server.domain.model.Participant;
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
    private Integer count;
    private List<AvatarParticipantResponse> participants;
}
