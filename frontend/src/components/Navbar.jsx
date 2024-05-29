import styles from "../css/Navbar.module.css"
import {Link} from "react-router-dom";
import {useAuth} from "./AuthProvider";

const Navbar = () => {
    const { user, logOut } = useAuth();

    return (
        <nav className={styles.navbar}>
            <div className={[styles["navbar-container"], "container"].join(" ")}>
                <h1 className={styles.logo}>Table Thought</h1>
                <ul className={styles["menu-items"]}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/games">Board Games</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    {user && user.role === "ROLE_ADMIN" &&
                        <li><Link to="/games/create">Add Game</Link></li>
                    }
                </ul>
                <div className={styles["auth-buttons"]}>
                    {user ?
                        <Link to="/auth/log-in" onClick={logOut}>Log out</Link> :
                        <>
                            <Link to="/auth/log-in">Log In</Link>
                            <Link to="/auth/sign-up">Sign Up</Link>
                        </>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
