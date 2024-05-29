package org.example.service;

import lombok.RequiredArgsConstructor;
import org.example.dto.comment.CommentCreateDTO;
import org.example.dto.comment.CommentMapper;
import org.example.dto.comment.CommentResponseDTO;
import org.example.model.Comment;
import org.example.model.Game;
import org.example.model.User;
import org.example.repository.CommentRepository;
import org.example.repository.GameRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final GameRepository gameRepository;
    private final UserService userService;
    private final CommentMapper commentMapper;

    public List<CommentResponseDTO> getAllForGame(Integer gameId) {
        Game game = gameRepository.getById(gameId);

        return game.getComments().stream()
                .map(commentMapper::commentToResponseDTO)
                .collect(Collectors.toList());
    }

    public CommentResponseDTO add(CommentCreateDTO createDTO) {
        User user = userService.getCurrentUser();
        Game game = gameRepository.getById(createDTO.getGameId());

        Comment comment = commentMapper.createDTOToComment(createDTO);
        comment.setUser(user);
        comment.setGame(game);

        return commentMapper.commentToResponseDTO(commentRepository.save(comment));
    }

    public void delete(Integer commentId) {
        commentRepository.deleteById(commentId);
    }
}
