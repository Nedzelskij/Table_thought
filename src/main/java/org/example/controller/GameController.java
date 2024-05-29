package org.example.controller;

import lombok.RequiredArgsConstructor;
import org.example.dto.game.GameCreateDTO;
import org.example.dto.game.GameFullDTO;
import org.example.dto.game.GameShortDTO;
import org.example.service.GameService;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/game")
@RequiredArgsConstructor
public class GameController {

    private final GameService gameService;

    @GetMapping("/{id}")
    public GameFullDTO get(@PathVariable("id") Integer gameId) {
        return gameService.getGame(gameId);
    }

    @GetMapping(value = "/{id}/rules", produces = MediaType.APPLICATION_PDF_VALUE)
    public Resource getGameRules(@PathVariable("id") Integer gameId) {
        return gameService.getGameRules(gameId);
    }

    @GetMapping
    public List<GameShortDTO> search(@RequestParam("title") String title) {
        return gameService.searchGames(title);
    }

    @GetMapping("/new")
    public List<GameShortDTO> getNewest() {
        return gameService.getNewestGames();
    }

    @GetMapping("/popular")
    public List<GameShortDTO> getPopular() {
        return gameService.getPopularGames();
    }

    @PostMapping
    public Integer add(@Valid GameCreateDTO createDTO) {
        return gameService.add(createDTO);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer gameId) {
        gameService.delete(gameId);
    }
}
