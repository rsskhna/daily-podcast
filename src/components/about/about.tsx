import styles from './about.module.css'
import {aboutCard} from "../../services/data/about";
import avatar from '../../assets/images/about/avatar.jpg'
import spotify from '../../assets/images/about/spotify.svg'

const cardComponent = aboutCard.map(
    (cardInfo, index) => {
        return (
            <li className={styles.cardListItem} key={index}>
                <img className={styles.cardImage} src={cardInfo.url} alt={cardInfo.alt}/>
                <p className={styles.cardText}>{cardInfo.text}</p>
            </li>
        )
    }
)

export const About = () => {
    return (
        <section className={styles.about}>
            <h2 className={styles.title}>Talk. Listen. Get inspired by every minute of it.</h2>

            <ul className={styles.cardList}>
                {cardComponent}
            </ul>

            <div className={styles.quoteArea}>
                <p className={styles.quotationMark}>“</p>

                <p className={styles.quote}>One of the best daily podcasts that<br/> covers every topic on Spotify.</p>
                <div className={styles.quoteAuthor}>
                    <img className={styles.avatar} src={avatar} alt='John Smith'/>
                    <p className={styles.name}>John Smith,</p>

                    <img className={styles.spotifyIcon} src={spotify} alt='Spotify'/>
                    <p className={styles.post}>Social Community Manager</p>
                </div>
            </div>
        </section>
    )
}