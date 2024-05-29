import React, { useState } from 'react';
import { useAuth } from "../../components/AuthProvider";
import API from "../../API/axiosConfig";
import { useNavigate } from "react-router-dom";
import styles from "../../css/Form.module.css";


const LogIn = () => {
    const { setToken, setUser } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageVisibilityClass, setMessageVisibilityClass] = useState('hidden');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault()
        API.post("/user/log-in", {email: email, password: password})
            .then(response => {
                setToken(response.data.token);
                setUser(response.data.user);
                setMessage("");
                setMessageVisibilityClass("hidden");
                navigate("/")
            })
            .catch(error => {
                setMessage("Invalid email or password");
                setMessageVisibilityClass("visible");
            });
    };

    return (
        <main className={styles.main}>
            <div className="container">
                <form className={styles.form}>
                    <div className={styles.title}>Log in</div>
                    <div className={styles.label}>Email</div>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <div className={styles.label}>Password</div>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className={styles.button} onClick={handleLogin}>Log in</button>
                    <div className={`${styles.message} ${styles[messageVisibilityClass]}`}>{message}</div>
                </form>
            </div>
        </main>
    );
};

export default LogIn;
