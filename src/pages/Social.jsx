import PropTypes from 'prop-types';
import {
	IoLogoFacebook,
	IoLogoTwitter,
	IoLogoWhatsapp,
	IoMail,
} from 'react-icons/io5';
import styles from '../styles/social.module.css';

function Social({ url }) {
	const compartirEnFacebook = () => {
		window.open(
			`https://www.facebook.com/sharer/sharer.php?u=${url}`,
			'_blank',
		);
	};

	const compartirEnTwitter = () => {
		window.open(`https://twitter.com/intent/tweet?url=${url}`, '_blank');
	};

	const compartirEnWhatsApp = () => {
		window.location.href = `https://api.whatsapp.com/send?text= ${url}`;
	};
	const compartirPorCorreo = () => {
		const subject = encodeURIComponent('Echa un vistazo a este producto');
		const body = encodeURIComponent(`Mira este producto: ${url}`);

		window.location.href = `mailto:?subject=${subject}&body=${body}`;
	};

	return (
		<div>
			<div className={styles.socialContainer}>
				<button type="button" onClick={compartirEnFacebook}>
					<IoLogoFacebook />
				</button>
				<button type="button" onClick={compartirEnTwitter}>
					<IoLogoTwitter />
				</button>
				<button type="button" onClick={compartirEnWhatsApp}>
					<IoLogoWhatsapp />
				</button>
				<button type="button" onClick={compartirPorCorreo}>
					<IoMail />
				</button>
			</div>
		</div>
	);
}
Social.propTypes = {
	url: PropTypes.string.isRequired,
};

export default Social;
