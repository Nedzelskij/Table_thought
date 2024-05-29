package org.example.dto.comment;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommentCreateDTO {

    private Integer gameId;
    private String content;
}
