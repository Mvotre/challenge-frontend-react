import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';

import Hero from "../../components/home/Hero";

import styles from "./Favorites.module.scss";
import backIcon from "../../assets/images/return.svg";

function Favorites() {
    let navigate = useNavigate();
    let favoriteList = JSON.parse(sessionStorage.getItem("favorites"))
    let [favoriteState, setFavoriteState] = useState(favoriteList)

    const calcPages = (total) => {
        return Math.ceil(total / 8);
    }

    const returnPage = () => {
      navigate('/');
    }

    
    function PaginatedItems({ itemsPerPage }) {
      const [heroes, setHeroes] = useState([]);
      const [itemOffset, setItemOffset] = useState(0);
      const [totalCount, setTotalCount] = useState(0);
      
      const removeFavorite = (e) => {
        const endOffset = itemOffset + itemsPerPage;
        let filteredList = favoriteList.filter( hero => e.id !== hero.id)
        favoriteList = filteredList;
        sessionStorage.setItem("favorites", JSON.stringify(favoriteList))
        setHeroes(favoriteList.slice(itemOffset, endOffset))
      }

      useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setHeroes(favoriteList.slice(itemOffset, endOffset));
        setTotalCount(Math.ceil(favoriteList.length / itemsPerPage));
        sessionStorage.setItem("favorites", JSON.stringify(favoriteList))
      }, [itemOffset, itemsPerPage]);
    
       
        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
          setItemOffset(event.selected * itemsPerPage);
        };
     
       return (
         <>
            <div  className={styles.heroContainer2}>
              {  heroes.map( hero => {
                return <Hero key={hero.id} hero={hero} favoriteHero={true} removeFavorite={removeFavorite}/>
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
        <main className={styles.container}>
          <button 
            className={styles.backButton}
            onClick={ returnPage }
          > 
            Return to previous page 
            <img src={backIcon} /> 
          </button> 
          <p className={styles.title}> Here is your own strike team choice </p>
            <p> Favorites </p>
            
            <div>
                <PaginatedItems itemsPerPage={8} />
            </div>
        </main>
    )
}

export default Favorites;