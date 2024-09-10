import styles from "../about/about.module.css";
import avatar from "../../assets/images/about/avatar.jpg";
import spotify from "../../assets/images/about/spotify.svg";

export const quoteAuthor = (props) => {
    return (
        <div className={styles.quoteAuthor}>
            <img className={styles.avatar} src={props.avatar} alt={props.name}/>
            <p className={styles.name}>{props.name},</p>

            <img className={styles.spotifyIcon} src={props.platform} alt={props.platform}/>
            <p className={styles.post}>{props.platformPosition}</p>
        </div>
    )
}