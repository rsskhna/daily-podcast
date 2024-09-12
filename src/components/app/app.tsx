import '../../index.css';
import '../../assets/fonts/fonts.module.css'
import styles from './app.module.css';
import {Header} from "../header/header";
import {Lead} from "../lead/lead";
import {Support} from "../support/support"
import {About} from "../about/about";
import {Reviews} from "../reviews/reviews";
import {Membership} from "../membership/membership";
import {Episodes} from "../episodes/episodes";

const App = () => {
    return (
        <div className={styles.app}>
            <Header />

            <Lead />

            <Support />

            <About />

            <Reviews />

            <Membership />

            <Episodes />
        </div>
    )
}

export default App;