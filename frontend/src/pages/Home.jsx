import React, {useEffect, useState} from 'react';
import styles from "../css/Home.module.css"
import API from "../API/axiosConfig";
import {Link} from "react-router-dom";
import HorizontalList from "../components/HorizontalList";

const showcaseAreaStyles = {
    // height: "50vh",
    background: "linear-gradient(rgba(240, 240, 240, 0.144), rgba(255, 255, 255, 0.336)), url('/img/header_menu.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
}

const Home = () => {
    const [popularGames, setPopularGames] = useState([]);
    const [newGames, setNewGames] = useState([]);

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = () => {
        API.get(`game/popular`)
            .then(response => {
                const data = response.data;
                setPopularGames(data);
            })
            .catch(error => console.error(error));

        API.get(`game/new`)
            .then(response => {
                const data = response.data;
                setNewGames(data);
            })
            .catch(error => console.error(error));
    };

    return (
        <main className={styles.main}>
            <section style={showcaseAreaStyles} className={styles["showcase-area"]} id={styles["showcase"]}>
                <div className={styles["showcase-container"]}>
                    <h1 className={styles["main-title"]}>Play Good Board Games</h1>
                    <p>This is where you can find all the latest board games and reviews.</p>
                    <Link to="/games" className={[styles.btn, styles["btn-primary"]].join(" ")}>Board games</Link>
                </div>
            </section>

            <div className={styles["games-header"]}>
                <h3>Popular Board Games</h3>
            </div>
            <HorizontalList id="popular-games-list" games={popularGames} background={'/img/fone2.jpg'} />

            <div className={styles["games-header"]}>
                <h3>New Board Games</h3>
            </div>
            <HorizontalList id="new-games-list" games={newGames} background={'/img/fone4.jpg'} />
        </main>
    );
};

export default Home;
