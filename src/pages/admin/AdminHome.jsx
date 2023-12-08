/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
	IconArrowNarrowRight,
	IconBuildingStore,
	IconUserFilled,
	IconCategoryFilled,
	IconRulerMeasure,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import * as createProductStyles from '../../styles/admin/createProduct.module.css';
import * as menuStyles from '../../styles/admin/menu.module.css';
import { URLS } from '../../constants/urls';

function AdminHome() {
	const navigate = useNavigate();

	return (
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
{/* 						<li className={menuStyles.item}>
							Agregar usuario <IconArrowNarrowRight />
						</li> */}
						<li
							className={menuStyles.item}
							role="menuitem"
							onClick={() => navigate(URLS.ADMIN_LIST_USERS)}
						>
							Identificar administrador <IconArrowNarrowRight />
						</li>
						<li
							className={`${menuStyles.item} ${menuStyles.titleItem}`}
						>
							<IconBuildingStore /> Productos
						</li>
						<li
							className={menuStyles.item}
							onClick={() => navigate(URLS.ADMIN_CREATE_PRODUCTS)}
							role="menuitem"
						>
							Agregar producto <IconArrowNarrowRight />
						</li>
						<li
							className={menuStyles.item}
							onClick={() => navigate(URLS.ADMIN_LIST_PRODUCTS)}
							role="menuitem"
						>
							Lista de productos <IconArrowNarrowRight />
						</li>
						<li
							className={`${menuStyles.item} ${menuStyles.titleItem}`}
						>
							<IconCategoryFilled /> Categorías
						</li>
						<li
							className={menuStyles.item}
							onClick={() =>
								navigate(URLS.ADMIN_CREATE_CATEGORIES)
							}
							role="menuitem"
						>
							Agregar categoría <IconArrowNarrowRight />
						</li>
						<li
							className={menuStyles.item}
							onClick={() => navigate(URLS.ADMIN_LIST_CATEGORIES)}
							role="menuitem"
						>
							Lista de categorías <IconArrowNarrowRight />
						</li>
					</ul>
					<ul className={menuStyles.itemsContainer}>
						<li
							className={`${menuStyles.item} ${menuStyles.titleItem}`}
						>
							<IconRulerMeasure /> Características
						</li>
						<li
							className={menuStyles.item}
							role="menuitem"
							onClick={() => navigate(URLS.ADMIN_CREATE_FEATURES)}
						>
							Agregar característica <IconArrowNarrowRight />
						</li>
						<li
							className={menuStyles.item}
							role="menuitem"
							onClick={() => navigate(URLS.ADMIN_LIST_FEATURES)}
						>
							Lista de caracteristicas <IconArrowNarrowRight />
						</li>
					</ul>
				</nav>
			</section>
		</div>
	);
}

export default AdminHome;
