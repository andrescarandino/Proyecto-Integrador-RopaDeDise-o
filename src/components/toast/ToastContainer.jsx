// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-cycle
import Toast from './Toast';

function ToastsContainer({ toasts, position = 'top-right' }) {
	return (
		<div className={`toasts-container ${position}`}>
			{toasts.map((toast) => (
				<Toast key={toast.id} {...toast} />
			))}
		</div>
	);
}

ToastsContainer.propTypes = {
	toasts: PropTypes.arrayOf(
		PropTypes.shape({
			message: PropTypes.string.isRequired,
			type: PropTypes.oneOf(['success', 'warning', 'info', 'error'])
				.isRequired,
			id: PropTypes.number.isRequired,
		}),
	).isRequired,
	position: PropTypes.string.isRequired,
};

export default ToastsContainer;
