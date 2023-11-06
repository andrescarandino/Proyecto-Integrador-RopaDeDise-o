/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
	IconArrowNarrowRight,
	IconBuildingStore,
	IconUserFilled,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import * as createProductStyles from '../../styles/admin/createProduct.module.css';
import * as menuStyles from '../../styles/admin/menu.module.css';
import { useWindowDimensions } from '../../hooks';

function AdminHome() {
	const navigate = useNavigate();
	const { width } = useWindowDimensions();

	const goToCreateProduct = () => {
		navigate('/admin/products/create');
	};

	return width > 768 ? (
		<div className={createProductStyles.container}>
			<header className={createProductStyles.headerContainer}>
				<h2 className={createProductStyles.title}>
					Panel de administración
				</h2>
			</header>
			<section className={createProductStyles.sectionContainer}>
				<p className={createProductStyles.sectionDescription}>
					Estimado administrador. A continuación encontrarás el
					listado de todas las funcionalidades de este panel
					administrativo.
				</p>

				<nav className={menuStyles.navigation}>
					<ul className={menuStyles.itemsContainer}>
						<li
							className={`${menuStyles.item} ${menuStyles.titleItem}`}
						>
							<IconUserFilled /> Usuarios
						</li>
						<li className={menuStyles.item}>
							Listado de usuarios <IconArrowNarrowRight />
						</li>
						<li
							className={`${menuStyles.item} ${menuStyles.titleItem}`}
						>
							<IconBuildingStore /> Productos
						</li>
						<li
							className={menuStyles.item}
							onClick={goToCreateProduct}
							role="menuitem"
						>
							Agregar producto <IconArrowNarrowRight />
						</li>
						<li className={menuStyles.item}>
							Listado de productos <IconArrowNarrowRight />
						</li>
					</ul>
				</nav>
			</section>
		</div>
	) : (
		<div>
			<p style={{ textAlign: 'center', color: 'red' }}>
				🎈 No es posible acceder al panel administrativo desde un
				dispositivo móvil.
			</p>
		</div>
	);
}

export default AdminHome;
