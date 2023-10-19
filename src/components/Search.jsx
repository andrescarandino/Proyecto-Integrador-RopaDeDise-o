import React from 'react'
import { IoMdSearch } from "react-icons/io";
import styles from '../styles/search.module.css'

function Search() {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchDiv}>
        <input type="text" placeholder='buscar' className={styles.searchInput}/>
        <button className={styles.searchButton}>
          <IoMdSearch className={styles.searchIcon}/>
        </button>
      </div>
    </div>
  );
}

export default Search
