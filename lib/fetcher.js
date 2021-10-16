const fetcher = async (url) => {
	const res = await fetch(url);

	if (!res.ok) {
		const error = new Error('An error occurred while fetching data.');
		const errorData = await res.json();
		error.info = errorData.message;
		error.status = errorData.status;
		throw error;
	}
	return res.json();
};

export default fetcher;
