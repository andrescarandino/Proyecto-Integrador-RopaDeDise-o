import { useContext, useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import styles from '../styles/header.module.css';
import UserActive from './UserActive';

function Header() {
	const { state } = useContext(UserContext);
	const [menuActive, setMenuActive] = useState(false);
	const userActive = state.isAuthenticated;

	const handleMenu = () => {
		setMenuActive(!menuActive);
	};
	return (
		<div className={styles.headerFixed}>
			<div className={styles.headerContainer}>
				<Link to="/" className={styles.headerLink}>
					<h1>carolki.</h1>
					<h3>...diseñamos pasión</h3>
				</Link>
				<button
					className={styles.headerMenuButton}
					type="button"
					onClick={handleMenu}
				>
					{menuActive ? (
						<IoMdClose className={styles.headermenu} />
					) : (
						<IoMdMenu className={styles.headermenu} />
					)}
				</button>
				{menuActive && (
					<div className={styles.headerMenuContainer}>
						<button type="button" className={styles.menuButton}>
							Crear cuenta
						</button>
						<button type="button" className={styles.menuButton}>
							Iniciar sesión
						</button>
					</div>
				)}
				{!userActive ? (
					<div className={styles.headerLogin}>
						<Link to="users/register">
							<button
								type="button"
								className={styles.headerButton}
							>
								crear cuenta
							</button>
						</Link>
						<div className={styles.headerLine} />
						<Link to="users/login">
							<button
								type="button"
								className={styles.headerButton}
							>
								iniciar sesión
							</button>
						</Link>
					</div>
				) : (
					<UserActive />
				)}
			</div>
			{/* <hr className={styles.headerHr} /> */}
		</div>
	);
}

export default Header;
