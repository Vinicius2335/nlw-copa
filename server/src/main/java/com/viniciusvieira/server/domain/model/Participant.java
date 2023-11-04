package com.viniciusvieira.server.domain.model;

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
public class Participant extends BasicEntity {

    // 1 usuário pode participar de vários bolões, ou sejá, ele será participante * vezes
    @ManyToOne(optional = false)
    @JoinColumn(name="user_id", nullable=false)
    private User user;

    // 1 participante sempre estára associado a - 1 bolão
    @ManyToOne(optional = false)
    @JoinColumn(name="poll_id", nullable=false)
    private Poll poll;
}
