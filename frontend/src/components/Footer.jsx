import styles from "../css/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>&copy; Table thought</p>
            <p>Contact us:</p>
            <p>Phone: +0983436132</p>
            <p>Email: info@gmail.com</p>
            <p>Operator: Brian Aarons </p>
        </div>
    )
}

export default Footer;