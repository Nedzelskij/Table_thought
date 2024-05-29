package org.example.repository;

import org.example.model.GameRules;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface GameRulesRepository extends JpaRepository<GameRules, Integer> {
}
