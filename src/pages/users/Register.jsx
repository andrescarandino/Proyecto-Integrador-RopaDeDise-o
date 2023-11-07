/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import styles from '../../styles/users/register.module.css';

function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm();

	const onSubmit = handleSubmit((data) => {
		console.log(errors);
		reset();
	});

	const password = useRef(null);
	password.current = watch('password', '');

	return (
		<div className={styles.formContainer}>
			<form onSubmit={onSubmit}>
				<label type="text">Nombre:</label>
				<input
					className={styles.formInput}
					type="text"
					name="nombre"
					{...register('nombre', {
						required: {
							value: true,
							message: 'nombre es requerido',
						},
						minLength: {
							value: 3,
							message: 'Nombre debe ser mayor a 2 caracteres',
						},
						maxLength: {
							value: 20,
							message:
								'El nombre no puede contener mas de 20 caracteres',
						},
					})}
				/>
				{errors.nombre && <span>{errors.nombre.message}</span>}

				<label>Apellido:</label>
				<input
					className={styles.formInput}
					type="text"
					name="apellido"
					{...register('apellido', {
						required: {
							value: true,
							message: 'Apellido es requerido',
						},
						minLength: {
							value: 3,
							message: 'Apellido debe ser mayor a 2 caracteres',
						},
						maxLength: {
							value: 20,
							message:
								'El apellido no puede contener mas de 20 caracteres',
						},
					})}
				/>
				{errors.apellido && <span>{errors.apellido.message}</span>}

				<label>Email:</label>
				<input
					className={styles.formInput}
					type="email"
					name="email"
					{...register('email', {
						pattern: {
							value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
							message: 'Correo no valido',
						},
						required: {
							value: true,
							message: 'Email es requerido',
						},
					})}
				/>
				{errors.email && <span>{errors.email.message}</span>}

				<label>Contraseña:</label>
				<input
					className={styles.formInput}
					type="password"
					name="password"
					{...register('password', {
						required: {
							value: true,
							message: 'La contraseña es requerida',
						},
						minLength: {
							value: 6,
							message:
								'La contraseña debe contener 6 caracteres como minimo',
						},
						maxLength: {
							value: 12,
							message:
								'La contraseña no puede contener mas de 12 caracteres',
						},
					})}
				/>
				{errors.password && <span>{errors.password.message}</span>}

				<label>Confirmar contraseña:</label>
				<input
					className={styles.formInput}
					type="password"
					name="confirmPassword"
					{...register('confirmPassword', {
						required: {
							value: true,
							message: 'Confirmar contraseña es requerido',
						},
						minLength: {
							value: 6,
							message:
								'Confirmar contraseña debe contener 6 caracteres como minimo',
						},
						maxLength: {
							value: 12,
							message:
								'Confirmar contraseña no puede contener mas de 12 caracteres',
						},
						validate: (value) =>
							value === password.current ||
							'Las contraseñas no coinciden',
					})}
				/>
				{errors.confirmPassword && (
					<span>{errors.confirmPassword.message}</span>
				)}

				<button type="submit">Registrar</button>
			</form>
		</div>
	);
}

export default Register;
