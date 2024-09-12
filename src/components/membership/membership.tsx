import styles from './membership.module.css'
import {SectionTitle} from "../sectionTitle/sectionTitle";
import {cards} from "../../services/data/membership";

const membershipBenefits = cards.map(
    (card, index) => {
        return (
            <li className={styles.cardListItem} key={index}>
                <img className={styles.cardImage} src={card.image} alt='scribble'/>

                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.text}</p>
            </li>
        )
    }
)

export const Membership = () => {
    return (
        <section className={styles.membership}>
            <SectionTitle
                title={'Membership benefits'}
                subtitle={'Become our sponsor and get all benefits'}
            />

            <ul className={styles.cardList}>
                {membershipBenefits}
            </ul>

            <a className={styles.button} href={'#'}>See pricing</a>

            <div className={`${styles.springTop} ${styles.absoluteElems}`}></div>
            <div className={`${styles.springBottom} ${styles.absoluteElems}`}></div>
        </section>
    )
}