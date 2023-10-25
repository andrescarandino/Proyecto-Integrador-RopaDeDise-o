import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import routes from './routes/routes';
import Spinner from './components/Spinner';
import './styles/index.css';

function App() {
	return (
		<Suspense fallback={<Spinner />}>
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
		</Suspense>
	);
}

export default App;
