import styles from "../css/CommentList.module.css";
import {useEffect, useState} from "react";
import API from "../API/axiosConfig";
import {useAuth} from "./AuthProvider";

const CommentList = ({ gameId }) => {
    const [comments, setComments] = useState([]);
    const [currentComment, setCurrentComment] = useState("");
    const { user } = useAuth();

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = () => {
        API.get("/comment?game-id=" + gameId)
            .then(response => {
                const data = response.data;
                setComments(data);
            })
            .catch(error => console.log(error));
    }

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append("gameId", gameId);
        formData.append("content", currentComment);

        API.post("/comment", formData)
            .then(response => {
                const data = response.data;
                setComments([{id: data.id, username: data.username, content: data.content}, ...comments])
            })
            .catch(error => console.log(error));
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <div className={styles.comments}>
            <div className={styles.comments__title}>Comments</div>
            {user &&
                <input type="text" value={currentComment} onChange={e => setCurrentComment(e.target.value)}
                                   onKeyDown={handleKeyDown} placeholder="Type your comment" />
            }
            <div className={styles.comments__list}>
                {comments.map((comment) => (
                    <div key={comment.id} className={styles.item}>
                        <div className={styles.item__username}>{comment.username}</div>
                        <div className={styles.item__content}>{comment.content}</div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default CommentList;