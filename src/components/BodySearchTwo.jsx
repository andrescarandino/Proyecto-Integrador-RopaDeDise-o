import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../styles/bodySearchTwo.module.css';

function BodySearchTwo({ data }) {
	return (
		<div className={styles.bodySearch}>
			<div className={styles.divSearch}>
				<img src={data[4].image_url} alt="" />
				<button type="button" className={styles.searchButton}>
					<Link
						className={styles.searchLink}
						to={`product/${data[4].id}`}
					>
						ver
					</Link>
				</button>
			</div>
			<div className={styles.divSearch}>
				<img src={data[5].image_url} alt="" />
				<button type="button" className={styles.searchButton}>
					<Link
						className={styles.searchLink}
						to={`product/${data[5].id}`}
					>
						ver
					</Link>
				</button>
			</div>

			<div className={styles.divSearch}>
				<img src={data[6].image_url} alt="" />
				<button type="button" className={styles.searchButton}>
					<Link
						className={styles.searchLink}
						to={`product/${data[6].id}`}
					>
						ver
					</Link>
				</button>
			</div>
			<div className={styles.divSearch}>
				<img src={data[7].image_url} alt="" />
				<button type="button" className={styles.searchButton}>
					<Link
						className={styles.searchLink}
						to={`product/${data[7].id}`}
					>
						ver
					</Link>
				</button>
			</div>
		</div>
	);
}

BodySearchTwo.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.string.isRequired,
		image_url: PropTypes.string.isRequired,
	}).isRequired,
};

export default BodySearchTwo;