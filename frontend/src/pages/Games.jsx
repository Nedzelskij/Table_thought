import styles from "../css/Games.module.css"
import {useEffect, useState} from "react";
import API from "../API/axiosConfig";
import VerticalList from "../components/VerticalList";

const showcaseAreaStyles = {
    // height: "50vh",
    background: "linear-gradient(rgba(240, 240, 240, 0.144), rgba(255, 255, 255, 0.336)), url('/img/header_board_games.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
}

const gameSectionStyles = {
    paddingTop: "30px",
    backgroundImage: "url('/img/board_games_list_fone.jpg')",
    backgroundPosition: "top left",
    backgroundRepeat: "repeat",
    backgroundSize: "auto",
}

const Games = () => {
    const [title, setTitle] = useState("")
    const [games, setGames] = useState([])

    const fetchGames = () => {
        API.get("/game?title=" + title)
            .then(response => {
                const data = response.data;
                console.log(data);
                setGames(data);
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <main className={styles.main}>
            <section style={showcaseAreaStyles} id={styles["showcase"]}>
                <div className={styles["showcase-container"]}>
                    <h1 className={styles["main-title"]}>Quality reviews</h1>
                    <a href="#games-menu" className={[styles["btn"], styles["btn-primary"]].join(" ")}>go to</a>
                </div>
            </section>
            <section id={styles["stores"]}>
                <div className={styles["games-header"]}>
                    <h2>Board game stores</h2>
                </div>
                <div className={[styles["games-container"], "container"].join(" ")}>
                    <div className={styles["img-container"]}>
                        <img decoding="async" src="/img/geekach.png" alt="Geekach"/>
                        <div className={styles["img-content"]}>
                            <h3>Geekach</h3>
                            <a href="https://geekach.com.ua/"
                               className={[styles["btn"], styles["btn-primary"]].join(" ")}
                               target="blank" rel="noopener">go to</a>
                        </div>
                    </div>

                    <div className={styles["img-container"]}>
                        <img decoding="async" src="/img/igromag.png" alt="Igromag"/>
                        <div className={styles["img-content"]}>
                            <h3>Igromag</h3>
                            <a href="https://desktopgames.com.ua/ua/?gad_source=1&gclid=Cj0KCQjw0ruyBhDuARIsANSZ3woOFrE8gq5kZqqjmzpS1z_U28osWLNXGpIfcE4uzidXFOj1ebgk-_IaAmQQEALw_wcB"
                               className={[styles["btn"], styles["btn-primary"]].join(" ")} target="blank" rel="noopener">go to</a>
                        </div>
                    </div>

                    <div className={styles["img-container"]}>
                        <img decoding="async" src="/img/kilogames.png" alt="Kilogames"/>
                        <div className={styles["img-content"]}>
                            <h3>Kilogames</h3>
                            <a href="https://kilogames.com.ua/"
                               className={[styles["btn"], styles["btn-primary"]].join(" ")}
                               target="blank" rel="noopener">go to</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="games-menu" style={gameSectionStyles}>
                <div className={styles["games-header"]}>
                    <h2>List of games</h2>
                    <div className={styles["search-container"]}>
                        <input type="text" id={styles["game-search"]} placeholder="Search for a game..."
                               value={title} onChange={(e) => setTitle(e.target.value)} />
                        <button onClick={fetchGames}>Search</button>
                    </div>
                </div>
                <VerticalList games={games} />
            </section>
        </main>
    )
}

export default Games;