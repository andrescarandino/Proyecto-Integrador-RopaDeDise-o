import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Search from '../components/Search';
import BodySection from '../components/BodySection';
import searchProduct from '../services/searchProduct';

function ProductSearch() {
	const [product, setProduct] = useState([]);
	const [params] = useSearchParams();
	const data = params.get('prenda');
	console.log(data);

	useEffect(() => {
		const response = async () => {
			const productData = await searchProduct(data);
			setProduct(productData);
		};
		response();
	}, [data]);
	return (
		<div>
			<Search />
			{product &&
				product.map((x) => (
					<div key={x.idProductos}>
						<h2>{x.nombre}</h2>
						<p>{x.descripcion}</p>
					</div>
				))}
			<BodySection />
		</div>
	);
}

export default ProductSearch;
