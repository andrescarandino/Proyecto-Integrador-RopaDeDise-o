// eslint-disable-next-line consistent-return
const getUser = async (mail, token) => {
	try {
		const response = await fetch(
			`http://localhost:8080/usuarios/buscar?mail=${mail}`,
			{
				method: 'GET',
				headers: {
					'Content-type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			},
		);
		const result = await response.json();
		console.log(result);
		return result;
	} catch (error) {
		console.log(error);
	}
};

export default getUser;
