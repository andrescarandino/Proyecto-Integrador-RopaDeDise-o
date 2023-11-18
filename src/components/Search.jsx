import { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/search.module.css';

function Search() {
	const navigate = useNavigate();
	const [keyword, setKeyword] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/productos/buscar?prenda=${keyword}`);
	};
	return (
		<div className={styles.searchContainer}>
			<div className={styles.searchDiv}>
				<input
					type="search"
					placeholder="Buscar"
					className={styles.searchInput}
					onChange={(e) => setKeyword(e.target.value)}
				/>
				<button
					type="button"
					className={styles.searchButton}
					onClick={handleSubmit}
				>
					<IoMdSearch className={styles.searchIcon} />
				</button>
			</div>
		</div>
	);
}

export default Search;
