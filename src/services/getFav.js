const getFav = async (userId, token) => {
	try {
		const response = await fetch(
			`http://3.15.203.13:8080/favoritos?usuario=${userId}`,
			{
				method: 'GET',
				headers: {
					'Content-type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			},
		);
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
	}
};

export default getFav;
