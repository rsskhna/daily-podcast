import styles from "./review.module.css";

type TQuoteProps = {
    quoteText: string;
    avatarUrl: string;
    name: string;
    platformUrl: string;
    platformName: string;
    postOrPlatform: string;
}

export const Review = (props: TQuoteProps) => {
    return (
        <div className={styles.reviewArea}>
            <p className={styles.quotationMark}>“</p>

            <p className={styles.review}>{props.quoteText}</p>
            <div className={styles.reviewAuthor}>
                <img className={styles.avatar} src={props.avatarUrl} alt={props.name}/>
                <p className={styles.name}>{props.name},</p>

                <img className={styles.spotifyIcon} src={props.platformUrl} alt={props.platformName}/>
            </div>
        </div>
    )
}