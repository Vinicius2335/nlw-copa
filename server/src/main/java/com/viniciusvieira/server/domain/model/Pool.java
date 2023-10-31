package com.viniciusvieira.server.domain.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.OffsetDateTime;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Data
@SuperBuilder
@Entity
@EqualsAndHashCode(callSuper = true)
@ToString(callSuper = true)
public class Pool extends BasicEntity {
    @Column(nullable = false)
    private String title;

    @Column(unique = true, nullable = false, length = 6)
    private String code;

    // proprietário
    // 1 bolão - sempre terá - 1 proprietário (que será 1 user)
    // TODO - como ná web não terá sistema de login, ele pode ser vazio
    @OneToOne
    @JoinColumn(name="owner_id", unique=true)
    private User owner;
}
