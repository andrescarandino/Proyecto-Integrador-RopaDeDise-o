/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import styles from '../styles/bodySection.module.css';
import getCategory from '../services/getCategory';

function BodySection() {
	const [categoryData, setCategoryData] = useState();
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
								src={x.imagenes[0].ruta}
								alt="Categoría de ropa elegante"
							/>
							<button
								type="button"
								className={styles.sectionButton}
							>
								{x.nombre}
							</button>
						</div>
					</div>
				))}
		</div>
	);
}

export default BodySection;
