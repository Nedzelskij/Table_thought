import styles from "../css/AboutUs.module.css";

const showcaseAreaStyles = {
    background: "linear-gradient(rgba(240, 240, 240, 0.144), rgba(255, 255, 255, 0.336)), url('/img/header_general_information.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
};

const AboutUs = () => {

    return (
        <main className={styles.main}>
            <section id={styles["showcase"]} style={showcaseAreaStyles}>
                <div className={styles["showcase-container"]}>
                    <h1 className={styles["main-title"]}>Some information about the Table thought</h1>
                </div>
            </section>
            <section className={styles["about-site"]}>
                <h2>About Our Site</h2>
                <p>
                    Welcome to the website "Table Thoughts"! This is the place where you can find any information you
                    are interested in
                    about board games, and even more. All reviews appear on the site a few days after the release of the
                    game, and are the
                    painstaking work of more than six independent experts who are completely honest in their reviews.
                    You can also contact
                    the BGG website for additional information using the links attached to each review if you do not
                    find what you are
                    looking for. The rules for the game can be downloaded from the same place.<br/><br/>

                    I would also like to note that we are a young organization and would be very grateful for your
                    support. Tell your friends
                    about us, leave comments, and enjoy our reviews!
                </p>
            </section>

            <section className={styles["developer-info"]}>
                <h2>Developer Information</h2>
                <table>
                    <tr>
                        <th>Name:</th>
                        <td>Illa</td>
                    </tr>
                    <tr>
                        <th>Surname:</th>
                        <td>Nedzelsky</td>
                    </tr>
                    <tr>
                        <th>Age:</th>
                        <td>19</td>
                    </tr>
                    <tr>
                        <th>Country:</th>
                        <td>Ukraine</td>
                    </tr>
                    <tr>
                        <th>Status:</th>
                        <td>Student</td>
                    </tr>
                    <tr>
                        <th>University:</th>
                        <td>Kyiv National Institute n. Ihor Sikorskyi</td>
                    </tr>
                    <tr>
                        <th>Course:</th>
                        <td>Applied Mathematics</td>
                    </tr>
                    <tr>
                        <th>Year of Study:</th>
                        <td>Third Year</td>
                    </tr>
                    <tr>
                        <th>Hobby:</th>
                        <td>Board Games</td>
                    </tr>
                </table>
            </section>

            <section className={styles["animated-image"]}>
                <h2>Enjoy Our Animated Image!</h2>
                <img src="/gif/gif_general_information.gif" alt="Animated Image"/>
            </section>
        </main>
    )
};

export default AboutUs;