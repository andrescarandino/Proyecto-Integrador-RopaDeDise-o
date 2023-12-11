/* eslint-disable react-hooks/exhaustive-deps */
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import { useContext, useEffect, useRef, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/userActive.module.css';
import { UserContext } from '../contexts/UserContext';
import getUser from '../services/getUser';

function UserActive() {
	const { state, logout } = useContext(UserContext);
	const [dataUser, setDataUser] = useState([]);
	const [loading, setLoading] = useState(false);
	const [menuActive, setMenuActive] = useState(false);
	const [adminActive, setAdminActive] = useState(false);
	const navigate = useNavigate();
	const { token } = state;
	const decoded = jwtDecode(token);
	const mail = decoded.sub;
	const authority = decoded.role[0].nombre;
	const menuRef = useRef();
	useEffect(() => {
		const handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setMenuActive(false);
			}
		};
		document.addEventListener('mousedown', handler);
		return () => {
			document.removeEventListener('mousedown', handler);
		};
	});
	// eslint-disable-next-line consistent-return
	useEffect(() => {
		if (authority === 'ADMIN') {
			return setAdminActive(true);
		}
		(async () => {
			const res = await getUser(mail, token);
			setDataUser(res);
			setLoading(true);
		})();
	}, []);
	const logoutUser = () => {
		logout();
		navigate('/');
	};
	const panelAdmin = () => {
		navigate('/admin');
	};

	const handleMenu = () => {
		setMenuActive(!menuActive);
	};
	const user = {
		firstName: loading ? `${dataUser.nombre}` : '',
		lastName: loading ? `${dataUser.apellido}` : '',
	};
	const letterFirstName = loading && user.firstName.charAt(0).toUpperCase();
	const letterLastName = loading && user.lastName.charAt(0).toUpperCase();

	return (
		<div>
			<div className={styles.userContainer}>
				<h3>
					{adminActive
						? 'ADMINISTRADOR'
						: `${user.firstName} ${user.lastName}` }

				</h3>
				<button type="button" onClick={handleMenu}>
					{menuActive ? (
						<IoMdArrowDropup className={styles.userLink} />
					) : (
						<IoMdArrowDropdown className={styles.userLink} />
					)}
				</button>
				<h2>
					{adminActive ? `AD` : `${letterFirstName}${letterLastName}`}
				</h2>
			</div>
			{menuActive && (
				<div className={styles.menuContainer} ref={menuRef}>
					<button type="button" onClick={logoutUser}>
						Cerrar sesion
					</button>
					{adminActive ? (
						<button type="button" onClick={panelAdmin}>
							Panel admin
						</button>
					) : null}
					<button type="button">Info. personal</button>
				</div>
			)}
		</div>
	);
}

export default UserActive;
