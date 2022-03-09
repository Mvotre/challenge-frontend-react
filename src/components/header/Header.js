import styles from "./Header.module.scss";
import HeaderButton from "./HeaderButton";
import Logo from "./Logo";

function Header(){
    return (
        <nav className={styles.navbar}>
            <Logo />
            <HeaderButton />
        </nav>
    )
}

export default Header;