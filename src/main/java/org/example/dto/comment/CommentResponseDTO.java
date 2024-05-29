package org.example.dto.comment;

import lombok.Getter;
import lombok.Setter;
import java.util.Date;

@Getter
@Setter
public class CommentResponseDTO {

    private Integer id;
    private String username;
    private Integer gameId;
    private String content;
    private Date createdOn;
}
