/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import { createContext, useReducer } from 'react';
import userReducer from '../reducers/userReducer';

export const UserContext = createContext();

const initialState = {
	isAuthenticated: false,
	token: null,
};

const init = () => {
	// const user = JSON.parse(localStorage.getItem('user'));
	const token = JSON.parse(localStorage.getItem('token'));

	return {
		isAuthenticated: !!token,
		// user: user || null,
		token: token || null,
	};
};

export function UserContextProvider({ children }) {
	const [state, dispatch] = useReducer(userReducer, initialState, init);

	const login = (token) => {
		const action = {
			type: 'LOGIN',
			payload: { token },
		};

		// localStorage.setItem('user', JSON.stringify(user));
		localStorage.setItem('token', JSON.stringify(token));

		dispatch(action);
	};

	const logout = () => {
		localStorage.clear();
		const action = { type: 'LOGOUT' };
		dispatch(action);
	};

	return (
		<UserContext.Provider value={{ state, dispatch, login, logout }}>
			{children}
		</UserContext.Provider>
	);
}

UserContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
