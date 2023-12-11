/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';
import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/users/login.module.css';
import loginImg from '../../img/loginImg.png';
import loginImg2 from '../../img/loginImg2.png';
import { UserContext } from '../../contexts/UserContext';
import loginUser from '../../services/loginUser';
import LoaderSpan from '../../components/LoaderSpan';
import { jwtDecode } from 'jwt-decode';

function Login() {
	const { login, state } = useContext(UserContext);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const navigate = useNavigate();
	const handleRegister = () => {
		navigate('/users/register');
	};
	const handleHome = () => {
		navigate('/');
	};
	const handleError = () => {
		setError(true);
		setTimeout(() => {
			setError(false);
		}, 6000);
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm();
	// eslint-disable-next-line consistent-return
	const onSubmit = async (data) => {
		setLoading(true);
		const token = await loginUser(data);
		if (token === undefined) {
			setLoading(false);
			reset();
			return handleError();
		}
		login(token);
		setLoading(false);
		console.log(token);
		// eslint-disable-next-line no-unused-expressions
		//data.email === 'admin@admin' ? navigate('/admin') : navigate('/');
		navigate('/');
		reset();
	};
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
					<form onSubmit={handleSubmit(onSubmit)}>
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
							{loading ? <LoaderSpan /> : 'Ingresar'}
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
				{error && (
					<div className={styles.messageErrorContainer}>
						<h5> - Usuario no Registrado - </h5>
					</div>
				)}
			</div>
		</div>
	);
}

export default Login;
