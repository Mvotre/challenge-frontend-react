import styles from "./Footer.module.scss";

function Footer(){ 
  return (
    <div className={styles.footer }>
      <p> Data provided by Marvel. &copy; 2022  </p>
      <p> Coded by <span> Marcel </span> </p>
    </div>
  )
}

export default Footer;