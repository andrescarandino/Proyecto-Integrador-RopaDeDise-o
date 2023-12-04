/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/footer.module.css';

function Footer() {
	const navigate = useNavigate();
	return (
		<div className={styles.footerFixed}>
			<div className={styles.footerContainer}>
				<Link to="/" className={styles.footerLink}>
					<h1>carolki.</h1>
					<h3>...diseñamos pasión</h3>
				</Link>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						gap: '0.65rem',
					}}
				>
					<h3 className={styles.footerH3}>Copyright 2023</h3>
					<p
						role="button"
						onClick={() => {
							navigate('/policies');
						}}
						className={styles.footerH3}
						style={{
							fontSize: '0.85rem',
							cursor: 'pointer',
							marginBottom: '-15px',
							fontStyle: 'italic',
						}}
					>
						Ver políticas del sitio web
					</p>
				</div>

				<div>
					<IoLogoInstagram className={styles.footerIcons} />
					<IoLogoFacebook className={styles.footerIcons} />
				</div>
			</div>
		</div>
	);
}

export default Footer;
