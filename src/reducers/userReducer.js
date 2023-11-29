const userReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				isAuthenticated: true,
				token: action.payload.token,
			};
		case 'LOGOUT':
			return {
				isAuthenticated: false,
			};

		default:
			return state;
	}
};

export default userReducer;
