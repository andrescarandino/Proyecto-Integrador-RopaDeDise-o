const productList = async (params) => {
	const url = `http://localhost:8080/productos`;
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

export default productList;