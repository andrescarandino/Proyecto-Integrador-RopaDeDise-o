import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import ReactSlidy from 'react-slidy';
import styles from '../styles/productDetail.module.css';
import MockData from '../../MOCK_DATA.json';

function ProductDetail() {
	const [slidyActive, setSlidyActive] = useState(false);
	const params = useParams();
	const { id } = params;
	const img = MockData[id - 1].image_url;
	const { description } = MockData[id - 1];

	const handleSlidy = () => {
		setSlidyActive(!slidyActive);
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
		</div>
	);
}

export default ProductDetail;
