import styles from '../styles/bodySearch.module.css';
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import img4 from '../img/img4.png';

function BodySearch() {
  return (
    <div>
      <div className={styles.bodySearch}>
        <div className={styles.divSearch}>
          <img src={img1} alt="" className={styles.searchImg} />
          <button type="button" className={styles.searchButton}>
            ver
          </button>
        </div>
        <div className={styles.divSearch}>
          <img src={img2} alt="" className={styles.searchImg} />
          <button type="button" className={styles.searchButton}>
            ver
          </button>
        </div>

        <div className={styles.divSearch}>
          <img src={img3} alt="" className={styles.searchImg} />
          <button type="button" className={styles.searchButton}>
            ver
          </button>
        </div>
        <div className={styles.divSearch}>
          <img src={img4} alt="" className={styles.searchImg} />
          <button type="button" className={styles.searchButton}>
            ver
          </button>
        </div>
      </div>
    </div>
  );
}

export default BodySearch;
