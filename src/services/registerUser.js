const ENDPOINT = 'http://localhost:8080/usuarios';

// eslint-disable-next-line consistent-return
const registerUser = async (data) => {
	try {
		const response = await fetch(ENDPOINT, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});
		// const result = response.json();
		console.log(response);
		return response;
	} catch (error) {
		console.log(error.message);
		return error.message;
	}
};

export default registerUser;
