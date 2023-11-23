/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

const useFetch = (url, options) => {
	const [loading, setLoading] = React.useState(false);
	const [response, setResponse] = React.useState(null);
	const [error, setError] = React.useState(null);

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const res = await fetch(url, { ...options });
				const json = await res.json();
				setResponse(json);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	return { loading, response, error };
};

export default useFetch;
