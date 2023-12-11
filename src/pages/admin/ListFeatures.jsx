/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { IconPencil, IconTrashFilled } from '@tabler/icons-react';
import { useEffect, useState, useContext } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate } from 'react-router-dom';
import * as createProductStyles from '../../styles/admin/createProduct.module.css';
import * as ListProductsStyles from '../../styles/admin/listProducts.module.css';
import { isUrl } from '../../utils';
import { UserContext } from '../../contexts/UserContext';
import { ToastContext } from '../../contexts/ToastContext';

function ListProducts() {
	const navigate = useNavigate();
	const [features, setFeatures] = useState([]);
	const { state, logout } = useContext(UserContext);
	const toastContext = useContext(ToastContext);
	
	const listarCaracteristicas = async () => {
		try {
			const response = await fetch('http://localhost:8080/caracteristicas', {
				method: 'GET',
				headers: {
					'Content-type': 'application/json',
				},
			});
			if (response.status === 200){
				const result = await response.json();
					setFeatures(result);
			}
		} catch (error) {
			console.log(error);
		}
	}
	const eliminarCaracteristica = async (id) => {
		try {
			const response = await fetch(`http://localhost:8080/caracteristicas/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-type': 'application/json',
					'Authorization': `Bearer ${state.token}`
				},
			});
			if (response.status === 204){
				toastContext.success('Caracteristica eliminada')
				listarCaracteristicas();
				
			}else{
				toastContext.error('La caracteristica esta asociada a un producto');
			}
		} catch (error) {
			console.log(error);
		}
	}


	useEffect(()=> {
		listarCaracteristicas();

	}, [])

	const handleClickDelete = (id) => {
		console.log("eliminando feature" +id)
		eliminarCaracteristica(id);
	};

	const handleClickConfirm = (id) => {
		confirmAlert({
			title: 'Eliminar característica',
			message: '¿Estás seguro de eliminar este característica?',
			buttons: [
				{
					label: 'Confirmar',
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
									<td>{feature?.idCaracteristica}</td>
									<td>{feature?.nombre}</td>
									<td>
											<img
												src={feature.rutaIcono}
												alt="Icono"
												width={24}
												height={24}
											/>
									</td>
									<td className={ListProductsStyles.actions}>
										<div
											className={
												ListProductsStyles.actionButton
											}
											role="button"
											onClick={() =>
												navigate(
													`/admin/features/${feature? feature.idCaracteristica : null}`,
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
												handleClickConfirm(feature.idCaracteristica)
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
