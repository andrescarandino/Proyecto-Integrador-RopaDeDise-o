import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from '../styles/pagination.module.css';

function Pagination() {
	return (
		<div className={styles.paginationContainer}>
			<button type="button">
				<IoIosArrowBack />
			</button>
			<h3>1 / 5</h3>
			<button type="button">
				<IoIosArrowForward />
			</button>
		</div>
	);
}

export default Pagination;
