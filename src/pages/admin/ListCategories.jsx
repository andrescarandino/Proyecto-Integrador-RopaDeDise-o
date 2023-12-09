import { useState, useEffect, useContext } from 'react';
import { IconPencil, IconTrashFilled } from '@tabler/icons-react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate } from 'react-router-dom';
import * as createProductStyles from '../../styles/admin/createProduct.module.css';
import * as ListProductsStyles from '../../styles/admin/listProducts.module.css';
import getProduct from '../../services/getProduct';
import { UserContext } from '../../contexts/UserContext';
import { ToastContext } from '../../contexts/ToastContext';

function ListCategories() {
	const navigate = useNavigate();
	const [categorias, setCategorias] = useState([]);
	const { state, logout } = useContext(UserContext);
	const toastContext = useContext(ToastContext);

	const listarCategorias = async () => {
		try {
			const response = await fetch('http://localhost:8080/categorias', {
				method: 'GET',
				headers: {
					'Content-type': 'application/json',
				},
			});
			if (response.status === 200){
				const result = await response.json();
					console.log(result);
					setCategorias(result);
			}
		} catch (error) {
			console.log(error);
		}
	}
	const eliminarCategoria = async (id) => {
		try {
			const response = await fetch(`http://localhost:8080/categorias/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-type': 'application/json',
					'Authorization': `Bearer ${state.token}`
				},
			});
			if (response.status === 204){
				toastContext.success('Categoria eliminada')
				listarCategorias();
				
			}else{
				toastContext.error('La categoria esta asociada a un producto');
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		
		listarCategorias();
	}, []);

	
	

	const handleClickConfirm = (id) => {
		confirmAlert({
			title: 'Eliminar la categoria',
			message: '¿Estás seguro de eliminar esta categoria?',
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

	const handleClickDelete = (id) => {
		eliminarCategoria(id);
	};




	return (
	<div>
		ListCategories
		<section className={ListProductsStyles.sectionContainer}>
				<div>
					<table className={ListProductsStyles.table}>
						<thead>
							<tr>
								<th>Nombre</th>
								{/* <th>Imagen</th> */}
								<th>Accion</th>
							</tr>
						</thead>
						<tbody>
							{categorias.map((categoria) => (
								<tr key={categoria.idCategorias}>
									<td>{categoria?.nombre}</td>
{/* 									<td>{categoria.imagenes.map((imagen) => 
									<img src={imagen.ruta} 
									style={
										{widh:50,
										height: 50}
									}></img>
									)}</td> */}
								
									<td>
										<div
											className={
												ListProductsStyles.actionButton
											}
											role="button"
											onClick={() =>
												navigate(
													`/admin/products/${categoria?.idCategorias}`,
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
												handleClickConfirm(categoria? categoria.idCategorias : null)
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
	</div>);
}

export default ListCategories;
