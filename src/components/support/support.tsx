import {support} from "../../services/data/support";
import styles from './support.module.css'

const supportImages = support.map(
    image =>
        <li className={styles.supportListItem}>
            <img className={image.className} src={image.src} alt={image.alt} key={image.key}/>
        </li>
)

export const Support = () => {
    return (
        <section className={styles.support}>
            <h2 className={styles.title}>Supported by:</h2>
            <ul className={styles.supportList}>
                {supportImages}
            </ul>
        </section>
    )
}