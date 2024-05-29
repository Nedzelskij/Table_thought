import React, { useState } from 'react';
import API from "../../API/axiosConfig";
import {useAuth} from "../../components/AuthProvider";
import styles from "../../css/Form.module.css";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const { setToken, setUser } = useAuth();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageVisibilityClass, setMessageVisibilityClass] = useState('hidden');
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault()

        if (email.length === 0 || name.length === 0 || password.length === 0) {
            setMessage("You didn't fill in all the fields");
            setMessageVisibilityClass("visible");
            return;
        }
        else if (password.trim().length < 4) {
            setMessage("Password must be at least 4 characters long");
            setMessageVisibilityClass("visible");
            return;
        }

        API.post("/user/sign-up", {email: email, name: name, password: password})
            .then(response => {
                setToken(response.data.token);
                setUser(response.data.user);
                setMessage("");
                setMessageVisibilityClass("hidden");
                navigate("/")
            })
            .catch(error => {
                setMessage("Invalid data");
                setMessageVisibilityClass("visible");
            });
    };

    return (
        <main className={styles.main}>
            <div className="container">
                <form className={styles.form}>
                    <div className={styles.title}>Sign Up</div>

                    <div className={styles.label}>Email</div>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <div className={styles.label}>Name</div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    <div className={styles.label}>Password</div>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className={styles.button} onClick={handleSignUp}>Sign Up</button>

                    <div className={`${styles.message} ${styles[messageVisibilityClass]}`}>{message}</div>
                </form>
            </div>
        </main>
    );
};

export default SignUp;
