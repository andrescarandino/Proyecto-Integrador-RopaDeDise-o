/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/bodySection.module.css';
import getCategory from '../services/getCategory';
import noImg from '../img/noImg.png';

function BodySection() {
	const [categoryData, setCategoryData] = useState([]);
	const [loading, setLoading] = useState();
	useEffect(() => {
		const product = async () => {
			const res = await getCategory();
			setCategoryData(res);
			setLoading(true);
			console.log(res);
		};
		product();
	}, []);
	return (
		<div className={styles.sectionContainer}>
			{loading &&
				categoryData.map((x, index) => (
					<div key={index} className={styles.sectionFila}>
						<div className={styles.sectionCard}>
							<img
								src={
									// x.imagenes.lenght > 0
									x.imagenes[0].ruta
									// : noImg
								}
								alt="Categoría de ropa elegante"
							/>
							<Link
								to={`categorias/${x.idCategorias}`}
								className={styles.sectionButton}
							>
								{x.nombre}
							</Link>
						</div>
					</div>
				))}
		</div>
	);
}

export default BodySection;
