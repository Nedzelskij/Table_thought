package org.example.dto.game;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
public class GameCreateDTO {

    @NotEmpty
    private String title;
    private String textAmount;
    private String gameDuration;
    private String players;
    private String age;
    private String bggLink;
    private String youTubeLink;
    private Integer releaseYear;
    private String mainSection;
    @Size(max = 2000)
    private String review;
    @NotNull
    private MultipartFile imageFile;
    @NotNull
    private MultipartFile rulesFile;
}
