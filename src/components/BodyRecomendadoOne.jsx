import { useState } from 'react';
import { IoIosStar } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styles from '../styles/bodyRecomendadoOne.module.css';

// eslint-disable-next-line react/prop-types
function BodyRecomendadoOne({ data }) {
	// eslint-disable-next-line react/prop-types
	const dataNew = data.slice(4, 5);
	const [favActive, setFavActive] = useState(false);
	const handleFav = () => {
		setFavActive(!favActive);
	};
	return (
		<div className={styles.recomendadoContainer}>
			{dataNew.map((x) => (
				<>
					<img
						className={styles.recomendadoImg}
						src={x.image_url}
						alt="recomendado"
					/>
					<div className={styles.recomendadoDetail}>
						<h2 className={styles.recomendadoH2}>{x.name}</h2>
						<p className={styles.recomendadoP}>{x.description}</p>
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

export default BodyRecomendadoOne;
