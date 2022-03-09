import styles from "./Header.module.scss";
import { useNavigate } from 'react-router-dom';
import icon from "../../assets/images/btnIcon.svg";

function HeaderButton(){
    let navigate = useNavigate();
    
    const favorites = () => {
        navigate("/favorites");
    }

    return (
        <button 
            className={styles.button} 
            onClick={ favorites }
        > 
            Your team
            <img src={icon} /> 
        </button>
    )
}

export default HeaderButton;