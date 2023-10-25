import { IoIosStarOutline } from 'react-icons/io';
import recomendado2 from '../img/recomendado2.png';
import styles from '../styles/bodyRecomendadoTwo.module.css';

function BodyRecomendadoOne() {
	return (
		<div className={styles.recomendadoContainer}>
			<img
				className={styles.recomendadoImg}
				src={recomendado2}
				alt="recomendado"
			/>

			<div className={styles.recomendadoDetail}>
				<h2 className={styles.recomendadoH2}>Lorem Ipsum</h2>
				<p className={styles.recomendadoP}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Aliquam vestibulum morbi blandit cursus. Enim sed
					faucibus turpis in eu mi bibendum.
				</p>
				<div>
					<IoIosStarOutline />
					<IoIosStarOutline />
					<IoIosStarOutline />
					<IoIosStarOutline />
					<IoIosStarOutline />
				</div>
				<button type="button" className={styles.recomendadoButton}>
					Recomendado
				</button>
			</div>
		</div>
	);
}

export default BodyRecomendadoOne;
