/* eslint-disable jsx-a11y/label-has-associated-control */
import { IconBuildingStore } from '@tabler/icons-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateProduct, useToast } from '../../hooks';

function CreateProduct() {
	const toast = useToast();
	const [preview, setPreview] = useState(null);
	const {
		onSubmit: createProductOnSubmit,
		statusCode,
		// isLoading,
		// dataState,
	} = useCreateProduct();

	const onSubmit = (data) => {
		createProductOnSubmit(data);

		if (statusCode !== 200) {
			toast.error('Error al crear el producto.');
		}
		// console.log({
		// 	data,
		// 	isLoading,
		// 	dataState,
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
