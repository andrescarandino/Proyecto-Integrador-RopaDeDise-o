// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoIosStar } from 'react-icons/io';
import { useState } from 'react';
import styles from '../styles/bodySearchOne.module.css';

// eslint-disable-next-line react/prop-types
function BodySearchOne({ data }) {
	// eslint-disable-next-line react/prop-types
	const dataNew = data.slice(0, 4);
	const [favActive, setFavActive] = useState(false);
	const handleFav = () => {
		setFavActive(!favActive);
	};
	return (
		<div className={styles.bodySearch}>
			{dataNew.map((x) => (
				<div className={styles.divSearch}>
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
					<IoIosStar
						onClick={handleFav}
						className={
							!favActive ? styles.favIcon : styles.favIconActive
						}
					/>
				</div>
			))}
			{/* <div className={styles.divSearch}>
				<img src={data[1].image_url} alt="" />
				<button type="button" className={styles.searchButton}>
					<Link
						className={styles.searchLink}
						to={`product/${data[1].id}`}
					>
						ver
					</Link>
				</button>
			</div>

			<div className={styles.divSearch}>
				<img src={data[2].image_url} alt="" />
				<button type="button" className={styles.searchButton}>
					<Link
						className={styles.searchLink}
						to={`product/${data[2].id}`}
					>
						ver
					</Link>
				</button>
			</div>
			<div className={styles.divSearch}>
				<img src={data[3].image_url} alt="" />
				<button type="button" className={styles.searchButton}>
					<Link
						className={styles.searchLink}
						to={`product/${data[3].id}`}
					>
						ver
					</Link>
				</button>
			</div> */}
		</div>
	);
}
export default BodySearchOne;
