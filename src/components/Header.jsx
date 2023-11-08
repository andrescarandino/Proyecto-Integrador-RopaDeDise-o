/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import styles from '../styles/header.module.css';
import UserActive from './UserActive';

function Header() {
	const [usuarioActive, setUsuarioActive] = useState(true);
	const [menuActive, setMenuActive] = useState(false);
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
				{!usuarioActive && (
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
				)}
				{usuarioActive && <UserActive />}
			</div>
			{/* <hr className={styles.headerHr} /> */}
		</div>
	);
}

export default Header;
