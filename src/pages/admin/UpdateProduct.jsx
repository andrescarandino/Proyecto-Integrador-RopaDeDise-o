import { IconBuildingStore } from '@tabler/icons-react';
import ProductForm from './Forms/ProductForm';
import { useGetProduct } from '../../hooks';

function UpdateProduct() {
	const { product } = useGetProduct();

	return (
		<div className="form-page-container">
			<section className="section-container">
				<header className="form-header">
					<div className="form-header-icon-container">
						<IconBuildingStore />
					</div>
					<div className="form-header-texts-container">
						<h2 className="form-page-title">Editar producto</h2>
						<p className="section-description">
							Estimado administrador, desde ésta sección podrás
							editar un producto de la plataforma.
						</p>
					</div>
				</header>
				<ProductForm edit initialValues={product} />
			</section>
		</div>
	);
}

export default UpdateProduct;
