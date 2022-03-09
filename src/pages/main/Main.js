import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import styles from "./Main.module.scss";

function Main () {
    
    return (
        <div className={styles.structure}>
            <header>
                <Header />
            </header>
            <main className={styles.container}>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Main