package com.viniciusvieira.server.api.representation.model.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping
@Data
public class UserIdRequest {
    @NotBlank(message = "Id cannot be null or blank")
    private String id;
}
