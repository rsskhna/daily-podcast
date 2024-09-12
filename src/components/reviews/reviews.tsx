import styles from './reviews.module.css'
import {reviewInfo} from "../../services/data/reviews";
import {SectionTitle} from "../sectionTitle/sectionTitle";
import {Review} from "../review/review";


const reviewCards = reviewInfo.map(
    (info, index) => {
        return (
            <li key={index}>
                <Review
                    quoteText={info.text}
                    avatarUrl={info.avatar}
                    name={info.name}
                    platformUrl={info.platformUrl}
                    platformName={info.platformName}
                    postOrPlatform={info.platformName}
                />
            </li>
        )
    }
)

export const Reviews = () => {
    return (
        <section className={styles.reviews}>
            <SectionTitle
                title='What our listeners say'
                subtitle='Their experience throughout every platform'
            />

            <ul className={styles.reviewList}>
                {reviewCards}
            </ul>

            <div className={styles.buttonsArea}>
                <button className={`${styles.button} ${styles.buttonLeft}`}></button>
                <button className={`${styles.button} ${styles.buttonRight}`}></button>
            </div>
        </section>
    )
}