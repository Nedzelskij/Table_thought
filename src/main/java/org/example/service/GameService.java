package org.example.service;

import lombok.RequiredArgsConstructor;
import org.example.dto.game.*;
import org.example.model.Comment;
import org.example.model.Game;
import org.example.model.GameRules;
import org.example.repository.GameRepository;
import org.example.repository.GameRulesRepository;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class GameService {

    private final GameRepository gameRepository;
    private final GameRulesRepository gameRulesRepository;
    private final GameMapper gameMapper;

    @Transactional
    public GameFullDTO getGame(Integer gameId) {
        Game game = gameRepository.getById(gameId);
        game.getComments().sort(Comparator.comparing(Comment::getCreatedOn));

        return gameMapper.gameToFullDTO(gameRepository.getById(gameId));
    }

    public Resource getGameRules(Integer gameId) {
        Game game = gameRepository.findById(gameId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        return new ByteArrayResource(game.getGameRules().getRulesFile());
    }

    @Transactional
    public List<GameShortDTO> getNewestGames() {
        return gameRepository.findTop10NewestGames().stream()
                .map(gameMapper::gameToShortDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public List<GameShortDTO> getPopularGames() {
        return gameRepository.findTop10GamesByCommentsCount().stream()
                .map(gameMapper::gameToShortDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public Integer add(GameCreateDTO createDTO) {
        Game game = gameMapper.createDTOToGame(createDTO);
        Game savedGame = gameRepository.save(game);

        try {
            game.setImageFile(createDTO.getImageFile().getBytes());
            GameRules gameRules = new GameRules(createDTO.getRulesFile().getBytes());
            gameRules.setGame(savedGame);
            gameRulesRepository.save(gameRules);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return savedGame.getId();
    }

    @Transactional
    public List<GameShortDTO> searchGames(String title) {
        return gameRepository.findGamesByTitleContainingIgnoreCase(title).stream()
                .map(gameMapper::gameToShortDTO)
                .collect(Collectors.toList());
    }

    public void delete(Integer gameId) {
        gameRepository.deleteById(gameId);
    }
}
