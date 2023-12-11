import { IconRulerMeasure } from '@tabler/icons-react';
import EditFeaturesForm from './Forms/EditFeaturesForm';
import { useGetFeature } from '../../hooks';

function UpdateFeatures() {
	/* const { feature } = useGetFeature(); */

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
					</div>
				</header>
				<EditFeaturesForm/>
			</section>
		</div>
	);
}

export default UpdateFeatures;
