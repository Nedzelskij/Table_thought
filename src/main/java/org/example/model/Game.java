package org.example.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name="game")
public class Game {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    private String title;
    private String textAmount;
    private String gameDuration;
    private String players;
    private String age;
    private String bggLink;
    private String youTubeLink;
    private String mainSection;
    private Integer releaseYear;
    @Column(length = 2000)
    private String review;
    @Lob
    private byte[] imageFile;
    @OneToOne(mappedBy = "game", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private GameRules gameRules;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "game", cascade = CascadeType.ALL)
    private List<Comment> comments;
}
