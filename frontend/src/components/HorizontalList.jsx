import React from "react";
import styles from "../css/HorizontalList.module.css";
import {Link} from "react-router-dom";

const HorizontalList = ({ id, games, background }) => {
    const scroll = (direction) => {
        const container = document.getElementById(id);
        container.scrollBy({
            left: direction * 220,
            behavior: 'smooth'
        });
    }
    const leftScroll = () => scroll(-1);
    const rightScroll = () => scroll(1);

    return (
        <div className={styles["games-list"]} style={{backgroundImage: `url(${background})`}}>
            <button className={[styles["scroll-button"], styles["left-button"]].join(" ")}
                    onClick={leftScroll}>&lt;</button>
            <div className={styles["scroll-container"]} id={id}>
                {games.map(game => (
                    <div key={game.id} className={styles["game-item"]}>
                        <Link to={"/games/" + game.id}>
                            <img src={`data:image/jpeg;base64,${game.imageFile.toString()}`}
                                 alt={game.title} />
                            <p>{game.title}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <button className={[styles["scroll-button"], styles["right-button"]].join(" ")}
                    onClick={rightScroll}>&gt;</button>
        </div>
    );
}

export default HorizontalList;