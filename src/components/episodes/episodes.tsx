import styles from './episodes.module.css'
import {SectionTitle} from "../sectionTitle/sectionTitle";
import {episodesInfo} from "../../services/data/episodes";

const episode = episodesInfo.map(
    (info, index) => {
        return (
            <li className={styles.cardsListItem} key={index}>
                <div className={styles.imgDescriptionArea}>
                    <img className={styles.image} src={info.img} alt='podcast cover'/>

                    <div className={styles.descriptionArea}>
                        <p className={styles.episodeNumber}>Eps. {info.number}</p>
                        <h3 className={styles.episodeTitle}>{info.name}</h3>

                        <div className={styles.line}></div>

                        <p className={styles.episodeDescription}>{info.description}</p>
                    </div>
                </div>

                <div className={styles.tagsHostsArea}>
                    <ul className={styles.tagsList}></ul>

                    <p className={styles.hosts}>Hosted by:</p>
                    <ul className={styles.hostsList}></ul>
                </div>
            </li>
        )
    }
)

export const Episodes = () => {
    return (
        <section className={styles.episodes}>
            <SectionTitle title={'Recent Episodes'} subtitle={'Available on your favorite platform'}/>

            <ul className={styles.cardsList}>
                {episode}
            </ul>

            <a className={styles.button}>Browse all episodes</a>
        </section>
    )
}