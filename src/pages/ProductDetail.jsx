import { useState } from 'react';
import { IoIosClose, IoMdShare } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import ReactSlidy from 'react-slidy';
import {
	IoDiamondOutline,
	IoCutOutline,
	IoShirtOutline,
} from 'react-icons/io5';
import MockData from '../../MOCK_DATA.json';
import styles from '../styles/productDetail.module.css';
import Social from './Social';

function ProductDetail() {
	const [slidyActive, setSlidyActive] = useState(false);
	const [calendarOpen, setCalendarOpen] = useState(false);
	const [socialOpen, setSocialOpen] = useState(false);
	const params = useParams();
	const { id } = params;
	const img = MockData[id - 1].image_url;
	const { description } = MockData[id - 1];

	const handleSlidy = () => {
		setSlidyActive(!slidyActive);
	};
	const handleCalendarToggle = () => {
		setCalendarOpen(!calendarOpen);
	};
	const handleSocialToggle = () => {
		setSocialOpen(!socialOpen);
	};

	return (
		<div className={styles.productContainer}>
			<div className={styles.productHeader}>
				<h2 className={styles.productH2}>Título del Producto</h2>
				<button type="button" className={styles.productButton}>
					<Link to="/" className={styles.productLink}>
						Volver
					</Link>
				</button>
			</div>
			{socialOpen && (
				<Social url={`http://localhost:5173/product/${id}`} />
			)}
			<div className={styles.descriptionContainer}>
				<div className={styles.descriptionBigImg}>
					<img src={img} alt="" />
				</div>
				<div className={styles.descriptionImg}>
					<img src={img} alt="" />
					<img src={img} alt="" />
					<img src={img} alt="" />
					<img src={img} alt="" />
				</div>
				<div className={styles.descriptionP}>
					<p>{description}</p>
					<div className={styles.descriptionFooter}>
						<h4>$00,00</h4>
						<button
							type="button"
							className={styles.descriptionButton}
							onClick={handleSlidy}
						>
							Ver mas
						</button>
						<IoMdShare
							onClick={handleSocialToggle}
							className={styles.productIcons}
						/>
					</div>
				</div>
				{slidyActive && (
					<div className={styles.slidyContainer}>
						<button type="button" onClick={handleSlidy}>
							<IoIosClose />
						</button>
						<ReactSlidy>
							<img
								style={{
									height: '100%',
									width: '280px',
								}}
								src={img}
								alt=""
							/>
							<img
								style={{
									height: '100%',
									width: '280px',
								}}
								src={img}
								alt=""
							/>
							<img
								style={{
									height: '100%',
									width: '280px',
								}}
								src={img}
								alt=""
							/>
							<img
								style={{
									height: '100%',
									width: '280px',
								}}
								src={img}
								alt=""
							/>
						</ReactSlidy>
					</div>
				)}
			</div>
			{calendarOpen && (
				<div className={styles.calendarContainer}>
					<div className={styles.calendarDiv}>
						<input type="date" />
						<input type="date" />
						<button
							type="button"
							className={styles.calendarButton}
							onClick={() => {
								console.log('Botón clickeado');
							}}
						>
							Consultar Disponibilidad
						</button>
					</div>
				</div>
			)}
			<div className={styles.productFooter}>
				<div className={styles.productFooterItems}>
					<IoDiamondOutline />
					<h2 className={styles.productFooterH2}>Categoria</h2>
				</div>
				<div className={styles.productFooterItems}>
					<IoCutOutline />
					<h2 className={styles.productFooterH2}>Caracteristica</h2>
				</div>
				<div className={styles.productFooterItems}>
					<IoShirtOutline />
					<h2 className={styles.productFooterH2}>Talles</h2>
				</div>
				{/* <Reservation /> */}
				<div className="">
					<button
						type="button"
						className={styles.descriptionButton}
						onClick={handleCalendarToggle}
					>
						{!calendarOpen ? 'Reserva' : 'Cerrar'}
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductDetail;
