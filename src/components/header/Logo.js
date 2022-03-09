import styles from "./Header.module.scss";

import logo from '../../assets/images/logo.svg'

function Logo(){
    return (
        <div className={styles.logo}>
            <img src={logo}></img>
            <p> Marvel Strike Team </p>
        </div>
    )
}

export default Logo;