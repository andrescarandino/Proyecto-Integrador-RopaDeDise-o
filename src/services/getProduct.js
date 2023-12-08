const getProduct = async () => {
	try {
		const response = await fetch('http://3.15.203.13:8080/productos', {
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

export default getProduct;
