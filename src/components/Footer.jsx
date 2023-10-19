import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../styles/footer.module.css'
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io";


function Footer() {
  return (
    <div>
      <div className={styles.footerContainer}>
        <Link to="/" className={styles.footerLink}>
          <h1>carolki.</h1>
        </Link>
        <h3 className={styles.footerH3}>Copyright 2023</h3>
        <div>
          <IoLogoInstagram className={styles.footerIcons}/>
          <IoLogoFacebook className={styles.footerIcons} />
        </div>
      </div>
    </div>
  );
}

export default Footer
