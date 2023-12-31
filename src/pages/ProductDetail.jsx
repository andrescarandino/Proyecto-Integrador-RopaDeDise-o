import { Link } from 'react-router-dom';
import styles from '../styles/productDetail.module.css';
import img1 from '../img/img1.png';

function ProductDetail() {
	return (
		<div className={styles.productContainer}>
			<div className={styles.productHeader}>
				<h2 className={styles.productH2}>Titulo del Producto</h2>
				<button type="button" className={styles.productButton}>
					<Link to="/" className={styles.productLink}>
						volver
					</Link>
				</button>
			</div>
			<div className={styles.descriptionDivContainer}>
				<div className={styles.descriptionContainer}>
					<div className={styles.descriptionBigImg}>
						<img src={img1} alt="" />
					</div>
					<div className={styles.descriptionImg}>
						<img src={img1} alt="" />
						<img src={img1} alt="" />
						<img src={img1} alt="" />
						<img src={img1} alt="" />
					</div>
				</div>
				<div className={styles.descriptionP}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Aliquam vestibulum morbi blandit cursus.
						Enim sed faucibus turpis in eu mi bibendum.
					</p>
					<div className={styles.descriptionFooter}>
						<h4>$00,00</h4>
						<button
							type="button"
							className={styles.descriptionButton}
						>
							<Link to="/" className={styles.productLink}>
								ver mas
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductDetail;
