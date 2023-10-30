package com.viniciusvieira.server.domain.repository;

import com.viniciusvieira.server.domain.model.Pool;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PoolRepository extends JpaRepository<Pool, UUID> {

}
