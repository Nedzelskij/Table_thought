package org.example.dto.game;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GameFullDTO {

    private Integer id;
    private String title;
    private String textAmount;
    private String gameDuration;
    private String players;
    private String age;
    private String bggLink;
    private String youTubeLink;
    private Integer releaseYear;
    private String mainSection;
    private String review;
    private byte[] imageFile;
//    private List<CommentResponseDTO> comments;
}
