package com.viniciusvieira.server.api.representation.model.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class UserResponse {
    private String name;
    private String email;
    private String avatarUrl;

}
