import { useContext, useState } from 'react';
import { IoIosStar } from 'react-icons/io';
import { jwtDecode } from 'jwt-decode';
import postFav from '../services/postFav';
import { UserContext } from '../contexts/UserContext';
import styles from '../styles/bodyRecomendadoOne.module.css';
import deleteFav from '../services/deleteFav';

function Fav({ idProduct }) {
	const { state } = useContext(UserContext);
	const { token, isAuthenticated } = state;
	const [favActive, setFavActive] = useState(false);
	const [productFav, setProductFav] = useState([]);
	let userRole = null;
	let userId = null;
	// eslint-disable-next-line consistent-return
	const handleFav = () => {
		if (isAuthenticated) {
			const decoded = jwtDecode(token);
			userId = decoded.id;
			userRole = decoded.role[0].nombre;
		}
		if (userRole === 'ADMIN') {
			return null;
		}
		if (productFav.length > 0) {
            const dataDeleteFav = deleteFav(userId, idProduct, token);
            setFavActive(false);
		}
        const dataFav = postFav(userId, idProduct, token);
		setProductFav(dataFav);
		setFavActive(!favActive);
		// (idProduct === productFav.producto.idProductos) {
		// }
	};
	return (
		<div>
			<IoIosStar
				onClick={handleFav}
				className={!favActive ? styles.favIcon : styles.favIconActive}
			/>
		</div>
	);
}

export default Fav;
