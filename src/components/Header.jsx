import { Link } from 'react-router-dom';
import styles from '../styles/header.module.css';

function Header() {
	return (
		<div className={styles.headerFixed}>
			<div className={styles.headerContainer}>
				<Link to="/" className={styles.headerLink}>
					<h1>carolki.</h1>
					<h3>...diseñamos pasión</h3>
				</Link>
				<div className={styles.headerLogin}>
					<button type="button" className={styles.headerButton}>
						crear cuenta
					</button>
					<div className={styles.headerLine} />
					<button type="button" className={styles.headerButton}>
						iniciar sesión
					</button>
				</div>
			</div>
			<hr className={styles.headerHr} />
		</div>
	);
}

export default Header;
