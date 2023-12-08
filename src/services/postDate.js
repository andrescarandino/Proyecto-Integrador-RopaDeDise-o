// eslint-disable-next-line consistent-return
const postDate = async (reservaData, token) => {
	try {
		const response = await fetch('http://3.15.203.13:8080/reserva', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(reservaData),
		});
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
	}
};

export default postDate;
