import styles from "../css/Game.module.css";
import {useEffect, useRef, useState} from "react";
import API from "../API/axiosConfig";
import {useParams} from "react-router-dom";
import CommentList from "../components/CommentList";


const GameView = () => {
    const { gameId } = useParams();
    const [game, setGame] = useState({
        title: "", textAmount: "", gameDuration: "", players: "", age: "", bggLink: "", youTubeLink: "", review: "",
        mainSection: "", imageFile: "", releaseYear: ""
    });
    const imgRef = useRef(null);

    useEffect(() => {
        fetchGame();
    }, [gameId]);

    const fetchGame = () => {
        API.get("/game/" + gameId)
            .then(response => {
                const data = response.data;
                console.log(data);
                setGame(data);
            })
            .catch(error => console.log(error));
    }

    const handleMouseMove = (e) => {
        if (!imgRef.current) return;

        const rect = imgRef.current.getBoundingClientRect();

        const x = e.pageX - rect.left;
        const y = e.pageY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const moveX = ((centerX - x) / rect.width) * 400;
        const moveY = ((centerY - y) / rect.height) * 400;

        imgRef.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(2)`;
    };

    const handleMouseLeave = (e) => {
        if (!imgRef.current) return;

        imgRef.current.style.transform = 'translate(0, 0) scale(1)';
    }

    return (
        <main className={styles.main}>
            <section className={[styles["game-description"], "container"].join(" ")}>
                <div className={styles["game-info"]}>
                    <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={styles["game-image"]}>
                        {game.imageFile &&
                            <img ref={imgRef} src={`data:image/jpeg;base64,${game.imageFile.toString()}`}
                                 alt={"Image of " + game.title}/>}
                    </div>
                    <table className={styles["game-details"]}>
                        <tbody>
                        <tr>
                            <th>Amount of text:</th>
                            <td>{game.textAmount}</td>
                        </tr>
                        <tr>
                            <th>Game duration:</th>
                            <td>{game.gameDuration}</td>
                        </tr>
                        <tr>
                            <th>Players:</th>
                            <td>{game.players}</td>
                        </tr>
                        <tr>
                            <th>Age:</th>
                            <td>{game.age}</td>
                        </tr>
                        <tr>
                            <th>Link to BGG:</th>
                            <td><a href={game.bggLink} target="_blank">More
                                info</a></td>
                        </tr>
                        <tr>
                            <th>Main section:</th>
                            <td>{game.mainSection}</td>
                        </tr>
                        <tr>
                            <th>Rules:</th>
                            <td>
                                <a href={`http://localhost:8080/game/${gameId}/rules`}>Open</a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className={styles["section-divider"]}></div>

                <div className={styles["game-review"]}>
                    <h2>Review</h2>
                    <p>{game.review}</p>
                </div>

                <div className={styles["section-divider"]}></div>

                <div className={styles["game-video"]}>
                    <h2>Video review</h2>
                    <iframe width="760" height="435" src={game.youTubeLink} frameBorder="0"
                            allowFullScreen></iframe>
                </div>

                <div className={styles["section-divider"]}></div>

                <CommentList gameId={gameId} />
            </section>
        </main>
    )
}

export default GameView;