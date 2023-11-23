import { IconRulerMeasure } from '@tabler/icons-react';
import FeaturesForm from './Forms/FeaturesForm';

function CreateProduct() {
	return (
		<div className="form-page-container">
			<section className="section-container">
				<header className="form-header">
					<div className="form-header-icon-container">
						<IconRulerMeasure />
					</div>
					<div className="form-header-texts-container">
						<h2 className="form-page-title">
							Crear característica
						</h2>
						<p className="section-description">
							Estimado administrador, desde ésta sección podrás
							crear una nueva característica de producto para la
							plataforma.
						</p>
					</div>
				</header>
				<FeaturesForm edit={false} />
			</section>
		</div>
	);
}

export default CreateProduct;
