import {support} from "../../services/data/support";
import styles from './support.module.css'

const supportImages = support.map(
    (image, index) =>
        <li className={styles.supportListItem} key={index}>
            <img className={image.className} src={image.src} alt={image.alt} />
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