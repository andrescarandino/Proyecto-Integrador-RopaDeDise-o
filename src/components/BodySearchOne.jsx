import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../styles/bodySearchOne.module.css';

function BodySearchOne({ data }) {
	return (
		<div className={styles.bodySearchContainer}>
			<div className={styles.bodySearch}>
				<div className={styles.divSearch}>
					<img
						src={data[0].image_url}
						alt=""
						className={styles.searchImg}
					/>
					<button type="button" className={styles.searchButton}>
						<Link
							className={styles.searchLink}
							to={`product/${data[0].id}`}
						>
							Ver
						</Link>
					</button>
				</div>
				<div className={styles.divSearch}>
					<img
						src={data[1].image_url}
						alt=""
						className={styles.searchImg}
					/>
					<button type="button" className={styles.searchButton}>
						<Link
							className={styles.searchLink}
							to={`product/${data[1].id}`}
						>
							Ver
						</Link>
					</button>
				</div>

				<div className={styles.divSearch}>
					<img
						src={data[2].image_url}
						alt=""
						className={styles.searchImg}
					/>
					<button type="button" className={styles.searchButton}>
						<Link
							className={styles.searchLink}
							to={`product/${data[2].id}`}
						>
							Ver
						</Link>
					</button>
				</div>
				<div className={styles.divSearch}>
					<img
						src={data[3].image_url}
						alt=""
						className={styles.searchImg}
					/>
					<button type="button" className={styles.searchButton}>
						<Link
							className={styles.searchLink}
							to={`product/${data[3].id}`}
						>
							Ver
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
}

BodySearchOne.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.string.isRequired,
		image_url: PropTypes.string.isRequired,
	}).isRequired,
};

export default BodySearchOne;
