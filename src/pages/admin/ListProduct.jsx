/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { IconPencil, IconTrashFilled } from '@tabler/icons-react';
import { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import * as createProductStyles from '../../styles/admin/createProduct.module.css';
import * as ListProductsStyles from '../../styles/admin/listProducts.module.css';

function ListProducts() {
	const [products, setProducts] = useState([
		{
			id: 1,
			name: 'Nombre',
			description: 'Descripción',
		},
		{
			id: 2,
			name: 'Nombre',
			description: 'Descripción',
		},
		{
			id: 3,
			name: 'Nombre',
			description: 'Descripción',
		},
		{
			id: 4,
			name: 'Nombre',
			description: 'Descripción',
		},
		{
			id: 5,
			name: 'Nombre',
			description: 'Descripción',
		},
	]);

	const handleClickDelete = (id) => {
		setProducts(products.filter((product) => product.id !== id));
	};

	const handleClickConfirm = (id) => {
		confirmAlert({
			title: 'Eliminar producto',
			message: '¿Estás seguro de eliminar este producto?',
			buttons: [
				{
					label: 'Si',
					onClick: () => handleClickDelete(id),
				},
				{
					label: 'Cancelar',
				},
			],
		});
	};
	return (
		<div className={createProductStyles.container}>
			<header className={createProductStyles.headerContainer}>
				<h2 className={createProductStyles.title}>
					Lista de productos
				</h2>
			</header>
			<section className={createProductStyles.sectionContainer}>
				<p className={createProductStyles.sectionDescription}>
					Estimado administrador. En esta pestaña encontrarás el
					listado de productos que exiten actualmente en la tienda.
					Adicionalmente encontrarás herramientas para la gestión de
					dichos productos.
				</p>
				<div>
					<table className={ListProductsStyles.table}>
						<thead>
							<tr>
								<th>Id</th>
								<th>Nombre</th>
								<th>Descripción</th>
								<th>Acciones</th>
							</tr>
						</thead>
						<tbody>
							{products.map((product) => (
								<tr>
									<td>{product?.id}</td>
									<td>{product?.name}</td>
									<td>{product?.description}</td>
									<td className={ListProductsStyles.actions}>
										<div
											className={
												ListProductsStyles.actionButton
											}
											role="button"
										>
											<IconPencil />
										</div>
										<div
											className={
												ListProductsStyles.actionButton
											}
											role="button"
											onClick={() =>
												handleClickConfirm(product?.id)
											}
										>
											<IconTrashFilled />
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
		</div>
	);
}

export default ListProducts;
