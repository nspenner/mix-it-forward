import styles from "./page.module.css";
import Sequencer from "../_components/sequencer";

export default function Create() {
    return(
        <main className={styles.main}>
            <Sequencer/>
        </main>
    )
}