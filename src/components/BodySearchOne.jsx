// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import styles from '../styles/bodySearchOne.module.css';
import Fav from './Fav';
import { UserContext } from '../contexts/UserContext';

// eslint-disable-next-line react/prop-types
function BodySearchOne({ data }) {
	const { state } = useContext(UserContext);
	const { isAuthenticated } = state;
	// eslint-disable-next-line react/prop-types
	const dataNew = data.slice(0, 4);
	return (
		<div className={styles.bodySearch}>
			{dataNew.map((x) => (
				<div key={x.idProductos} className={styles.divSearch}>
					<img src={x.imagenes[0].ruta} alt="" />
					<button type="button" className={styles.searchButton}>
						<Link
							className={styles.searchLink}
							to={`product/${x.idProductos}`}
							prop={x.descripcion}
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
export default BodySearchOne;
