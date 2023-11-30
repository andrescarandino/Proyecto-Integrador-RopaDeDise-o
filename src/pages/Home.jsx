import { useState } from 'react';
import _ from 'underscore';
import MockData from '../../MOCK_DATA.json';
import BodyMain from '../components/BodyMain';
import BodyRecomendadoOne from '../components/BodyRecomendadoOne';
import BodyRecomendadoTwo from '../components/BodyRecomendadoTwo';
import BodySearchOne from '../components/BodySearchOne';
import BodySearchTwo from '../components/BodySearchTwo';
import BodySection from '../components/BodySection';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import styles from '../styles/home.module.css';
import NoProduct from '../img/noProduct.png';

function Home() {
	// eslint-disable-next-line no-unused-vars
	const [productQt, setProductQt] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);
	const indexFin = currentPage * productQt;
	const indexIni = indexFin - productQt;
	const nProducts = _.shuffle(MockData.slice(indexIni, indexFin));
	const nPages = Math.ceil(MockData.length / productQt);
	const noProduct = [
		{
			image_url: NoProduct,
			description: 'No hay productos en la Base de Datos',
		},
	];

	return (
		<div className={styles.bodyHome}>
			<Search />
			<div>
				<div className={styles.bodyProducts}>
					<BodySearchOne
						data={nProducts.length === 0 ? noProduct : nProducts}
					/>
					<BodyRecomendadoOne data={nProducts} />
				</div>
				<div className={styles.bodyProductsTwo}>
					<BodyRecomendadoTwo data={nProducts} />
					<BodySearchTwo data={nProducts} />
				</div>
			</div>

			<Pagination
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
				nPages={nPages}
			/>
			<BodyMain />
			<BodySection />
		</div>
	);
}

export default Home;
