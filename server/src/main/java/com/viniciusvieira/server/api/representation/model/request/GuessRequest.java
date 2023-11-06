package com.viniciusvieira.server.api.representation.model.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class GuessRequest {
    @NotNull(message = "FirstTeamPoints cannot be null")
    private int firstTeamPoints;

    @NotNull(message = "SecondTeamPoints cannot be null")
    private int secondTeamPoints;
}
