package org.example.repository;

import org.example.model.Game;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameRepository extends JpaRepository<Game, Integer> {

    @Query("SELECT g FROM Game g WHERE LOWER(g.title) LIKE LOWER(CONCAT('%', :title, '%'))")
    List<Game> findGamesByTitleContainingIgnoreCase(String title);

    @Query("SELECT g FROM Game g ORDER BY g.releaseYear DESC")
    List<Game> findTop10ByOrderByReleaseYearDesc(Pageable pageable);

    default List<Game> findTop10NewestGames() {
        return findTop10ByOrderByReleaseYearDesc(PageRequest.of(0, 10));
    }

    @Query("SELECT g FROM Game g LEFT JOIN g.comments c GROUP BY g.id ORDER BY COUNT(c.id) DESC")
    List<Game> findTop10GamesByCommentsCount();
}
