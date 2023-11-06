import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import routes from './routes/routes';
import Spinner from './components/Spinner';
import './styles/index.css';
import { ToastContextProvider } from './contexts/ToastContext';

function App() {
	return (
		<Suspense fallback={<Spinner />}>
			<ToastContextProvider>
				<Routes>
					<Route path="/" element={<Layout />}>
						{routes.map((route) => {
							return (
								<Route
									key={route.path}
									path={route.path}
									element={<route.element />}
									index={route?.index}
								/>
							);
						})}
					</Route>
				</Routes>
			</ToastContextProvider>
		</Suspense>
	);
}

export default App;
