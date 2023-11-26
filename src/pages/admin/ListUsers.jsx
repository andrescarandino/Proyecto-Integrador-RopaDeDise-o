/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
	IconEye,
	IconEyeOff,
	IconInfoCircle,
	IconPencil,
	IconTrashFilled,
} from '@tabler/icons-react';
import { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import * as createProductStyles from '../../styles/admin/createProduct.module.css';
import * as ListProductsStyles from '../../styles/admin/listProducts.module.css';

function ListUsers() {
	const [users, setUsers] = useState([
		{
			id: 1,
			name: 'Nombre 1',
			permissions: 'Navegación',
		},
		{
			id: 2,
			name: 'Nombre 2',
			permissions: 'Administración',
		},
		{
			id: 3,
			name: 'Nombre 3',
			permissions: 'Navegación',
		},
		{
			id: 4,
			name: 'Nombre 4',
			permissions: 'Administración',
		},
		{
			id: 5,
			name: 'Nombre 5',
			permissions: 'Navegación',
		},
	]);

	const handleClickDelete = (id) => {
		setUsers(users.filter((user) => user.id !== id));
	};

	const handleClickPermissions = (id) => {
		// TODO: add logic to toggle permission on the API
		const user = users.find((user) => user.id === id);
		const isAdmin = user.permissions === 'Administración';
		setUsers((prevValue) => {
			return prevValue.map((user) => {
				if (user.id === id) {
					return {
						...user,
						permissions: isAdmin ? 'Navegación' : 'Administración',
					};
				}
				return user;
			});
		});
	};

	const handleClickConfirm = (id, type = 'delete') => {
		let onConfirm = null;
		const onDelete = () => {
			return {
				title: 'Eliminar usuario',
				message: '¿Estás seguro de eliminar este usuario?',
				buttons: [
					{
						label: 'Si',
						onClick: () => handleClickDelete(id),
					},
					{
						label: 'Cancelar',
					},
				],
			};
		};

		const onTogglePermissions = () => {
			return {
				title: 'Modificar permisos de usuario',
				message:
					'¿Estás seguro de modificar los permisos de este usuario?',
				buttons: [
					{
						label: 'Si',
						onClick: () => handleClickPermissions(id),
					},
					{
						label: 'Cancelar',
					},
				],
			};
		};

		onConfirm = type === 'delete' ? onDelete() : onTogglePermissions();

		confirmAlert(onConfirm);
	};
	return (
		<div className={createProductStyles.container}>
			<header className={createProductStyles.headerContainer}>
				<h2 className={createProductStyles.title}>
					Lista de usuarios | Identificar administrador
				</h2>
			</header>
			<section className={createProductStyles.sectionContainer}>
				<p className={createProductStyles.sectionDescription}>
					Estimado administrador. En esta pestaña encontrarás el
					listado de usuarios registrados. Desde aquí podrás
					gestionarlos.
				</p>
				<div>
					<table className={ListProductsStyles.table}>
						<thead>
							<tr>
								<th>Id</th>
								<th>Nombre</th>
								<th>Permisos</th>
								<th
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										gap: '5px',
									}}
								>
									Acciones <IconInfoCircle size={20} />
								</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user) => (
								<tr>
									<td>{user?.id}</td>
									<td>{user?.name}</td>
									<td>{user?.permissions}</td>
									<td className={ListProductsStyles.actions}>
										<div
											className={
												ListProductsStyles.actionButton
											}
											role="button"
											onClick={() => {}}
										>
											<IconPencil />
										</div>
										<div
											className={
												ListProductsStyles.actionButton
											}
											role="button"
											onClick={() => {
												handleClickConfirm(
													user?.id,
													'toggle',
												);
											}}
										>
											{user.permissions ===
											'Administración' ? (
												<IconEyeOff />
											) : (
												<IconEye />
											)}
										</div>
										<div
											className={
												ListProductsStyles.actionButton
											}
											role="button"
											onClick={() =>
												handleClickConfirm(
													user?.id,
													'delete',
												)
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

export default ListUsers;
