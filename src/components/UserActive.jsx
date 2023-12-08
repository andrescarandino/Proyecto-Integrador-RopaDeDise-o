/* eslint-disable react-hooks/exhaustive-deps */
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import { useContext, useEffect, useState } from 'react';
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
	// eslint-disable-next-line consistent-return
	useEffect(() => {
		if (mail === 'admin@admin') {
			return setAdminActive(true);
		}
		(async () => {
			const res = await getUser(mail, token);
			setDataUser(res);
			setLoading(true);
			console.log(res);
		})();
	}, []);
	const logoutUser = () => {
		logout();
		navigate('/');
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
						: `${user.firstName} ${user.lastName}`}
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
				<div className={styles.menuContainer}>
					<button type="button" onClick={logoutUser}>
						cerrar sesion
					</button>
					<button type="button">info. personal</button>
				</div>
			)}
		</div>
	);
}

export default UserActive;
