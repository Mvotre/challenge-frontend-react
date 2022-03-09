import { helpers } from '../../helpers/helpers';

import bulletIcon from '../../assets/images/bullet.svg';

import styles from "./Comics.module.scss";

function Comics( {comic }) {
  let comicDescription = helpers.cutDescription(comic.description, 200)
 
  return (
    <div className={styles.main}>
      <img className={styles.img} src={comic.thumbnail.path + "." + comic.thumbnail.extension}></img>
      <div className={styles.textDetails}>

        <h3> { comic.title } </h3>
        <div className={styles.comicInfo}>
          <p> { comic.dates[0].date.split("T")[0] } </p>
          <img src={bulletIcon} />
          <p> { comic.pageCount } pages </p>
          <img src={bulletIcon} />
          <p> U${ comic.prices[0].price } </p>
        </div>
        <p className={styles.description}> { comicDescription } </p>
      </div>
    </div>
  )
}

export default Comics;