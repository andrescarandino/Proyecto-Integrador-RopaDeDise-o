import React from 'react'
import styles from '../styles/header.module.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className={styles.headerFixed}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.headerLink}>
          <h1>carolki.</h1>
        </Link>
        <div className={styles.headerLogin}>
          <button className={styles.headerButton}>crear cuenta</button>
          <div className={styles.headerLine}></div>
          <button className={styles.headerButton}>iniciar sesión</button>
        </div>
      </div>
      <hr className={styles.headerHr}/>
    </div>
  );
}

export default Header
