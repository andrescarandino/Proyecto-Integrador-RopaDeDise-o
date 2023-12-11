import { Link } from 'react-router-dom';
import { useContext } from 'react';
import styles from '../styles/bodySearchTwo.module.css';
import { UserContext } from '../contexts/UserContext';
import Fav from './Fav';

// eslint-disable-next-line react/prop-types
function BodySearchTwo({ data }) {
	const { state } = useContext(UserContext);
	const { isAuthenticated } = state;
	// eslint-disable-next-line react/prop-types
	const dataNew = data.slice(5, 9);
	return (
		<div className={styles.bodySearch}>
			{dataNew.map((x) => (
				<div key={x.idProductos} className={styles.divSearch}>
					<img src={x.imagenes[0].ruta} alt="" />
					<button type="button" className={styles.searchButton}>
						<Link
							className={styles.searchLink}
							to={`product/${x.idProductos}`}
						>
							ver
						</Link>
					</button>
					{isAuthenticated && <Fav idProduct={x.idProductos} />}
				</div>
			))}
		</div>
	);
}

export default BodySearchTwo;
