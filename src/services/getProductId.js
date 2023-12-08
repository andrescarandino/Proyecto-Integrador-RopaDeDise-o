const getProductId = async (id) => {
	try {
		const response = await fetch(
			`http://3.15.203.13:8080/productos/${id}`,
			{
				method: 'GET',
				headers: {
					'Content-type': 'application/json',
				},
			},
		);
		const result = await response.json();
		console.log(result);
		return result;
	} catch (error) {
		// eslint-disable-next-line no-unused-expressions
		error.message;
	}
};

export default getProductId;
