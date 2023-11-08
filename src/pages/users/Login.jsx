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
		<div className={styles.bodyContainer}>
			<div className={styles.formContainer}>
				<div className={styles.formLogo}>
					<h1>carolki.</h1>
					<h3>...diseñamos pasión</h3>
				</div>
				<form onSubmit={onSubmit}>
					{/* <label>Email:</label> */}
					<input
						placeholder="Email"
						className={styles.formInput}
						type="email"
						name="email"
						{...register('email')}
					/>

					{/* <label>Contraseña:</label> */}
					<input
						placeholder="Contraseña"
						className={styles.formInput}
						type="password"
						name="password"
						{...register('password')}
					/>

					<button className={styles.formButton} type="submit">
						Ingresar
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
