import PropTypes from 'prop-types';
import { IoIosStarOutline, IoIosStar } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from '../styles/bodyRecomendadoTwo.module.css';

function BodyRecomendadoOne({ data }) {
	const dataNew = data.slice(9, 10);
	const [favActive, setFavActive] = useState(false);
	const handleFav = () => {
		setFavActive(!favActive);
	};
	return (
		<div className={styles.recomendadoContainer}>
			{dataNew &&
				dataNew.map((x) => (
					<>
						<img
							className={styles.recomendadoImg}
							src={x.image_url}
							alt="recomendado"
						/>

						<div className={styles.recomendadoDetail}>
							<h2 className={styles.recomendadoH2}>{x.name}</h2>
							<p className={styles.recomendadoP}>
								{x.description}
							</p>
							{/* <div>
								<IoIosStarOutline />
								<IoIosStarOutline />
								<IoIosStarOutline />
								<IoIosStarOutline />
								<IoIosStarOutline />
							</div> */}
							<button
								type="button"
								className={styles.recomendadoButton}
							>
								<Link
									className={styles.recomendadoLink}
									to={`product/${x.id}`}
								>
									Recomendado
								</Link>
							</button>
							<IoIosStar
								onClick={handleFav}
								className={
									!favActive
										? styles.favIcon
										: styles.favIconActive
								}
							/>
						</div>
					</>
				))}
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
