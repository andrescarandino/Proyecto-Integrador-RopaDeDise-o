import { useState } from 'react';
import PropTypes from 'prop-types';

function CompartirRedes({ url, buttonClassName }) {
	const [mostrarOpciones, setMostrarOpciones] = useState(false);

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

	const toggleMostrarOpciones = () => {
		setMostrarOpciones(!mostrarOpciones);
	};

	return (
		<div>
			<button
				type="button"
				onClick={toggleMostrarOpciones}
				className={buttonClassName}
			>
				Compartir
			</button>

			{mostrarOpciones && (
				<div>
					<button type="button" onClick={compartirEnFacebook}>
						Facebook
					</button>
					<button type="button" onClick={compartirEnTwitter}>
						Twitter
					</button>
					<button type="button" onClick={compartirEnWhatsApp}>
						WhatsApp
					</button>
					<button type="button" onClick={compartirPorCorreo}>
						Correo
					</button>
				</div>
			)}
		</div>
	);
}
CompartirRedes.propTypes = {
	url: PropTypes.string.isRequired,
	buttonClassName: PropTypes.string.isRequired,
};

export default CompartirRedes;
