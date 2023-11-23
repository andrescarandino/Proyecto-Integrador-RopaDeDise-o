/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '../../../hooks';
import { isUrl } from '../../../utils';

function FeaturesForm({ edit, initialValues }) {
	const toast = useToast();
	const [preview, setPreview] = useState(initialValues?.icon);

	const onSubmit = (data) => {
		console.log({
			data,
		});
	};

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm({
		defaultValues: initialValues,
	});

	const handleIconChange = ({ target: { value } }) => {
		if (!isUrl(value)) {
			setError('icon', {
				type: 'custom',
				message: 'Ingresa un enlace de icono válido',
			});

			return;
		}

		setPreview(value);
	};

	const onErrors = (errors) => {
		console.log(errors);
	};

	return (
		<main className="form-container">
			<form onSubmit={handleSubmit(onSubmit, onErrors)} className="form">
				<div className="form-group">
					<label htmlFor="name">Escribe un nombre:</label>
					<input
						className="input"
						id="name"
						type="text"
						autoComplete="off"
						placeholder="Nombre"
						{...register('name', { required: true })}
					/>
				</div>
				{errors.name && (
					<span className="form-error-message">
						Este campo es requerido.
					</span>
				)}
				<div className="form-group">
					<label htmlFor="icon">Pega el enlace del icono:</label>
					<input
						className="input"
						id="icon"
						type="text"
						autoComplete="off"
						placeholder="Enlace del icono"
						{...register('icon', {
							required: true,
							onChange: handleIconChange,
						})}
					/>
				</div>
				{errors.icon && (
					<span className="form-error-message">
						Este campo es requerido.
					</span>
				)}
				{preview && (
					<div className="form-preview-item">
						<img
							src={preview}
							alt="Previsualización del icono"
							width={300}
							height={300}
						/>
					</div>
				)}
				<button type="submit" className="submit-button">
					{edit ? 'Editar' : 'Agregar'} característica
				</button>
			</form>
		</main>
	);
}

export default FeaturesForm;

FeaturesForm.propTypes = {
	edit: PropTypes.bool,
	initialValues: PropTypes.shape({
		name: PropTypes.string,
		icon: PropTypes.string,
	}),
};

FeaturesForm.defaultProps = {
	edit: false,
	initialValues: {},
};
