package com.viniciusvieira.server.domain.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@AllArgsConstructor
@NoArgsConstructor
@Data
@SuperBuilder
@Entity
@EqualsAndHashCode(callSuper = true)
@ToString(callSuper = true)
public class Poll extends BasicEntity {
    @Column(nullable = false)
    private String title;

    @Column(unique = true, nullable = false, length = 6)
    private String code;

    // proprietário
    // 1 bolão - sempre terá - 1 proprietário (que será 1 user)
    // TODO - como ná web não terá sistema de login, ele pode ser vazio
    @OneToOne
    @JoinColumn(name="owner_id")
    private User owner;
}
