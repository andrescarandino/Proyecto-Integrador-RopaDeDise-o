const getCategory = async () => {
	try {
		const response = await fetch('http://localhost:8080/categorias', {
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

export default getCategory;
