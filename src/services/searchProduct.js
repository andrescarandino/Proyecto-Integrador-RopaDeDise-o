// eslint-disable-next-line consistent-return
const searchProduct = async (params) => {
	const url = `http://3.15.203.13:8080/productos/buscar/${params}`;
	try {
		const response = await fetch(url, {
			method: 'GET',
		});
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
	}
};

export default searchProduct;
