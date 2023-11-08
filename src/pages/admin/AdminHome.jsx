/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
	IconArrowNarrowRight,
	IconBuildingStore,
	IconUserFilled,
	IconCategoryFilled,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import * as createProductStyles from '../../styles/admin/createProduct.module.css';
import * as menuStyles from '../../styles/admin/menu.module.css';

function AdminHome() {
	const navigate = useNavigate();

	const goToCreateProduct = () => {
		navigate('/admin/products/create');
	};

	const goToListProducts = () => {
		navigate('/admin/products/list');
	};

	const goToCreateCategories = () => {
		navigate('/admin/categories/create');
	};

	const goToListCategories = () => {
		navigate('/admin/categories/list');
	};

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
						<li
							className={menuStyles.item}
							onClick={goToListProducts}
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
							onClick={goToCreateCategories}
							role="menuitem"
						>
							Agregar categoría <IconArrowNarrowRight />
						</li>
						<li
							className={menuStyles.item}
							onClick={goToListCategories}
							role="menuitem"
						>
							Lista de categorías <IconArrowNarrowRight />
						</li>
					</ul>
				</nav>
			</section>
		</div>
	);
}

export default AdminHome;
