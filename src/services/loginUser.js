// eslint-disable-next-line consistent-return
const loginUser = async (data) => {
	try {
		const response = await fetch('http://localhost:8080/login', {
			method: 'POST',
			// mode: 'no-cors',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const result = await response.json();
		console.log(result);
		return result.jwt;
	} catch (error) {
		console.log(error);
	}
};

export default loginUser;
