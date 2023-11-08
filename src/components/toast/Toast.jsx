import {
	IconAlertCircleFilled,
	IconCircleCheckFilled,
	IconCircleXFilled,
	IconInfoCircleFilled,
	IconX,
} from '@tabler/icons-react';
import PropTypes from 'prop-types';
import { useRef, useEffect, useState } from 'react';
// eslint-disable-next-line import/no-cycle
import { useToast } from '../../hooks';

const toastTypes = {
	success: {
		icon: <IconCircleCheckFilled />,
		iconClass: 'success-icon',
		progressBarClass: 'success',
	},
	warning: {
		icon: <IconAlertCircleFilled />,
		iconClass: 'warning-icon',
		progressBarClass: 'warning',
	},
	info: {
		icon: <IconInfoCircleFilled />,
		iconClass: 'info-icon',
		progressBarClass: 'info',
	},
	error: {
		icon: <IconCircleXFilled />,
		iconClass: 'error-icon',
		progressBarClass: 'error',
	},
};

// Extracted from this article https://hackernoon.com/using-reactjs-and-context-api-to-build-a-custom-toast-notification-component
function Toast({ message, type, id }) {
	const { icon, iconClass, progressBarClass } = toastTypes[type];
	const toast = useToast();

	const [dismissed, setDismissed] = useState(false);
	const progressRef = useRef(null);
	const timerID = useRef(null);

	const handleDismiss = () => {
		setDismissed(true);
		setTimeout(() => {
			toast.remove(id);
		}, 400);
	};

	const handleMouseEnter = () => {
		clearTimeout(timerID.current);
		progressRef.current.style.animationPlayState = 'paused';
	};

	const handleMouseLeave = () => {
		const remainingTime =
			(progressRef.current.offsetWidth /
				progressRef.current.parentElement.offsetWidth) *
			4000;

		progressRef.current.style.animationPlayState = 'running';

		timerID.current = setTimeout(() => {
			handleDismiss();
		}, remainingTime);
	};

	useEffect(() => {
		timerID.current = setTimeout(() => {
			handleDismiss();
		}, 4000);

		return () => {
			clearTimeout(timerID.current);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			className={`toast ${dismissed ? 'toast-dismissed' : ''}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<span className={iconClass}>{icon}</span>
			<p className="toast-message">{message}</p>
			<button
				className="dismiss-btn"
				type="button"
				onClick={handleDismiss}
			>
				<IconX size={18} color="#aeb0d7" />
			</button>

			<div className="toast-progress">
				<div
					ref={progressRef}
					className={`toast-progress-bar ${progressBarClass}`}
				/>
			</div>
		</div>
	);
}

Toast.propTypes = {
	message: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['success', 'warning', 'info', 'error']).isRequired,
	id: PropTypes.number.isRequired,
};

export default Toast;
