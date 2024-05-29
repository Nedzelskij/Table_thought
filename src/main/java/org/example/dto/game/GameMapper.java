package org.example.dto.game;

import org.example.model.Game;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface GameMapper {

    @Mapping(target = "imageFile", ignore = true)
    Game createDTOToGame(GameCreateDTO createDTO);
//    @Mapping(source = "imageFile.cover", target = "cover")
    GameShortDTO gameToShortDTO(Game game);
    GameFullDTO gameToFullDTO(Game game);
}
