const ENDPOINT = 'http://3.15.203.13:8080/usuarios';

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
