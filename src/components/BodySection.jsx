/* eslint-disable react/no-array-index-key */
import styles from '../styles/bodySection.module.css';
import Abrigo from '../img/categoria_abrigo.png';
import Blusa from '../img/categoria_blusa.png';
import Camisa from '../img/categoria_camisa.png';
import Camiseta from '../img/categoria_camiseta.png';
import Pantalon from '../img/categoria_pantalon.png';
import Jeans from '../img/categoria_jeans.png';
import Saco from '../img/categoria_saco.png';
import Vestido from '../img/categoria_vestido.png';

const categoria = [
	{
		img: Abrigo,
		nombre: 'Abrigo',
	},
	{
		img: Blusa,
		nombre: 'Blusa',
	},
	{
		img: Camisa,
		nombre: 'Camisa',
	},
	{
		img: Camiseta,
		nombre: 'Camiseta',
	},
	{
		img: Pantalon,
		nombre: 'Pantalon',
	},
	{
		img: Jeans,
		nombre: 'Jeans',
	},
	{
		img: Saco,
		nombre: 'Saco',
	},
	{
		img: Vestido,
		nombre: 'Vestido',
	},
];
function BodySection() {
	return (
		<div className={styles.sectionContainer}>
			{categoria.map((x, index) => (
				<div key={index} className={styles.sectionFila}>
					<div className={styles.sectionCard}>
						<img src={x.img} alt="Categoría de ropa elegante" />
						<button type="button" className={styles.sectionButton}>
							{x.nombre}
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default BodySection;
