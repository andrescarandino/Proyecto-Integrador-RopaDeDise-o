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
	console.log(dataNew);
	return (
		<div className={styles.bodySearch}>
			{dataNew.map((x) => (
				<div key={x.id} className={styles.divSearch}>
					<img src={x.image_url} alt="" />
					<button type="button" className={styles.searchButton}>
						<Link
							className={styles.searchLink}
							to={``}
							prop={dataNew}
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
