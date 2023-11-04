import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from '../styles/pagination.module.css';

// eslint-disable-next-line react/prop-types
function Pagination({ nPages, currentPage, setCurrentPage }) {
	const next = () => {
		if (currentPage !== nPages) setCurrentPage(currentPage + 1);
	};
	const prev = () => {
		if (currentPage !== 1) setCurrentPage(currentPage - 1);
	};
	return (
		<div className={styles.paginationContainer}>
			<button type="button" onClick={prev}>
				<IoIosArrowBack />
			</button>
			<h3>
				{currentPage} / {nPages}
			</h3>
			<button type="button" onClick={next}>
				<IoIosArrowForward />
			</button>
		</div>
	);
}

export default Pagination;
