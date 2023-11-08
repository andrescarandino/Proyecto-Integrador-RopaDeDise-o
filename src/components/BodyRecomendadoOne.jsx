import { Link } from 'react-router-dom';
import { IoIosStarOutline } from 'react-icons/io';
import PropTypes from 'prop-types';
import styles from '../styles/bodyRecomendadoOne.module.css';

function BodyRecomendadoOne({ data }) {
	return (
		<div className={styles.recomendadoContainer}>
			<img
				className={styles.recomendadoImg}
				src={data[9].image_url}
				alt="recomendado"
			/>

			<div className={styles.recomendadoDetail}>
				<h2 className={styles.recomendadoH2}>{data[9].name}</h2>
				<p className={styles.recomendadoP}>{data[9].description}</p>
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
						to={`product/${data[9].id}`}
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
