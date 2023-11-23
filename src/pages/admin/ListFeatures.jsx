/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { IconPencil, IconTrashFilled } from '@tabler/icons-react';
import { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate } from 'react-router-dom';
import * as createProductStyles from '../../styles/admin/createProduct.module.css';
import * as ListProductsStyles from '../../styles/admin/listProducts.module.css';
import { isUrl } from '../../utils';

function ListProducts() {
	const navigate = useNavigate();
	const [features, setFeatures] = useState([
		{
			id: 1,
			name: 'Nombre',
			icon: 'https://www.svgrepo.com/show/532034/cloud-arrow-down.svg',
		},
		{
			id: 2,
			name: 'Nombre',
			icon: 'https://www.svgrepo.com/show/532040/cloud-rain-alt-1.svg',
		},
		{
			id: 3,
			name: 'Nombre',
			icon: 'https://www.svgrepo.com/show/530622/milk-tea.svg',
		},
		{
			id: 4,
			name: 'Nombre',
			icon: 'https://www.svgrepo.com/show/530362/watermelon.svg',
		},
		{
			id: 5,
			name: 'Nombre',
			icon: 'https://www.svgrepo.com/show/530670/double-helix.svg',
		},
	]);

	const handleClickDelete = (id) => {
		setFeatures(features.filter((feature) => feature.id !== id));
	};

	const handleClickConfirm = (id) => {
		confirmAlert({
			title: 'Eliminar característica',
			message: '¿Estás seguro de eliminar este característica?',
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
					Lista de características
				</h2>
			</header>
			<section className={createProductStyles.sectionContainer}>
				<p className={createProductStyles.sectionDescription}>
					Estimado administrador. Desde esta vista podrás gestionar
					las características de los diferentes productos de la
					tienda.
				</p>
				<div>
					<table className={ListProductsStyles.table}>
						<thead>
							<tr>
								<th>Id</th>
								<th>Nombre</th>
								<th>Icono</th>
								<th>Acciones</th>
							</tr>
						</thead>
						<tbody>
							{features.map((feature) => (
								<tr>
									<td>{feature?.id}</td>
									<td>{feature?.name}</td>
									<td>
										{isUrl(feature?.icon) ? (
											<img
												src={feature?.icon}
												alt="Icono"
												width={24}
												height={24}
											/>
										) : (
											''
										)}
									</td>
									<td className={ListProductsStyles.actions}>
										<div
											className={
												ListProductsStyles.actionButton
											}
											role="button"
											onClick={() =>
												navigate(
													`/admin/features/${feature?.id}`,
												)
											}
										>
											<IconPencil />
										</div>
										<div
											className={
												ListProductsStyles.actionButton
											}
											role="button"
											onClick={() =>
												handleClickConfirm(feature?.id)
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
