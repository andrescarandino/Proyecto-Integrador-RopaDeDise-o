import { Link, useParams } from 'react-router-dom';
import styles from '../styles/productDetail.module.css';
import MockData from '../../MOCK_DATA.json';

function ProductDetail() {
	const params = useParams();
	const { id } = params;
	const img = MockData[id - 1].image_url;
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
						<img src={img} alt="" />
					</div>
					<div className={styles.descriptionImg}>
						<img src={img} alt="" />
						<img src={img} alt="" />
						<img src={img} alt="" />
						<img src={img} alt="" />
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
