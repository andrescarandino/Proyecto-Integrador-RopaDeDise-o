/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

const useFetch = (url, options) => {
	const [loading, setLoading] = React.useState(false);
	const [response, setResponse] = React.useState(null);
	const [error, setError] = React.useState(null);
	const [abort, setAbort] = React.useState(() => {});

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const abortController = new AbortController();
				const { signal } = abortController;
				setAbort(abortController.abort);
				const res = await fetch(url, { ...options, signal });
				const json = await res.json();
				setResponse(json);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
		return () => {
			abort();
		};
	}, []);

	return { loading, response, error, abort };
};

export default useFetch;
