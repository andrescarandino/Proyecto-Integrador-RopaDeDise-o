// eslint-disable-next-line consistent-return
const searchProduct = async (keyword) => {
	const url = `http://localhost:8080/productos/buscar/${keyword}`;
	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
			},
		});
		const result = await response.json();
		console.log(result);
		return result;
	} catch (error) {
		console.log(error);
	}
};

export default searchProduct;
