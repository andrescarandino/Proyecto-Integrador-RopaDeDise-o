import React from 'react'
import styles from '../styles/bodySearch.module.css'
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
import img4 from '../img/img4.png'

function BodySearch() {
  return (
    <div>
      <div className={styles.bodySearch}>
        <div className={styles.divSearch}>
          <img src={img1} alt="" />
          <button className={styles.searchButton} >ver</button>
        </div>
        <div className={styles.divSearch} >
          <img src={img2} alt="" />
          <button className={styles.searchButton}>ver</button>
        </div>
     

      
        <div className={styles.divSearch}>
          <img src={img3} alt="" />
          <button className={styles.searchButton}>ver</button>
        </div>
        <div className={styles.divSearch}>
          <img src={img4} alt="" />
          <button className={styles.searchButton}>ver</button>
        </div>
      </div>
    </div>
  );
}

export default BodySearch
