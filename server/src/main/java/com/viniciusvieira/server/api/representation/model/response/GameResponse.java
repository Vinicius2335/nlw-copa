package com.viniciusvieira.server.api.representation.model.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.OffsetDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class GameResponse {
    private String id;
    private String firstTeamCountryCode;
    private String secondTeamCountryCode;
    private OffsetDateTime date;
}
