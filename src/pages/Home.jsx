import { useState } from 'react';
import styles from '../styles/home.module.css';
import Search from '../components/Search';
import BodyMain from '../components/BodyMain';
import BodySection from '../components/BodySection';
import BodySearchOne from '../components/BodySearchOne';
import BodySearchTwo from '../components/BodySearchTwo';
import BodyRecomendadoOne from '../components/BodyRecomendadoOne';
import BodyRecomendadoTwo from '../components/BodyRecomendadoTwo';
import Pagination from '../components/Pagination';
import MockData from '../../MOCK_DATA.json';
import _ from 'underscore';

function Home() {
	// eslint-disable-next-line no-unused-vars
	const [productQt, setProductQt] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);
	const indexFin = currentPage * productQt;
	const indexIni = indexFin - productQt;
	const nProducts = _.shuffle(MockData.slice(indexIni, indexFin));

	

	const nPages = Math.ceil(MockData.length / productQt);
	return (
		<div className={styles.bodyHome}>
			<Search />
			<div>
				<div className={styles.bodyProducts}>
					<BodySearchOne data={nProducts} />
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
