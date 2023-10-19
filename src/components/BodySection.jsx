import React from 'react'
import styles from '../styles/bodySection.module.css'
import elegante from '../img/elegante.png'
import casual from '../img/casual.png'
import creativo from '../img/creativo.png'
import dramatico from '../img/dramatico.png'
import sexy from '../img/sexy.png'
import romantico from '../img/romantico.png'
import tradicional from '../img/tradicional.png'
import vintage from '../img/vintage.png'

function BodySection() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionFila}>
        <div className={styles.sectionCard}>
          <img src={elegante} alt="elegante" />
          <button className={styles.sectionButton}>Elegante</button>
        </div>
        <div className={styles.sectionCard}>
          <img src={sexy} alt="sexy" />
          <button className={styles.sectionButton}>Sexy</button>
        </div>
      </div>

      <div className={styles.sectionFila}>
        <div className={styles.sectionCard}>
          <img src={casual} alt="casual" />
          <button className={styles.sectionButton}>Casual</button>
        </div>
        <div className={styles.sectionCard}>
          <img src={romantico} alt="romantico" />
          <button className={styles.sectionButton}>Romantico</button>
        </div>
      </div>

      <div className={styles.sectionFila}>
        <div className={styles.sectionCard}>
          <img src={creativo} alt="creativo" />
          <button className={styles.sectionButton}>Creativo</button>
        </div>
        <div className={styles.sectionCard}>
          <img src={tradicional} alt="tradicional" />
          <button className={styles.sectionButton}>Tradicional</button>
        </div>
      </div>

      <div className={styles.sectionFila}>
        <div className={styles.sectionCard}>
          <img src={dramatico} alt="dramatico" />
          <button className={styles.sectionButton}>Dramatico</button>
        </div>
        <div className={styles.sectionCard}>
          <img src={vintage} alt="vintage" />
          <button className={styles.sectionButton}>Vintage</button>
        </div>
      </div>
    </div>
  );
}

export default BodySection
