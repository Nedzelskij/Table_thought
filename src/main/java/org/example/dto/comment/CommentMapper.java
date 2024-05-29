package org.example.dto.comment;

import org.example.model.Comment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CommentMapper {

    Comment createDTOToComment(CommentCreateDTO createDTO);
    @Mapping(source = "user.name", target = "username")
    @Mapping(source = "game.id", target = "gameId")
    CommentResponseDTO commentToResponseDTO(Comment comment);
}
