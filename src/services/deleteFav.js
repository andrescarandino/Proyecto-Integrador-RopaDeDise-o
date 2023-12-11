const deleteFav = async (userId, productId, token) => {
    console.log(userId,productId,token)
	try {
		const response = await fetch(
			`http://3.15.203.13:8080/favoritos?usuario=${userId}&producto=${productId}`,
			{
				method: 'DELETE',
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

export default deleteFav;
