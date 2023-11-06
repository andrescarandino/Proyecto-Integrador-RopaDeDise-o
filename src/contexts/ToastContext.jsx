import PropTypes from 'prop-types';
import { createContext, useMemo, useReducer } from 'react';
// eslint-disable-next-line import/no-cycle
import ToastsContainer from '../components/toast/ToastContainer';
import toastReducer from '../reducers/toastReducer';

export const ToastContext = createContext();

const initialState = {
	toasts: [],
};

export function ToastContextProvider({ children }) {
	const [state, dispatch] = useReducer(toastReducer, initialState);
	const addToast = (type, message) => {
		const id = Math.floor(Math.random() * 10000000);
		dispatch({ type: 'ADD_TOAST', payload: { id, message, type } });
	};

	const value = useMemo(() => {
		const success = (message) => {
			addToast('success', message);
		};

		const warning = (message) => {
			addToast('warning', message);
		};

		const info = (message) => {
			addToast('info', message);
		};

		const error = (message) => {
			addToast('error', message);
		};

		const remove = (id) => {
			dispatch({ type: 'DELETE_TOAST', payload: id });
		};

		return {
			success,
			warning,
			info,
			error,
			remove,
		};
	}, []);

	return (
		<ToastContext.Provider value={value}>
			<ToastsContainer toasts={state.toasts} position="top-right" />
			{children}
		</ToastContext.Provider>
	);
}

ToastContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
