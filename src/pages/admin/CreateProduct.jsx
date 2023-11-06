/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateProduct, useToast } from '../../hooks';
import * as createProductStyles from '../../styles/admin/createProduct.module.css';

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

	const handlePreview = ({ target: { name, files } }) => {
		setPreview({
			[name]: Array.from(files).map((file) => URL.createObjectURL(file)),
		});
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<div className={createProductStyles.container}>
			<header className={createProductStyles.headerContainer}>
				<h2 className={createProductStyles.title}>Agregar producto</h2>
			</header>
			<section className={createProductStyles.sectionContainer}>
				<p className={createProductStyles.sectionDescription}>
					Estimado administrador, desde ésta sección podrás crear
					nuevos productos, los cuales se listarán de forma automática
					en el listado general del sitio.
					<br />A continuación completa la información. 👇
				</p>
				<div className={createProductStyles.formContainer}>
					<div className={createProductStyles.galleryContainer}>
						{preview?.images?.length > 0
							? preview?.images?.map((image, index) => (
									<div className="imageContainer">
										<div
											className={
												createProductStyles.imageItem
											}
										>
											<img
												src={image}
												alt={`Previsualización de la imagen ${
													index + 1
												}`}
												key={image}
												width={200}
												height={200}
											/>
										</div>
									</div>
							  ))
							: '🙃 No hay imágenes cargadas.'}
					</div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className={createProductStyles.form}
					>
						<div className="form-group">
							<label htmlFor="name">Escribe un nombre:</label>
							<input
								className="input"
								id="name"
								type="text"
								autoComplete="off"
								{...register('name', { required: true })}
							/>
							{errors.name && (
								<span
									style={{
										color: 'red',
										fontSize: '12.25px',
									}}
								>
									Este campo es requerido.
								</span>
							)}
						</div>
						<div className="form-group">
							<label htmlFor="description">
								Escribe una descripción:
							</label>
							<input
								className="input"
								id="description"
								type="text"
								autoComplete="off"
								{...register('description', { required: true })}
							/>
							{errors.description && (
								<span
									style={{
										color: 'red',
										fontSize: '12.25px',
									}}
								>
									Este campo es requerido.
								</span>
							)}
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
							{errors.images && (
								<span
									style={{
										color: 'red',
										fontSize: '12.25px',
									}}
								>
									Este campo es requerido.
								</span>
							)}
						</div>
						<button type="submit" className="submit-button">
							Agregar producto ✨
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}

export default CreateProduct;
