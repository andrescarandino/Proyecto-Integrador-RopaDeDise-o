import { useContext, useEffect, useState } from 'react';
import { IoIosClose, IoMdShare } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import ReactSlidy from 'react-slidy';
import {
	IoDiamondOutline,
	IoCutOutline,
	IoShirtOutline,
} from 'react-icons/io5';
import styles from '../styles/productDetail.module.css';
import Social from './Social';
import getProductId from '../services/getProductId';
import noImg from '../img/noImg.png';
import Calendar from '../components/Calendar';
import { UserContext } from '../contexts/UserContext';
import Wsp from '../components/Wsp';

function ProductDetail() {
	const { state } = useContext(UserContext);
	const [slidyActive, setSlidyActive] = useState(false);
	const [calendarOpen, setCalendarOpen] = useState(false);
	const [socialOpen, setSocialOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [product, setProduct] = useState([]);
	const userActive = state.isAuthenticated;
	const params = useParams();
	const { id } = params;
	const handleSlidy = () => {
		setSlidyActive(!slidyActive);
	};
	const handleCalendarToggle = () => {
		setCalendarOpen(!calendarOpen);
	};
	const handleSocialToggle = () => {
		setSocialOpen(!socialOpen);
	};
	useEffect(() => {
		const productId = async () => {
			const res = await getProductId(id);
			setProduct(res);
			setLoading(true);
		};
		productId();
	}, []);

	return (
		<div className={styles.productContainer}>
			<div className={styles.productHeader}>
				<h2 className={styles.productH2}>{product.nombre}</h2>
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
					<img
						src={
							loading && product.imagenes.length > 0
								? product.imagenes[0].ruta
								: noImg
						}
						alt=""
					/>
				</div>
				<div className={styles.descriptionImg}>
					<img
						src={
							loading && product.imagenes.length > 1
								? product.imagenes[1].ruta
								: noImg
						}
						alt=""
					/>
					<img
						src={
							loading && product.imagenes.length > 2
								? product.imagenes[2].ruta
								: noImg
						}
						alt=""
					/>
					<img
						src={
							loading && product.imagenes.length > 3
								? product.imagenes[3].ruta
								: noImg
						}
						alt=""
					/>
					<img
						src={
							loading && product.imagenes.length > 4
								? product.imagenes[4].ruta
								: noImg
						}
						alt=""
					/>
				</div>
				<div className={styles.descriptionP}>
					<p>{product.descripcion}</p>
					<div className={styles.descriptionFooter}>
						<h4>${product.precio}</h4>
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
								src={
									loading && product.imagenes.length > 0
										? product.imagenes[0].ruta
										: noImg
								}
								alt=""
							/>
							<img
								style={{
									height: '100%',
									width: '280px',
								}}
								src={
									loading && product.imagenes.length > 1
										? product.imagenes[1].ruta
										: noImg
								}
								alt=""
							/>
							<img
								style={{
									height: '100%',
									width: '280px',
								}}
								src={
									loading && product.imagenes.length > 2
										? product.imagenes[2].ruta
										: noImg
								}
								alt=""
							/>
							<img
								style={{
									height: '100%',
									width: '280px',
								}}
								src={
									loading && product.imagenes.length > 3
										? product.imagenes[3].ruta
										: noImg
								}
								alt=""
							/>
							<img
								style={{
									height: '100%',
									width: '280px',
								}}
								src={
									loading && product.imagenes.length > 4
										? product.imagenes[4].ruta
										: noImg
								}
								alt=""
							/>
						</ReactSlidy>
					</div>
				)}
			</div>
			{calendarOpen && <Calendar id={id} />}
			<div className={styles.productFooter}>
				<div className={styles.productFooterItems}>
					<IoDiamondOutline />
					<h2 className={styles.productFooterH2}>
						{loading && product.categorias.nombre}
					</h2>
				</div>
				<div className={styles.productFooterItems}>
					<IoCutOutline />
					<h2 className={styles.productFooterH2}>algodón</h2>
				</div>
				<div className={styles.productFooterItems}>
					<IoShirtOutline />
					<h2 className={styles.productFooterH2}>Talles</h2>
				</div>
				<div className="">
					{userActive && (
						<button
							type="button"
							className={styles.descriptionButton}
							onClick={handleCalendarToggle}
						>
							{!calendarOpen ? 'Reserva' : 'Cerrar'}
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default ProductDetail;
