import styles from './header.module.css'
import logo from '../../assets/images/logo.png'

export const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt='PodOfCast'/>

            <nav className={styles.navigation}>
                <li>
                    <a className={styles.navigationLink} href={'#'}>Episodes</a>
                </li>

                <li>
                    <a className={styles.navigationLink} href={'#'}>About</a>
                </li>

                <li>
                    <a className={styles.navigationLink} href={'#'}>
                        More
                        <div className={styles.arrowDown}/>
                    </a>
                </li>
            </nav>

            <ul className={styles.buttonsArea}>
                <li>
                    <a className={styles.button} href={'#'}>Recent episodes</a>
                </li>
                <li>
                    <a className={`${styles.button} ${styles.buttonBlack}`} href={'#'}>Subscribe</a>
                </li>
            </ul>
        </header>
    )
}