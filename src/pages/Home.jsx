import { useEffect, useState } from 'react';
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
import imgConectando from '../img/imgConectando.png';
import getProduct from '../services/getProduct';
import Wsp from '../components/Wsp';
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import img4 from '../img/img4.png';
import img5 from '../img/img5.png';
import img6 from '../img/img6.png';
import img7 from '../img/img7.png';
import img8 from '../img/img8.png';
import recomendado1 from '../img/recomendado.png';
import recomendado2 from '../img/recomendado2.png';

function Home() {
	// eslint-disable-next-line no-unused-vars
	const [productQt, setProductQt] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);
	const [productData, setProductData] = useState([]);
	// const [loading, setLoading] = useState(false);
	const indexFin = currentPage * productQt;
	const indexIni = indexFin - productQt;
	const nProducts = _.shuffle(MockData.slice(indexIni, indexFin));
	const nPages = Math.ceil(MockData.length / productQt);
	const DataProduct1 = [
		{
			id: 1,
			name: 'silk dress',
			description: 'Timeless ivory lace wedding gown',
			email: 'Used',
			rating: 2.5,
			image_url: img1,
		},
		{
			id: 2,
			name: 'silk dress',
			description: 'Timeless ivory lace wedding gown',
			email: 'Used',
			rating: 2.5,
			image_url: img2,
		},
		{
			id: 3,
			name: 'silk dress',
			description: 'Timeless ivory lace wedding gown',
			email: 'Used',
			rating: 2.5,
			image_url: img3,
		},
		{
			id: 4,
			name: 'silk dress',
			description: 'Timeless ivory lace wedding gown',
			email: 'Used',
			rating: 2.5,
			image_url: img4,
		},
	];

	const DataProduct2 = [
		{
			id: 5,
			name: 'silk dress',
			description: 'Timeless ivory lace wedding gown',
			email: 'Used',
			rating: 2.5,
			image_url: img5,
		},
		{
			id: 6,
			name: 'silk dress',
			description: 'Timeless ivory lace wedding gown',
			email: 'Used',
			rating: 2.5,
			image_url: img6,
		},
		{
			id: 7,
			name: 'silk dress',
			description: 'Timeless ivory lace wedding gown',
			email: 'Used',
			rating: 2.5,
			image_url: img7,
		},
		{
			id: 8,
			name: 'silk dress',
			description: 'Timeless ivory lace wedding gown',
			email: 'Used',
			rating: 2.5,
			image_url: img8,
		},
	];

	const DataRecomendado = [
		{
			id: 1,
			name: 'silk dress',
			description: 'Timeless ivory lace wedding gown',
			email: 'Used',
			rating: 2.5,
			image_url: recomendado1,
		},
	];
	const DataRecomendado2 = [
		{
			id: 1,
			name: 'silk dress',
			description: 'Timeless ivory lace wedding gown',
			email: 'Used',
			rating: 2.5,
			image_url: recomendado2,
		},
	];
	// const noProduct = [
	// 	{
	// 		imagenes: [{ ruta: imgConectando }],
	// 		description: '...conectando',
	// 	},
	// ];
	// useEffect(() => {
	// 	const product = async () => {
	// 		const res = await getProduct();
	// 		// setLoading(true);
	// 		setProductData(res);
	// 		console.log(res);
	// 	};
	// 	product();
	// }, []);
	return (
		<div className={styles.bodyHome}>
			<Search />
			<div>
				<div className={styles.bodyProducts}>
					<BodySearchOne data={DataProduct1} />
					<BodyRecomendadoOne data={DataRecomendado} />
				</div>
				<div className={styles.bodyProductsTwo}>
					<BodyRecomendadoTwo data={DataRecomendado2} />
					<BodySearchTwo data={DataProduct2} />
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
