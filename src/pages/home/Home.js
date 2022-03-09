import { useState, useEffect } from "react";
import Hero from "../../components/home/Hero";
import ReactPaginate from 'react-paginate';

import { tstamp, token, hash } from '../../helpers/apiKeys';
import styles from "./Home.module.scss";
import icon from "../../assets/images/search_24px.svg";

function Home () {
  const limit = 8; // Fixed value to control how much heros return per page
  let favoriteList = JSON.parse(sessionStorage.getItem("favorites")) || []
  let [apiState, setApiState] = useState('http://gateway.marvel.com/v1/public/characters?limit=');
  let searchInput = '';
  const [totalResults, setTotalResults] = useState(0)
    
  const calcPages = (total) => {
    return Math.ceil(total / limit);
  }

  const saveFavorite = (e) => {
    let duplicated = favoriteList.some( el => el.id === e.id);
    if( !duplicated ){
      favoriteList.push(e)
    }

    sessionStorage.setItem("favorites", JSON.stringify(favoriteList))
  }

  const removeFavorite = (e) => {
    let filteredList = favoriteList.filter( hero => e.id !== hero.id)
    favoriteList = filteredList;
    sessionStorage.setItem("favorites", JSON.stringify(favoriteList))
  }

  const setValue = (e) => {
    searchInput = e.target.value
  }

  const searchHero = () => {
    if(searchInput.trim().length >= 1) {
      setApiState(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchInput.trim()}&limit=`)
    } else {
      setApiState(`http://gateway.marvel.com/v1/public/characters?limit=`)
    }

  }
 
 function PaginatedItems({ itemsPerPage }) {
    const [heroes, setHeroes] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const [apiError, setApiError] = useState(null);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(async () => {
      const response = await fetch(
        `${apiState}${limit}&offset=${itemOffset}&ts=${tstamp}&apikey=${token}&hash=${hash}` 
      );
      const responseJson = await response.json();
      if (!response.ok) {
        setApiError(responseJson.message);
        setHeroes([]);
        setTotalCount(0);
        return;
      }
      setHeroes(responseJson.data.results);
      setTotalResults(responseJson.data.total)
      setTotalCount(calcPages(responseJson.data.total));
    }, [itemOffset, itemsPerPage]);
   
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      setItemOffset(event.selected * limit);
    };
 
   return (
     <>
        <div  className={styles.heroContainer2}>
          {  heroes.map( hero => {
            return <Hero key={hero.id} saveFavorite={saveFavorite} hero={hero} removeFavorite={removeFavorite}/>
          })} 
        </div>
        
       <ReactPaginate
         breakLabel="..."
         nextLabel="next"
         onPageChange={handlePageClick}
         pageRangeDisplayed={1}
         pageCount={totalCount}
         pageClassName={styles.singlePage}
         previousClassName={styles.controls}
         nextClassName={styles.controls}
         containerClassName={styles.mainPagination}
         activeClassName={styles.pageActive}
         disabledClassName={styles.pageDisabled } 
         previousLabel="prev"
         renderOnZeroPageCount={null}
       />
     </>
   );
 }

  return (
    <main className={styles.main}>
      <div className={styles.searchContainer}>
        <div className={styles.searchContainer__internal}>
          <h3> Explore the most powerful characters in Marvel </h3>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Type in a character name" onChange={setValue}/> 
            <button onClick={searchHero}> <img src={icon} /> </button>
          </div>
        </div>
      </div>

      <div className={styles.heroContainer}>
        <div className={styles.heroTitle}>
          <h3> Characters </h3>
          <h4> {totalResults} results </h4>
        </div>
      </div>
      
      <PaginatedItems itemsPerPage={8} />
    </main>
  )
}

export default Home