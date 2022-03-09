import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import styles from "./HeroDetails.module.scss";

import Comics from "../../components/details/Comics";

import backIcon from "../../assets/images/return.svg";

function HeroDetails() {
  let navigate = useNavigate();
  const [totalResults, setTotalResults] = useState(0)

  let selectedHero = JSON.parse(sessionStorage.getItem("selected"));
  let previousUrl = sessionStorage.getItem("detailsPath");
  const [heroComics, setHeroComics] = useState([]);

  const returnDescription = () => {
      if(!selectedHero.description){
          return "No description found! :("
      }
      return selectedHero.description
  }

  const returnPage = () => {
    navigate(previousUrl);
  }

  var md5 = require('md5');

  let privateTkn = 'c4da79810330b4965b68211bab87d4a37709b9fe';
  let tstamp = Date.now();
  let token = 'e49fdec1f141a93359f8dfb62f67c229';

  let hash = md5(tstamp + privateTkn + token);

  useEffect(() => {
    fetch( `https://gateway.marvel.com/v1/public/characters/${selectedHero.id}/comics?limit=5&ts=${tstamp}&apikey=${token}&hash=${hash}`
      )
    .then( response => response.json() )
    .then( response => {
        console.log(response.data)
        let totalComics = response.data.total > 5 ?  5 : response.data.total;
        setTotalResults(totalComics)
        setHeroComics(response.data.results)
    } )
}, [])



  return (

    <main className={styles.container}>
      <button 
        className={styles.backButton}
        onClick={ returnPage }
      > 
        Return to previous page 
        <img src={backIcon} /> 
      </button> 
      <p className={styles.title}> Discover all comics this character took part in</p>
      <div className={styles.heroBox}>
          <img src={selectedHero.thumbnail.path + "." + selectedHero.thumbnail.extension}></img>
          <div>
              <h3> {selectedHero.name} </h3>
              <p> { returnDescription() } </p>
          </div>
      </div>
      <div>
        <div className={styles.comicsList}>
          <h3> Comics </h3>
          <p> {totalResults} results </p>
        </div>
        <div>
          {heroComics.map( comic => {
            return <Comics key={comic.id} comic={comic} />
          })} 
        </div>
      </div>
    </main>
  )
}

export default HeroDetails;