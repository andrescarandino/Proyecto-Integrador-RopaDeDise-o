// import useFetch from './useFetch';

const useGetProduct = () => {
	 const { loading, response } = useFetch('http://localhost:3000/products');

	 console.log(loading, response);

	const product = {
		name: 'Name',
		description: 'Description',
		images: [
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Panoramic_santiago_bernabeu.jpg/1200px-Panoramic_santiago_bernabeu.jpg',
		],
		features: ['Feature 1', 'Feature 2', 'Feature 3'],
		category: 1,
	};

	return {
		product,
	};
};

export default useGetProduct;
