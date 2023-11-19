/* eslint-disable jsx-a11y/label-has-associated-control */
import { IconBuildingStore } from '@tabler/icons-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateProduct, useToast, useGetCategories } from '../../hooks';
import CustomModal from '../../components/modal/CustomModal';

function CreateProduct() {
	const toast = useToast();
	const [openModal, setOpenModal] = useState(false);
	const [preview, setPreview] = useState(null);
	const {
		onSubmit: createProductOnSubmit,
		statusCode,
		// isLoading,
		// dataState,
	} = useCreateProduct();
	const { categories } = useGetCategories();

	const onSubmit = (data) => {
		createProductOnSubmit(data);

		if (statusCode !== 200) {
			toast.error('Error al crear el producto.');
		}

		// console.log({
		// 	data,
		// });
	};

	const handlePreview = ({ target: { files } }) => {
		setPreview({
			images: Array.from(files).map((file) => URL.createObjectURL(file)),
		});
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<div className="form-page-container">
			<section className="section-container">
				<header className="form-header">
					<div className="form-header-icon-container">
						<IconBuildingStore />
					</div>
					<div className="form-header-texts-container">
						<h2 className="form-page-title">Agregar producto</h2>
						<p className="section-description">
							Estimado administrador, desde ésta sección podrás
							crear nuevos productos para la plataforma.
						</p>
					</div>
				</header>
				<main className="form-container">
					<form onSubmit={handleSubmit(onSubmit)} className="form">
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
							<input
								className="input"
								id="description"
								type="text"
								autoComplete="off"
								placeholder="Descripción"
								{...register('description', { required: true })}
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
								{...register('category', { required: true })}
							>
								<option
									// TODO: Style blank option
									style={{
										color: 'var(--color-oslo-grey) !important',
										paddingInline: '0.5em !important',
									}}
									hidden
									disabled
									selected
								>
									Selecciona una categoría
								</option>
								{categories?.map((category) => (
									<option
										key={category.id}
										value={category.id}
									>
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
						<div>
							<CustomModal
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
												Editar característica
												&quot;Ejemplo&quot;
											</p>
											<p
												style={{
													fontSize: '14px',
												}}
											>
												Escribe a continuación el nuevo
												valor des esta característica.
											</p>
										</header>
										<div className="form-group">
											<label htmlFor="feature">
												Característica:
											</label>
											<input
												className="input"
												id="feature"
												type="text"
												autoComplete="off"
												placeholder="Característica"
												{...register('feature', {
													required: true,
												})}
											/>
										</div>
										<div
											style={{
												display: 'flex',
											}}
										>
											<button
												type="button"
												className="submit-button"
											>
												Guardar cambio
											</button>
										</div>
									</div>
								}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="image">
								Selecciona las imágenes:
							</label>
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
								<div className="form-preview-item">
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
							Agregar producto
						</button>
					</form>
				</main>
			</section>
		</div>
	);
}

export default CreateProduct;
