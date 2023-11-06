import { useState } from 'react';

const useCreateProduct = () => {
	const [dataState, setDataState] = useState();
	const [statusCode, setStatusCode] = useState();
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async (data) => {
		try {
			setIsLoading(true);
			const URL = 'https://api.escuelajs.co/api/v1/products';

			const formData = new FormData();

			Object.entries(data).forEach((value, key) => {
				if (key === 'images') {
					value.forEach((image) => {
						formData.append('images', image);
					});
				}

				formData.append(key, value);
			});

			const response = await fetch(URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: formData,
			});

			const result = await response.json();

			setStatusCode(response.status);
			setDataState(result);
			setIsLoading(false);
		} catch (error) {
			throw new Error(error);
		}
	};

	return {
		dataState,
		statusCode,
		isLoading,
		onSubmit,
	};
};

export default useCreateProduct;
