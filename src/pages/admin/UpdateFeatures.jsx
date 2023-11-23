import { IconRulerMeasure } from '@tabler/icons-react';
import FeaturesForm from './Forms/FeaturesForm';
import { useGetFeature } from '../../hooks';

function UpdateFeatures() {
	const { feature } = useGetFeature();

	return (
		<div className="form-page-container">
			<section className="section-container">
				<header className="form-header">
					<div className="form-header-icon-container">
						<IconRulerMeasure />
					</div>
					<div className="form-header-texts-container">
						<h2 className="form-page-title">
							Editar característica
						</h2>
						<p className="section-description">
							Estimado administrador, desde ésta sección podrás
							editar una característica de producto.
						</p>
					</div>
				</header>
				<FeaturesForm edit initialValues={feature} />
			</section>
		</div>
	);
}

export default UpdateFeatures;
