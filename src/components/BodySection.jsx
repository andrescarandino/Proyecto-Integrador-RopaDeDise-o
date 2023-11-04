import styles from '../styles/bodySection.module.css';
import elegante from '../img/elegante.png';
import casual from '../img/casual.png';
import creativo from '../img/creativo.png';
import dramatico from '../img/dramatico.png';
import sexy from '../img/sexy.png';
import romantico from '../img/romantico.png';
import tradicional from '../img/tradicional.png';
import vintage from '../img/vintage.png';

function BodySection() {
	return (
		<div className={styles.sectionContainer}>
			<div className={styles.sectionFila}>
				<div className={styles.sectionCard}>
					<img src={elegante} alt="Categoría de ropa elegante" />
					<button type="button" className={styles.sectionButton}>
						Elegante
					</button>
				</div>
				<div className={styles.sectionCard}>
					<img src={sexy} alt="Categoría de ropa sexy" />
					<button type="button" className={styles.sectionButton}>
						Sexy
					</button>
				</div>
			</div>

			<div className={styles.sectionFila}>
				<div className={styles.sectionCard}>
					<img src={casual} alt="Categoría de ropa casual" />
					<button type="button" className={styles.sectionButton}>
						Casual
					</button>
				</div>
				<div className={styles.sectionCard}>
					<img src={romantico} alt="Categoría de ropa 'romántico'" />
					<button type="button" className={styles.sectionButton}>
						Romántico
					</button>
				</div>
			</div>

			<div className={styles.sectionFila}>
				<div className={styles.sectionCard}>
					<img src={creativo} alt="Categoría de ropa creativo" />
					<button type="button" className={styles.sectionButton}>
						Creativo
					</button>
				</div>
				<div className={styles.sectionCard}>
					<img
						src={tradicional}
						alt="Categoría de ropa tradicional"
					/>
					<button type="button" className={styles.sectionButton}>
						Tradicional
					</button>
				</div>
			</div>

			<div className={styles.sectionFila}>
				<div className={styles.sectionCard}>
					<img src={dramatico} alt="Categoría de ropa dramático" />
					<button type="button" className={styles.sectionButton}>
						Dramático
					</button>
				</div>
				<div className={styles.sectionCard}>
					<img src={vintage} alt="Categoría de ropa vintage" />
					<button type="button" className={styles.sectionButton}>
						Vintage
					</button>
				</div>
			</div>
		</div>
	);
}

export default BodySection;
