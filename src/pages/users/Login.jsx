/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import styles from '../../styles/users/login.module.css';

function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm();

	const onSubmit = handleSubmit((data) => {
		reset();
	});
	const password = useRef(null);
	password.current = watch('password', '');

	return (
		<div className={styles.formContainer}>
			<form onSubmit={onSubmit}>
				<label>Email:</label>
				<input
					className={styles.formInput}
					type="email"
					name="email"
					{...register('email')}
				/>

				<label>Contraseña:</label>
				<input
					className={styles.formInput}
					type="password"
					name="password"
					{...register('password')}
				/>

				<button type="submit">Ingresar</button>
			</form>
		</div>
	);
}

export default Login;
