import styles from "../css/Game.module.css"
import { useState} from "react";
import API from "../API/axiosConfig";
import { useNavigate } from "react-router-dom";


const GameCreate = () => {
    const [game, setGame] = useState({
        title: "", textAmount: "", gameDuration: "", players: "", age: "", bggLink: "", youTubeLink: "", review: "",
        mainSection: "", rulesFile: null, imageFile: null, releaseYear: ""
    });
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setGame({ ...game, imageFile: file });
            const url = URL.createObjectURL(file);
            setImagePreviewUrl(url);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in game) {
            formData.append(key, game[key]);
        }
        API.post("/game", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }})
            .then(response => navigate("/games/" + response.data))
            .catch(error => console.log(error));
    }

    return (
        <main className={styles.main}>
            <div className={[styles["game-description"], "container"].join(" ")}>
                <div className={styles["game-info"]}>
                    <div className={styles["game-image"]}>
                        {imagePreviewUrl !== null
                            ? <img src={imagePreviewUrl} alt={"Image of " + game.title} />
                            : <input type="file" onChange={handleImageChange} />}
                    </div>
                    <table className={styles["game-details"]}>
                        <tbody>
                        <tr>
                            <th>Title:</th>
                            <td>
                                <input type="text" value={game.title}
                                       onChange={(e) => setGame({...game, title: e.target.value})} />
                            </td>
                        </tr>
                        <tr>
                            <th>Amount of text:</th>
                            <td>
                                <input type="text" value={game.textAmount}
                                       onChange={(e) => setGame({...game, textAmount: e.target.value})} />
                            </td>
                        </tr>
                        <tr>
                            <th>Game duration:</th>
                            <td>
                                <input type="text" value={game.gameDuration}
                                       onChange={(e) => setGame({...game, gameDuration: e.target.value})} />
                            </td>
                        </tr>
                        <tr>
                            <th>Players:</th>
                            <td>
                                <input type="text" value={game.players}
                                       onChange={(e) => setGame({...game, players: e.target.value})} />
                            </td>
                        </tr>
                        <tr>
                            <th>Age:</th>
                            <td>
                                <input type="text" value={game.age}
                                       onChange={(e) => setGame({...game, age: e.target.value})} />
                            </td>
                        </tr>
                        <tr>
                            <th>Link to BGG:</th>
                            <td>
                                <input type="text" value={game.bggLink}
                                       onChange={(e) => setGame({...game, bggLink: e.target.value})} />
                            </td>
                        </tr>
                        <tr>
                            <th>Link to YouTube:</th>
                            <td>
                                <input type="text" value={game.youTubeLink}
                                       onChange={(e) => setGame({...game, youTubeLink: e.target.value})} />
                            </td>
                        </tr>
                        <tr>
                            <th>Release Year:</th>
                            <td>
                                <input type="text" value={game.releaseYear}
                                       onChange={(e) => setGame({...game, releaseYear: e.target.value})} />
                            </td>
                        </tr>
                        <tr>
                            <th>Main section:</th>
                            <td>
                                <input type="text" value={game.mainSection}
                                       onChange={(e) => setGame({...game, mainSection: e.target.value})} />
                            </td>
                        </tr>
                        <tr>
                            <th>Rules:</th>
                            <td>
                                <input type="file" onChange={(e) => setGame({ ...game, rulesFile: e.target.files[0] })} />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className={styles["section-divider"]}></div>

                <div className={styles["game-review"]}>
                    <h2>Review</h2>
                    <textarea value={game.review}
                              onChange={(e) => setGame({...game, review: e.target.value})} />
                </div>

                <div className={styles["section-divider"]}></div>

                <div className={styles["game-video"]}>
                    <h2>Video review</h2>
                    <iframe width="760" height="435" src={game.youTubeLink} frameBorder="0"
                            allowFullScreen></iframe>
                </div>

                <div className={styles["section-divider"]}></div>

                <button className={styles.button} onClick={handleSubmit} type="submit">Save</button>
            </div>
        </main>
    )
}

export default GameCreate;