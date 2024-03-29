package com.viniciusvieira.server.domain.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;
import lombok.experimental.SuperBuilder;

@AllArgsConstructor
@NoArgsConstructor
@Data
@SuperBuilder
@Entity
@EqualsAndHashCode(callSuper = true)
@ToString(callSuper = true)
public class Guess extends BasicEntity {
    @Column(nullable = false)
    private int firstTeamPoints;

    @Column(nullable = false)
    private int secondTeamPoints;

    // Muitos palpites - estão relacionados a - 1 jogo
    // relacionamento unidirecional
    @ManyToOne(optional=false)
    @JoinColumn(name="game_id", nullable=false)
    private Game game;

    // BUG : mudar para participant_id + a migration
    // Muitos palpites - estão relacionados a - 1 participante
    @ManyToOne(optional=false)
    @JoinColumn(name="participant_id", nullable=false)
    private Participant participant;
}
