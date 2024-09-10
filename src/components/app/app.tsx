import '../../index.css';
import '../../assets/fonts/fonts.module.css'
import styles from './app.module.css';
import {Header} from "../header/header";
import {Lead} from "../lead/lead";
import {Support} from "../support/support"
import {About} from "../about/about";
import {Reviews} from "../reviews/reviews";

const App = () => {
    return (
        <div className={styles.app}>
            <Header />

            <Lead />

            <Support />

            <About />

            <Reviews />
        </div>
    )
}

export default App;