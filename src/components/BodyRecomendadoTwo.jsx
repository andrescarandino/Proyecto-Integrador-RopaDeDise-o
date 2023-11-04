import { Link } from 'react-router-dom';
import { IoIosStarOutline } from 'react-icons/io';
import styles from '../styles/bodyRecomendadoTwo.module.css';

// eslint-disable-next-line react/prop-types
function BodyRecomendadoOne({ data }) {
	return (
		<div className={styles.recomendadoContainer}>
			<img
				className={styles.recomendadoImg}
				// eslint-disable-next-line react/prop-types
				src={data[8].image_url}
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
					<Link
						className={styles.recomendadoLink}
						to={`product/${data[8].id}`}
					>
						Recomendado
					</Link>
				</button>
			</div>
		</div>
	);
}

export default BodyRecomendadoOne;
