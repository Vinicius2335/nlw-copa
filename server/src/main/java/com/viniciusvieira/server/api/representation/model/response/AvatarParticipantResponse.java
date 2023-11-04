package com.viniciusvieira.server.api.representation.model.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AvatarParticipantResponse {
    @JsonProperty("avatarUrl")
    private String userAvatarUrl;
}
