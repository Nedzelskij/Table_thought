package org.example.dto.game;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GameShortDTO {

    private Integer id;
    private String title;
    private String gameDuration;
    private String players;
    private String mainSection;
    private byte[] imageFile;
}
