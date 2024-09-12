import styles from '../sectionTitle/sectionTitle.module.css'

type TSectionTitleProps = {
    title: string;
    subtitle: string;
}

export const SectionTitle = (props: TSectionTitleProps) => {
    return (
        <>
            <h2 className={styles.title}>{props.title}</h2>

            <p className={styles.subtitle}>{props.subtitle}</p>
        </>
    )
}