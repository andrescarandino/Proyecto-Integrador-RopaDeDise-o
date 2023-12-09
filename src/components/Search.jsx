import { useEffect, useRef, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styles from '../styles/search.module.css';
import searchProduct from '../services/searchProduct';

function Search() {
	// const navigate = useNavigate();
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(false);
	// const [noProduct, setNoProduct] = useState(false);
	const [keyword, setKeyword] = useState('');
	const menuRef = useRef();
	useEffect(() => {
		const handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setLoading(false);
			}
		};
		document.addEventListener('mousedown', handler);
		return () => {
			document.removeEventListener('mousedown', handler);
		};
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (keyword.length === 0) {
			return null;
		}
		const data = await searchProduct(keyword);
		setProduct(data);
		setLoading(true);
	};
	return (
		<div>
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
			{loading && (
				<div className={styles.searchModal}>
					<div className={styles.searchModalContainer} ref={menuRef}>
						{product &&
							product.map((x) => (
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
