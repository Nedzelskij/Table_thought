package org.example.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="game_rules")
public class GameRules {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    @OneToOne
    @MapsId
    private Game game;
    @Lob
    private byte[] rulesFile;

    public GameRules(byte[] rulesFile) {
        this.rulesFile = rulesFile;
    }
}
