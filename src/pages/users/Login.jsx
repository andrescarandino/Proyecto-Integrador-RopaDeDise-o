/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/users/login.module.css';
import Header from '../../components/Header';
import loginImg from '../../img/loginImg.png';
import loginImg2 from '../../img/loginImg2.png';

function Login() {
	const navigate = useNavigate();
	const handleRegister = () => {
		navigate('/users/register');
	};
	const handleHome = () => {
		navigate('/');
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm();

	const onSubmit = handleSubmit((/* data */) => {
		navigate('/');
		reset();
	});
	const password = useRef(null);
	password.current = watch('password', '');

	return (
		<div className={styles.bodyContainer}>
			<div className={styles.bodyContainerRegister}>
				<img className={styles.registerImg} src={loginImg2} alt="" />
				<img className={styles.registerImg2} src={loginImg} alt="" />
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
					<div className={styles.registerContainer}>
						<h4>¿No tienes una cuenta?</h4>
						<button onClick={handleRegister} type="button">
							Registrate
						</button>
					</div>
					<button
						onClick={handleHome}
						className={styles.returnButton}
						type="button"
					>
						- volver -
					</button>
				</div>
			</div>
		</div>
	);
}

export default Login;
