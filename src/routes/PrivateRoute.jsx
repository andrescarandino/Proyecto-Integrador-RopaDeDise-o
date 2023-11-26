import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

function PrivateRoute({ children }) {
	const { isAuthenticated } = useContext(UserContext);
	return isAuthenticated ? children : <Navigate to="/users/login" />;
}

PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
};

export default PrivateRoute;
