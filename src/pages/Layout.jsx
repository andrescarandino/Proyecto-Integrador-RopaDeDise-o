/* eslint-disable no-nested-ternary */
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useWindowDimensions } from '../hooks';
import Wsp from '../components/Wsp';

function Layout() {
	const { pathname } = useLocation();
	const { width } = useWindowDimensions();

	return pathname.includes('admin') ? (
		width > 768 ? (
			<div>
				<Header />
				<Outlet />
				<Footer />
			</div>
		) : (
			<div
				style={{
					display: 'grid',
					placeItems: 'center',
					height: '100vh',
					width: '100vw',
					fontSize: '1.5rem',
					fontWeight: 'bold',
					fontFamily: 'var(--ff-roboto)',
				}}
			>
				<p
					style={{
						textAlign: 'center',
						color: 'red',
						width: '75%',
					}}
				>
					🎈 No es posible acceder al panel administrativo desde un
					dispositivo móvil.
				</p>
			</div>
		)
	) : (
		<div>
			<Header />
			<Outlet />
			<Wsp />
			<Footer />
		</div>
	);
}

export default Layout;
