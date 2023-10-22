import React from 'react'
import styles from '../styles/BodyRecomendado.module.css'
import { IoIosStarOutline } from "react-icons/io";
import recomendado from '../img/recomendado.png'

function BodyRecomendado() {
  return (
    <div className={styles.recomendadoContainer}>
      <img
        className={styles.recomendadoImg}
        src={recomendado}
        alt="recomendado"
      />

      <div className={styles.recomendadoDetail}>
        <h2 className={styles.recomendadoH2}>Lorem Ipsum</h2>
        <p className={styles.recomendadoP}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
          vestibulum morbi blandit cursus. Enim sed faucibus turpis in eu mi
          bibendum.
        </p>
        <div>
          <IoIosStarOutline />
          <IoIosStarOutline />
          <IoIosStarOutline />
          <IoIosStarOutline />
          <IoIosStarOutline />
        </div>
      <button className={styles.recomendadoButton}>Recomendado</button>
      </div>

    </div>
  );
}

export default BodyRecomendado
