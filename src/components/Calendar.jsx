import { useContext, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { UserContext } from '../contexts/UserContext';
import postDate from '../services/postDate';
import styles from '../styles/productDetail.module.css';
import { useToast } from '../hooks';

// eslint-disable-next-line react/prop-types
function Calendar({ id }) {
	const toast = useToast();
	const { state } = useContext(UserContext);
	const [initDate, setInitDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [reservation, setReservation] = useState([]);
	const [loading, setLoading] = useState(false);
	const { token } = state;
	const decoded = jwtDecode(token);
	const userId = decoded.id;
	const reservaData = {
		fechaInicio: initDate,
		fechaFin: endDate,
		usuario: {
			idUsuarios: userId,
		},
		producto: {
			idProductos: id,
		},
	};
	const handleDate = async () => {
		const response = await postDate(reservaData, token);
		// eslint-disable-next-line no-unused-expressions
		if (response.status === 500) {
			return toast.error('Fecha no disponible');
		}
		setReservation(response);
		toast.success('Registro exitoso');
		setLoading(true);
		console.log(response);
	};
	return (
		<div className={styles.calendarContainer}>
			<div className={styles.calendarDiv}>
				<input
					type="date"
					onChange={(e) => setInitDate(e.currentTarget.value)}
				/>
				<input
					type="date"
					onChange={(e) => setEndDate(e.currentTarget.value)}
				/>
				<button
					onClick={handleDate}
					type="button"
					className={styles.calendarButton}
				>
					Reservar
				</button>
			</div>
			{loading && (
				<div className={styles.responseCalendar}>
					<h4>Producto : {reservation.producto.nombre}</h4>
					<h4>Descripcion : {reservation.producto.descripcion}</h4>
					<h4>Desde la Fecha : {reservation.fechaInicio}</h4>
					<h4>Hasta la Fecha :{reservation.fechaFin}</h4>
				</div>
			)}
		</div>
	);
}

export default Calendar;
