import styles from './lead.module.css'
import {gallery} from '../../services/data/lead-gallery'

const leadGallery = gallery.map(
    image =>
        <li>
            <img src={image.src} alt={image.alt} key={image.key}/>
        </li>
)

export const Lead = () => {
    return (
        <section className={styles.lead}>
            <div className={styles.imageStars}></div>
            <div className={styles.imageSpring}></div>

            <h1 className={styles.title}>Your Daily <span className={styles.textRed}>Podcast</span></h1>
            <p className={styles.subtitle}>We cover all kinds of categories and a weekly special guest.</p>

            <a className={styles.button} href={'#'}>Subscribe</a>

            <ul className={styles.gallery}>
                {leadGallery}
            </ul>
        </section>
    )
}