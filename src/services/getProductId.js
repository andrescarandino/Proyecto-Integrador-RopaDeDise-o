const getProductId = async (id) => {
	try {
		const response = await fetch(`http://localhost:8080/productos${id}`, {
			method: 'GET',
			mode: 'no-cors',
			headers: {
				'Content-type': 'application/json',
			},
		});
		const result = await response.text();
		console.log(result);
		return response;
	} catch (error) {
		// eslint-disable-next-line no-unused-expressions
		error.message;
	}
};

export default getProductId;
