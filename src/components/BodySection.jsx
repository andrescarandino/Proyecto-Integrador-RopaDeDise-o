/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/bodySection.module.css';
import getCategory from '../services/getCategory';
import noImg from '../img/noImg.png';
import categoria_abrigo from '../img/categoria_abrigo.png'
import categoria_blusa from '../img/categoria_blusa.png'
import categoria_camisa from '../img/categoria_camisa.png'
import categoria_camiseta from '../img/categoria_camiseta.png'
import categoria_jeans from '../img/categoria_jeans.png'
import categoria_opcional_fiesta from '../img/categoria_opcional_fiesta.png'
import categoria_saco from '../img/categoria_saco.png'
import categoria_vestido from '../img/categoria_vestido.png'


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
			{/* {loading &&
				categoryData.map((x) => (
					<div key={x.idCategorias} className={styles.sectionFila}>
						<div className={styles.sectionCard}>
							<img
								src={x.imagenes[0].ruta}
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
				))} */}
			<div className={styles.sectionFila}>
				<div className={styles.sectionCard}>
					<img
						src={categoria_abrigo}
						alt="Categoría de ropa elegante"
					/>
					<Link
						to={`categorias/${''}`}
						className={styles.sectionButton}
					>
						ABRIGO
					</Link>
				</div>
			</div>
			<div className={styles.sectionFila}>
				<div className={styles.sectionCard}>
					<img
						src={categoria_blusa}
						alt="Categoría de ropa elegante"
					/>
					<Link
						to={`categorias/${''}`}
						className={styles.sectionButton}
					>
						BLUSA
					</Link>
				</div>
			</div>
			<div className={styles.sectionFila}>
				<div className={styles.sectionCard}>
					<img
						src={categoria_camisa}
						alt="Categoría de ropa elegante"
					/>
					<Link
						to={`categorias/${''}`}
						className={styles.sectionButton}
					>
						CAMISA
					</Link>
				</div>
			</div>
			<div className={styles.sectionFila}>
				<div className={styles.sectionCard}>
					<img
						src={categoria_camiseta}
						alt="Categoría de ropa elegante"
					/>
					<Link
						to={`categorias/${''}`}
						className={styles.sectionButton}
					>
						CAMISETA
					</Link>
				</div>
			</div>
			<div className={styles.sectionFila}>
				<div className={styles.sectionCard}>
					<img
						src={categoria_jeans}
						alt="Categoría de ropa elegante"
					/>
					<Link
						to={`categorias/${''}`}
						className={styles.sectionButton}
					>
						JEANS
					</Link>
				</div>
			</div>
			<div className={styles.sectionFila}>
				<div className={styles.sectionCard}>
					<img
						src={categoria_opcional_fiesta}
						alt="Categoría de ropa elegante"
					/>
					<Link
						to={`categorias/${''}`}
						className={styles.sectionButton}
					>
						FIESTA
					</Link>
				</div>
			</div>
			<div className={styles.sectionFila}>
				<div className={styles.sectionCard}>
					<img
						src={categoria_saco}
						alt="Categoría de ropa elegante"
					/>
					<Link
						to={`categorias/${''}`}
						className={styles.sectionButton}
					>
						SACO
					</Link>
				</div>
			</div>
			<div className={styles.sectionFila}>
				<div className={styles.sectionCard}>
					<img
						src={categoria_vestido}
						alt="Categoría de ropa elegante"
					/>
					<Link
						to={`categorias/${''}`}
						className={styles.sectionButton}
					>
						VESTIDO
					</Link>
				</div>
			</div>
		</div>
	);
}

export default BodySection;
