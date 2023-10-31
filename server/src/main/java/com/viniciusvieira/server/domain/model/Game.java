package com.viniciusvieira.server.domain.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.time.OffsetDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@SuperBuilder
@Entity
@EqualsAndHashCode(callSuper = true)
@ToString(callSuper = true)
public class Game extends BasicEntity {
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private OffsetDateTime date;

    // ISO code paises, cada pais pode ser representado por um código numérico
    // ou um código de letras de 2 a 3 caracteres
    @Column(nullable = false, length = 2)
    private String firstTeamCountryCode;

    @Column(nullable = false, length = 2)
    private String secondTeamCountryCode;
}
