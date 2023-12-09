/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { IconPencil, IconTrashFilled } from '@tabler/icons-react';
import { useState, useEffect, useContext } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate } from 'react-router-dom';
import * as createProductStyles from '../../styles/admin/createProduct.module.css';
import * as ListProductsStyles from '../../styles/admin/listProducts.module.css';
import getProduct from '../../services/getProduct';
import { UserContext } from '../../contexts/UserContext';
import { ToastContext } from '../../contexts/ToastContext';

function ListProducts() {
	const navigate = useNavigate();
	const [products, setProducts] = useState([]);
	const { state, logout } = useContext(UserContext);
	const toastContext = useContext(ToastContext);

	const eliminarProducto = async (id) => {
		try {
			const response = await fetch(`http://localhost:8080/productos/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-type': 'application/json',
					'Authorization': `Bearer ${state.token}`
				},
			});
			if (response.status === 204){
				toastContext.success('Producto eliminado');
				const res = await getProduct();
				setProducts(res);
				
			}else{
				toastContext.error('Error a eliminar el producto');
			}
		} catch (error) {
			console.log(error);
		}
};

	useEffect(() => {
		const product = async () => {
			const res = await getProduct();
				setProducts(res);
		};
		product();
	}, []);

	const handleClickDelete = (id) => {
		eliminarProducto(id)
		}

	const handleClickConfirm = (id) => {
		confirmAlert({
			title: 'Eliminar producto',
			message: '¿Estás seguro de eliminar este producto?',
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
		<div className={ListProductsStyles.container}>
			<header className={ListProductsStyles.headerContainer}>
				<h2 className={ListProductsStyles.title}>
					Lista de productos
				</h2>
			</header>
			<section className={ListProductsStyles.sectionContainer}>
				<div>
					<table className={ListProductsStyles.table}>
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Descripción</th>
								<th>Categoria</th>
								<th>Características</th>
								<th>Acciones</th>
							</tr>
						</thead>
						<tbody>
							{products.map((product) => (
								<tr>
									<td>{product?.nombre}</td>
									<td>{product?.descripcion}</td>

									<td>{(product.categorias === null) ? "Sin categoria" 
										: product.categorias.nombre }</td>
									<td>{(product.caracteristica.length === 0) ? "Sin caracteristica" 
										: product.categorias.nombre }</td>
									<td className={ListProductsStyles.actions}>
										<div
											className={
												ListProductsStyles.actionButton
											}
											role="button"
											onClick={() =>
												navigate(
													`/admin/products/${product?.product.idProducto}`,
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
												handleClickConfirm(product? product.idProductos : null)
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
