import { IoMdSearch } from 'react-icons/io';
import styles from '../styles/search.module.css';

function Search() {
	return (
		<div className={styles.searchContainer}>
			<div className={styles.searchDiv}>
				<input
					type="text"
					placeholder="Buscar"
					className={styles.searchInput}
				/>
				<button type="button" className={styles.searchButton}>
					<IoMdSearch className={styles.searchIcon} />
				</button>
			</div>
		</div>
	);
}

export default Search;
