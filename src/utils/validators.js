const isUrl = (url) => {
	const regexp =
		/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
	return regexp.test(url);
};

// eslint-disable-next-line import/prefer-default-export
export { isUrl };
