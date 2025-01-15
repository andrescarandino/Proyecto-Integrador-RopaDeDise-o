import { Link } from 'react-router-dom';
import { useContext } from 'react';
import styles from '../styles/bodyRecomendadoOne.module.css';
import { UserContext } from '../contexts/UserContext';
import Fav from './Fav';

// eslint-disable-next-line react/prop-types
function BodyRecomendadoOne({ data }) {
	const { state } = useContext(UserContext);
	const { isAuthenticated } = state;
	// eslint-disable-next-line react/prop-types
	const dataNew = data.slice(0, 1);
	return (
		<div className={styles.recomendadoContainer}>
			{dataNew.map((x) => (
				<div key={x.id}>
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
								to={''}
							>
								Recomendado
							</Link>
						</button>
						{isAuthenticated && <Fav idProduct={x.id} />}
					</div>
				</div>
			))}
		</div>
	);
}

export default BodyRecomendadoOne;
