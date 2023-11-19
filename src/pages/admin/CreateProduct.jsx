import { IconBuildingStore } from '@tabler/icons-react';
import ProductForm from './Forms/ProductForm';

function CreateProduct() {
	return (
		<div className="form-page-container">
			<section className="section-container">
				<header className="form-header">
					<div className="form-header-icon-container">
						<IconBuildingStore />
					</div>
					<div className="form-header-texts-container">
						<h2 className="form-page-title">Crear producto</h2>
						<p className="section-description">
							Estimado administrador, desde ésta sección podrás
							crear un nuevo producto para la plataforma.
						</p>
					</div>
				</header>
				<ProductForm edit={false} />
			</section>
		</div>
	);
}

export default CreateProduct;
