import { useEffect, useState } from 'react';
import _ from 'underscore';
// import MockData from '../../MOCK_DATA.json';
import BodyMain from '../components/BodyMain';
import BodyRecomendadoOne from '../components/BodyRecomendadoOne';
import BodyRecomendadoTwo from '../components/BodyRecomendadoTwo';
import BodySearchOne from '../components/BodySearchOne';
import BodySearchTwo from '../components/BodySearchTwo';
import BodySection from '../components/BodySection';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import styles from '../styles/home.module.css';
import imgConectando from '../img/imgConectando.png';
import getProduct from '../services/getProduct';

function Home() {
	// eslint-disable-next-line no-unused-vars
	const [productQt, setProductQt] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);
	const [productData, setProductData] = useState([]);
	// const [loading, setLoading] = useState(false);
	const indexFin = currentPage * productQt;
	const indexIni = indexFin - productQt;
	const nProducts = _.shuffle(productData.slice(indexIni, indexFin));
	const nPages = Math.ceil(productData.length / productQt);
	const noProduct = [
		{
			imagenes: [{ ruta: imgConectando }],
			description: '...conectando',
		},
	];
	useEffect(() => {
		const product = async () => {
			const res = await getProduct();
			// setLoading(true);
			setProductData(res);
			console.log(res);
		};
		product();
	}, []);
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
