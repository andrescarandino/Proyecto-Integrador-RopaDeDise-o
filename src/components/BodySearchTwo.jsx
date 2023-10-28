import { Link } from 'react-router-dom';
import styles from '../styles/bodySearchTwo.module.css';
import img5 from '../img/img5.png';
import img6 from '../img/img6.png';
import img7 from '../img/img7.png';
import img8 from '../img/img8.png';

function BodySearchTwo() {
	return (
		<div className={styles.bodySearchContainer}>
			<div className={styles.bodySearch}>
				<div className={styles.divSearch}>
					<img src={img5} alt="" className={styles.searchImg} />
					<button type="button" className={styles.searchButton}>
						<Link className={styles.searchLink} to="product/:id">
							ver
						</Link>
					</button>
				</div>
				<div className={styles.divSearch}>
					<img src={img6} alt="" className={styles.searchImg} />
					<button type="button" className={styles.searchButton}>
						<Link className={styles.searchLink} to="product/:id">
							ver
						</Link>
					</button>
				</div>

				<div className={styles.divSearch}>
					<img src={img7} alt="" className={styles.searchImg} />
					<button type="button" className={styles.searchButton}>
						<Link className={styles.searchLink} to="product/:id">
							ver
						</Link>
					</button>
				</div>
				<div className={styles.divSearch}>
					<img src={img8} alt="" className={styles.searchImg} />
					<button type="button" className={styles.searchButton}>
						<Link className={styles.searchLink} to="product/:id">
							ver
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
}

export default BodySearchTwo;
