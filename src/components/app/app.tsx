import '../../index.css';
import '../../assets/fonts/fonts.module.css'
import styles from './app.module.css';
import {Header} from "../header/header";
import {Lead} from "../lead/lead";
import {Support} from "../support/support"

const App = () => {
    return (
        <div className={styles.app}>
            <Header />

            <Lead />

            <Support />
        </div>
    )
}

export default App;