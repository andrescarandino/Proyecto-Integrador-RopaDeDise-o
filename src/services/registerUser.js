const ENDPOINT = 'http://localhost:8080/usuario';

// eslint-disable-next-line consistent-return
const registerUser = async (user) => {
	try {
		const response = await fetch(ENDPOINT, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user),
		});
		const result = await response.text();
		return result;
	} catch (error) {
		console.log(error);
	}
};

export default registerUser;
