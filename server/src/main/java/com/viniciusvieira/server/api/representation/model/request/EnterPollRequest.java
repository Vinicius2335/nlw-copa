package com.viniciusvieira.server.api.representation.model.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class EnterPollRequest {
    @NotBlank(message = "Code cannot be null or blank")
    private String code;
}
