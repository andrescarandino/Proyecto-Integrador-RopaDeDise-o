/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { IconTrashFilled } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
// import CustomModal from '../../../components/modal/CustomModal';
import {
	useCreateProduct,
	useGetCategories,
	useGetFeatures,
	useToast,
	useUpdateProduct,
} from '../../../hooks';

function ProductForm({ edit, initialValues = {} }) {
	const { id } = useParams();
	const toast = useToast();
	// const [selectedFeature, setSelectedFeature] = useState({});
	// const [openModal, setOpenModal] = useState(false);
	const [preview, setPreview] = useState({ images: initialValues.images });
	const {
		onSubmit: createProductOnSubmit,
		statusCode: createProductStatusCode,
	} = useCreateProduct();
	const {
		onSubmit: updateProductOnSubmit,
		statusCode: updateProductStatusCode,
	} = useUpdateProduct();

	const { categories } = useGetCategories();
	const { features: initialFeatures } = useGetFeatures();
	const [features, setFeatures] = useState(
		initialFeatures.map((feature) => {
			return {
				...feature,
				disabled: false,
			};
		}),
	);

	const handlePreview = ({ target: { files } }) => {
		setPreview({
			images: Array.from(files).map((file) => URL.createObjectURL(file)),
		});
	};

	const {
		register,
		setValue,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: initialValues,
	});

	const watchFeatures = watch('features');

	const onSubmit = (data) => {
		console.log({
			data,
			errors,
		});

		let statusCode = null;
		if (edit) {
			updateProductOnSubmit(data, id);
			statusCode = updateProductStatusCode;
		} else {
			createProductOnSubmit(data);
			statusCode = createProductStatusCode;
		}

		if (statusCode !== 200) {
			toast.error(
				`Error al ${edit ? 'actualizar' : 'crear'} el producto.`,
			);
		} else {
			toast.success(
				`¡Producto ${edit ? 'actualizado' : 'creado'} correctamente!`,
			);
		}
	};

	const onErrors = (errors) => {
		console.log({
			errors,
		});
	};

	// const onSelectFeature = (selectedFeature) => {
	// 	if (!selectedFeature) return;
	// 	setSelectedFeature({
	// 		currentValue: selectedFeature,
	// 	});
	// 	setOpenModal(true);
	// };

	const onAddFeature = () => {
		setValue('features', [...watchFeatures, '']);
		console.log({ watchFeatures });
	};

	// const onUpdateFeature = () => {
	// 	if (!selectedFeature?.newValue) return;

	// 	const updatedWatchFeatures = watchFeatures.map((feature) =>
	// 		feature === selectedFeature.currentValue
	// 			? selectedFeature.newValue
	// 			: feature,
	// 	);
	// 	setValue('features', updatedWatchFeatures);
	// 	setSelectedFeature({});
	// 	setOpenModal(false);
	// };

	const onRemoveFeature = (selectedFeature) => {
		const filteredWatchFeatures = watchFeatures.filter(
			(feature) => feature !== selectedFeature,
		);
		setValue('features', filteredWatchFeatures);
		setFeatures(
			features.map((feature) => {
				if (feature.id === Number(selectedFeature)) {
					return {
						...feature,
						disabled: false,
					};
				}
				return feature;
			}),
		);
	};

	return (
		<>
			<main className="form-container">
				<form
					onSubmit={handleSubmit(onSubmit, onErrors)}
					className="form"
				>
					<div className="form-group">
						<label htmlFor="name">Escribe un nombre:</label>
						<input
							className="input"
							id="name"
							type="text"
							autoComplete="off"
							placeholder="Nombre"
							{...register('name', { required: true })}
						/>
					</div>
					{errors.name && (
						<span className="form-error-message">
							Este campo es requerido.
						</span>
					)}
					<div className="form-group">
						<label htmlFor="description">
							Escribe una descripción:
						</label>
						<textarea
							className="input"
							id="description"
							type="text"
							rows="5"
							autoComplete="off"
							placeholder="Descripción"
							{...register('description', {
								required: true,
							})}
						/>
					</div>
					{errors.description && (
						<span className="form-error-message">
							Este campo es requerido.
						</span>
					)}
					<div className="form-group">
						<label htmlFor="category">
							Selecciona una categoría:
						</label>
						<select
							className="input"
							id="category"
							name="category"
							defaultValue=""
							{...register('category', {
								required: true,
							})}
						>
							<option
								// TODO: Style blank option
								style={{
									color: 'var(--color-oslo-grey) !important',
									paddingInline: '0.5em !important',
								}}
								hidden
								disabled
								value=""
							>
								Selecciona una categoría
							</option>
							{categories?.map((category) => (
								<option key={category.id} value={category.id}>
									{category.name}
								</option>
							))}
						</select>
					</div>
					{errors.description && (
						<span className="form-error-message">
							Este campo es requerido.
						</span>
					)}
					<p
						style={{
							color: 'var(--color-black-cow)',
							fontWeight: '600',
							fontSize: '14px',
							marginBlockStart: '1.75rem',
							marginBlockEnd: '.25rem',
							textAlign: 'end',
						}}
					>
						Administrar características
					</p>
					<button
						type="button"
						className="submit-button"
						onClick={onAddFeature}
					>
						Añadir nueva
					</button>
					{watchFeatures?.length > 0 &&
						watchFeatures?.map((feature, index) => (
							<Fragment key={index}>
								<div className="form-group">
									<label
										style={{
											display: 'flex',
											alignItems: 'center',
										}}
										htmlFor={`feature-${index}`}
									>
										{/* <IconPencil
											onClick={() =>
												onSelectFeature(feature)
											}
										/> */}
										<IconTrashFilled
											onClick={() =>
												onRemoveFeature(feature)
											}
										/>
										&nbsp; Característica {index + 1}:
									</label>
									{/* <input
										className="input"
										id={`feature-${index}`}
										type="text"
										autoComplete="off"
										placeholder={`Característica ${
											index + 1
										}`}
										{...register(`features.${index}`, {
											required: true,
										})}
									/> */}
									<select
										className="input"
										id="feature"
										name="feature"
										defaultValue=""
										{...register(`features.${index}`, {
											required: true,
											setValueAs: (value) =>
												Number(value),
											onChange: ({
												target: { value },
											}) => {
												setFeatures(
													features.map((feature) => {
														if (
															feature.id ===
															Number(value)
														) {
															return {
																...feature,
																disabled: true,
															};
														}
														return feature;
													}),
												);
											},
										})}
									>
										<option
											// TODO: Style blank option
											style={{
												color: 'var(--color-oslo-grey) !important',
												paddingInline:
													'0.5em !important',
											}}
											hidden
											disabled
											value=""
										>
											Selecciona una característica
										</option>
										{features?.map((features) => (
											<option
												key={features.id}
												value={features.id}
												disabled={features.disabled}
											>
												{features.name}
											</option>
										))}
									</select>
								</div>
								{errors.features?.at(index) && (
									<span className="form-error-message">
										Este campo es requerido.
									</span>
								)}
							</Fragment>
						))}
					<div className="form-group">
						<label htmlFor="image">Selecciona las imágenes:</label>
						<input
							id="image"
							className="input"
							type="file"
							multiple
							accept="image/*"
							{...register(
								'images',
								{
									onChange: handlePreview,
								},
								{ required: true },
							)}
						/>
					</div>
					{errors.images && (
						<span className="form-error-message">
							Este campo es requerido.
						</span>
					)}
					{preview?.images?.length > 0 &&
						preview?.images?.map((image, index) => (
							<div className="form-preview-item" key={image}>
								<img
									src={image}
									alt={`Previsualización de la imagen ${
										index + 1
									}`}
									key={image}
									width={300}
									height={300}
								/>
							</div>
						))}
					<button type="submit" className="submit-button">
						{edit ? 'Editar' : 'Agregar'} producto
					</button>
				</form>
			</main>
			{/* <CustomModal
				openModal={openModal}
				setOpenModal={setOpenModal}
				contentComponent={
					<div
						// TODO: load default value of selected feature
						style={{
							fontFamily: 'var(--ff-roboto)',
						}}
					>
						<header
							style={{
								color: 'var(--color-black-cow)',
							}}
						>
							<p
								style={{
									fontSize: '15px',
									fontWeight: '600',
									marginBlockEnd: '0.75rem',
								}}
							>
								Editar característica &quot;
								{selectedFeature?.currentValue}&quot;
							</p>
							<p
								style={{
									fontSize: '14px',
								}}
							>
								Escribe a continuación el nuevo valor de esta
								característica.
							</p>
						</header>
						<div className="form-group">
							<label htmlFor="edit-feature">
								Característica:
							</label>
							<input
								className="input"
								id="edit-feature"
								type="text"
								autoComplete="off"
								placeholder="Característica"
								onChange={(e) => {
									setSelectedFeature({
										...selectedFeature,
										newValue: e.target.value,
									});
								}}
							/>
						</div>
						{!selectedFeature?.newValue && (
							<span className="form-error-message">
								Escribe el nuevo valor de la característica.
							</span>
						)}
						<div
							style={{
								display: 'flex',
							}}
						>
							<button
								type="button"
								className="submit-button"
								onClick={onUpdateFeature}
							>
								Guardar cambio
							</button>
						</div>
					</div>
				}
			/> */}
		</>
	);
}

ProductForm.propTypes = {
	edit: PropTypes.bool.isRequired,
	initialValues: PropTypes.shape({
		name: PropTypes.string,
		description: PropTypes.string,
		images: PropTypes.arrayOf(PropTypes.string),
		features: PropTypes.arrayOf(PropTypes.string),
		category: PropTypes.string,
	}),
};

ProductForm.defaultProps = {
	initialValues: {
		name: '',
		description: '',
		images: [],
		features: [],
		category: '',
	},
};

export default ProductForm;
