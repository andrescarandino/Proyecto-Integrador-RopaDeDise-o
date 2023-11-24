import { createContext, useReducer } from 'react';
import userReducer from '../reducers/userReducer';

export const UserContext = createContext();

const initialState = {
	isAuthenticated: false,
	user: null,
	token: null,
};

// eslint-disable-next-line react/prop-types
export function UserContextProvider({ children }) {
	const [state, dispatch] = useReducer(userReducer, initialState);
	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<UserContext.Provider value={{ state, dispatch }}>
			{children}
		</UserContext.Provider>
	);
}
