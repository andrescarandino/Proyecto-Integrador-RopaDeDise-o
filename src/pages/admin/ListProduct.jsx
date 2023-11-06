import { IconPencil, IconTrashFilled } from '@tabler/icons-react';
import * as createProductStyles from '../../styles/admin/createProduct.module.css';
import * as ListProductsStyles from '../../styles/admin/listProducts.module.css';

function ListProducts() {
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
							<tr>
								<td>1</td>
								<td>Nombre</td>
								<td>Descripción</td>
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
									>
										<IconTrashFilled />
									</div>
								</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Nombre</td>
								<td>Descripción</td>
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
									>
										<IconTrashFilled />
									</div>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td>Nombre</td>
								<td>Descripción</td>
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
									>
										<IconTrashFilled />
									</div>
								</td>
							</tr>
							<tr>
								<td>4</td>
								<td>Nombre</td>
								<td>Descripción</td>
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
									>
										<IconTrashFilled />
									</div>
								</td>
							</tr>
							<tr>
								<td>5</td>
								<td>Nombre</td>
								<td>Descripción</td>
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
									>
										<IconTrashFilled />
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		</div>
	);
}

export default ListProducts;
