/* eslint-disable jsx-a11y/anchor-is-valid */
import { IoIosLogOut } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styles from '../styles/userActive.module.css';

function UserActive() {
	// const [menuActive, setMenuActive] = useState(false);
	// const handleMenu = () => {
	// 	setMenuActive(!menuActive);
	// };
	const user = {
		firstName: 'Andres',
		lastName: 'Carandino',
	};
	const letterFirstName = user.firstName.charAt(0).toUpperCase();
	const letterLastName = user.lastName.charAt(0).toUpperCase();

	return (
		<div>
			<div className={styles.userContainer}>
				<h3>
					{user.firstName} {user.lastName}
				</h3>
				{/* <button type="button" onClick={handleMenu}>
					{menuActive ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
				</button> */}
				<h2>
					{letterFirstName}
					{letterLastName}
				</h2>
				<Link>
					<IoIosLogOut className={styles.userLink} />
				</Link>
			</div>
		</div>
	);
}

export default UserActive;
