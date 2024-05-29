import React from "react";
import styles from "../css/VerticalList.module.css";
import {Link} from "react-router-dom";

const VerticalList = ({ games }) => {
    return (
        <div className={[styles["games-menu-container"], "container"].join(" ")}>
            {games.map((game, index) => (
                <div key={index} className={styles["games-menu-item"]}>
                    <div className={styles["games-img"]}>
                        <Link to={"/games/" + game.id}>
                            <img src={`data:image/jpeg;base64,${game.imageFile.toString()}`}
                                 alt={"Image of " + game.title}/>
                        </Link>
                    </div>
                    <div className={styles["games-description"]}>
                        <Link to={"/games/" + game.id}>
                            <h2>{game.title}</h2>
                        </Link>
                        <p>Game duration: {game.gameDuration}</p>
                        <p>Players: {game.players}</p>
                        <p>Main section: {game.mainSection}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default VerticalList;