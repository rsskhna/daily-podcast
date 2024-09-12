import styles from './episodes.module.css'
import {SectionTitle} from "../sectionTitle/sectionTitle";
import {episodesInfo} from "../../services/data/episodes";

const episode = episodesInfo.map(
    (info, index) => {
        const tags = info.tags.map(
            (tag, index) => {
                return (
                    <li className={styles.tagsListItem} key={index}>{tag}</li>
                )
            }
        )

        const hosts = info.hostedBy.map(
            (host, index) => {
                return (
                    <li className={styles.hostsListItem} key={index}>
                        <img className={styles.hostImg} src={host} alt='avatar'/>
                    </li>
                )
            }
        )

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
                    <ul className={styles.tagsList}>
                        {tags}
                    </ul>

                    <div className={styles.hostsArea}>
                        <p className={styles.hosts}>Hosted by:</p>
                        <ul className={styles.hostsList}>
                            {hosts}
                        </ul>
                    </div>
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