import PropTypes from 'prop-types';
import { IoIosStarOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styles from '../styles/bodyRecomendadoTwo.module.css';

function BodyRecomendadoOne({ data }) {
	return (
		<div className={styles.recomendadoContainer}>
			<img
				className={styles.recomendadoImg}
				src={data[8].image_url}
				alt="recomendado"
			/>

			<div className={styles.recomendadoDetail}>
				<h2 className={styles.recomendadoH2}>{data[8].name}</h2>
				<p className={styles.recomendadoP}>{data[8].description}</p>
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

BodyRecomendadoOne.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.string.isRequired,
		image_url: PropTypes.string.isRequired,
	}).isRequired,
};

export default BodyRecomendadoOne;
