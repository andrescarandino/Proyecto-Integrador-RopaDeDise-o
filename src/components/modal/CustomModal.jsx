import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { IconX } from '@tabler/icons-react';

export default function CustomModal({
	openModal,
	setOpenModal,
	contentComponent,
}) {
	const onClose = () => {
		setOpenModal(false);
	};

	return (
		openModal &&
		createPortal(
			<div className="modal">
				<div className="modal-content">
					{contentComponent}
					<IconX
						role="button"
						size={18}
						onClick={onClose}
						color="#aeb0d7"
						style={{
							position: 'absolute',
							top: '10px',
							right: '10px',
							cursor: 'pointer',
						}}
					/>
				</div>
			</div>,
			document.body,
		)
	);
}

CustomModal.propTypes = {
	openModal: PropTypes.bool.isRequired,
	setOpenModal: PropTypes.func.isRequired,
	contentComponent: PropTypes.node.isRequired,
};
