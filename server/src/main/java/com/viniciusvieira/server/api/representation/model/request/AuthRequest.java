package com.viniciusvieira.server.api.representation.model.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthRequest {
    @NotBlank(message = "Email cannot be null or blank")
    private String email;

    @NotBlank(message = "Password cannot be null or blank")
    private String password;
}
