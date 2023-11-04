import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../styles/bodySearchTwo.module.css';

function BodySearchTwo({ data }) {
	return (
		<div className={styles.bodySearchContainer}>
			<div className={styles.bodySearch}>
				<div className={styles.divSearch}>
					<img
						src={data[4].image_url}
						alt=""
						className={styles.searchImg}
					/>
					<button type="button" className={styles.searchButton}>
						<Link
							className={styles.searchLink}
							to={`product/${data[4].id}`}
						>
							Ver
						</Link>
					</button>
				</div>
				<div className={styles.divSearch}>
					<img
						src={data[5].image_url}
						alt=""
						className={styles.searchImg}
					/>
					<button type="button" className={styles.searchButton}>
						<Link
							className={styles.searchLink}
							to={`product/${data[5].id}`}
						>
							Ver
						</Link>
					</button>
				</div>

				<div className={styles.divSearch}>
					<img
						src={data[6].image_url}
						alt=""
						className={styles.searchImg}
					/>
					<button type="button" className={styles.searchButton}>
						<Link
							className={styles.searchLink}
							to={`product/${data[6].id}`}
						>
							Ver
						</Link>
					</button>
				</div>
				<div className={styles.divSearch}>
					<img
						src={data[7].image_url}
						alt=""
						className={styles.searchImg}
					/>
					<button type="button" className={styles.searchButton}>
						<Link
							className={styles.searchLink}
							to={`product/${data[7].id}`}
						>
							Ver
						</Link>
					</button>
				</div>
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
