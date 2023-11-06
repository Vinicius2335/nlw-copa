package com.viniciusvieira.server.api.representation.model.response;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ParticipantUserResponse {
    private UserResponse user;
}
