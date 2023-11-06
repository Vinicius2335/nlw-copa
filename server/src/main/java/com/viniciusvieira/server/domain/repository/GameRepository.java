package com.viniciusvieira.server.domain.repository;

import com.viniciusvieira.server.domain.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface GameRepository extends JpaRepository<Game, UUID> {
}