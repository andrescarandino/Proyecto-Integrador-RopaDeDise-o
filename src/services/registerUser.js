const ENDPOINT = 'http://localhost:8080/usuarios';

// eslint-disable-next-line consistent-return
const registerUser = async (data) => {
	console.log(data);
	try {
		const response = await fetch(ENDPOINT, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});
		const result = await response.text();
		return result;
	} catch (error) {
		console.log(error);
	}
};

export default registerUser;
