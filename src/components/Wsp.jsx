import { IoLogoWhatsapp } from 'react-icons/io5';
import styles from '../styles/wsp.module.css';

function Wsp() {
	const phoneNumber = '573108960354';
	const openWsp = () => {
		const whatsappLink = `https://wa.me/${phoneNumber}`;
		window.open(whatsappLink, '_blank');
	};
	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
		<div className={styles.containerWsp} onClick={openWsp}>
			<IoLogoWhatsapp />
		</div>
	);
}

export default Wsp;
