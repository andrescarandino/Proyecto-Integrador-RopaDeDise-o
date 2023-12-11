import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import getProduct from '../services/getProduct';
import styles from '../styles/categoryDetail.module.css';

function CategoryDetail() {
	const [productData, setProductData] = useState([]);
	const [loading, setLoading] = useState(false);
	// const params = useParams();
	const { id } = useParams();
	const productCategory = productData.filter((productData) => {
		return productData.categorias.idCategorias === JSON.parse(id);
	});
	console.log(productCategory);
	useEffect(() => {
		const product = async () => {
			const res = await getProduct();
			setProductData(res);
			setLoading(true);
		};
		product();
	}, []);
	return (
		<div className={styles.categoryBody}>
			{loading &&
				productCategory.map((x) => (
					<div
						key={x.idProductos}
						className={styles.categoryContainer}
					>
						<img src={x.imagenes[0].ruta} alt="" />
						<Link
							to={`/product/${x.idProductos}`}
							className={styles.categoryLink}
						>
							{x.nombre}
						</Link>
					</div>
				))}
		</div>
	);
}

export default CategoryDetail;
