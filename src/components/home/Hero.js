import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import { helpers } from '../../helpers/helpers';

import favorite from '../../assets/images/favorite.svg'

import styles from './Hero.module.scss';

function Hero( {hero, saveFavorite, removeFavorite, favoriteHero}){
    let navigate = useNavigate();
    let params = useLocation();
    let [favorited, setFavorited] = useState(false);
    let favoriteList = JSON.parse(sessionStorage.getItem("favorites"))

    let heroDescription = helpers.cutDescription(hero.description, 100)
    
    useEffect(() => {
        if(favoriteList){
            favoriteList.map( favHero => {
                if (favHero.id === hero.id) {
                    setFavorited(true)
                }
            })
        }
    }, []);

    const saveData = () => {
        let heroDetails = {
            name: hero.name,
            thumbnail: { 
                path: hero.thumbnail.path, 
                extension: hero.thumbnail.extension},
            description: hero.description,
            id: hero.id,
        }   
        sessionStorage.setItem("selected", JSON.stringify(heroDetails));

        sessionStorage.setItem("detailsPath", params.pathname )
        navigate("/details");
    }

    const setFavorite = (e) => {
        e.stopPropagation()
        let heroDetails = {
            name: hero.name,
            thumbnail: { 
                path: hero.thumbnail.path, 
                extension: hero.thumbnail.extension},
            description: hero.description,
            id: hero.id,
        }   

        if(favorited){
            setFavorited(false)
            removeFavorite(heroDetails)
        } else {
            setFavorited(true)
            saveFavorite(heroDetails);
        }
    }

    return (
        <div className={styles.main} onClick={ saveData }>
            <img className={styles.img} src={hero.thumbnail.path + "." + hero.thumbnail.extension}></img>
            <div className={styles.textContent}>
                <div className={`${styles.favorite} ${favorited ? styles.favorited : ""}` } onClick={ setFavorite } > 
                    <img src={favorite} /> 
                </div>
                <h3 className={styles.title}> {hero.name} </h3>
                <p> { heroDescription } </p>
            </div>
        </div>
    )
}

export default Hero;