package org.example.controller;

import lombok.RequiredArgsConstructor;
import org.example.dto.comment.CommentCreateDTO;
import org.example.dto.comment.CommentResponseDTO;
import org.example.service.CommentService;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/comment")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @GetMapping
    @Transactional
    public List<CommentResponseDTO> getForGame(@RequestParam("game-id") Integer gameId) {
        return commentService.getAllForGame(gameId);
    }

    @PostMapping
    public CommentResponseDTO add(@Valid CommentCreateDTO createDTO) {
        return commentService.add(createDTO);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer commentId) {
        commentService.delete(commentId);
    }
}
