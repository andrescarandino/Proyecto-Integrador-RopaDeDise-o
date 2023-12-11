import { useEffect, useRef, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styles from '../styles/search.module.css';
import searchProduct from '../services/searchProduct';

function Search() {
	const [suggestions, setSuggestions] = useState([]);
	const [loading, setLoading] = useState(false);
	const [keyword, setKeyword] = useState('');
	const menuRef = useRef();

	useEffect(() => {
		const handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setSuggestions([]);
				setLoading(false);
			}
		};
		document.addEventListener('mousedown', handler);
		return () => {
			document.removeEventListener('mousedown', handler);
		};
	}, []);

	const fetchSuggestionsFromDatabase = async (query) => {
		try {
			const data = await searchProduct(query);
			return data;
		} catch (error) {
			console.error('Error al obtener sugerencias:', error);
			return [];
		}
	};

	const handleInputChange = async (value) => {
		setKeyword(value);

		if (value.trim() === '') {
			setSuggestions([]);
			setLoading(false);
			return;
		}

		setLoading(true);

		const suggestionsData = await fetchSuggestionsFromDatabase(value);
		setSuggestions(suggestionsData);
	};
	return (
		<div>
			<div className={styles.searchContainer}>
				<div className={styles.searchDiv}>
					<input
						type="search"
						placeholder="Buscar"
						className={styles.searchInput}
						onChange={(e) => handleInputChange(e.target.value)}
					/>
					<button
						type="button"
						className={styles.searchButton}
						onClick={() => handleInputChange(keyword)}
					>
						<IoMdSearch className={styles.searchIcon} />
					</button>
				</div>
			</div>
			{loading && (
				<div className={styles.searchModal}>
					<div className={styles.searchModalContainer} ref={menuRef}>
						{suggestions &&
							suggestions.map((x) => (
								<div
									key={x.idProductos}
									className={styles.searchModalDiv}
								>
									<Link
										to={`product/${x.idProductos}`}
										className={styles.searchModalLink}
									>
										<h3>{x.nombre}</h3>
									</Link>
									<img src={x.imagenes[0].ruta} alt="" />
								</div>
							))}
					</div>
				</div>
			)}
		</div>
	);
}

export default Search;
