import { useContext, useEffect, useState } from 'react';
import { IoIosStar } from 'react-icons/io';
import styles from '../styles/bodyRecomendadoOne.module.css';
// eslint-disable-next-line react/prop-types
function Fav() {
	const [favActive, setFavActive] = useState(false);

	const handleFav = () => {
		setFavActive(!favActive)
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
