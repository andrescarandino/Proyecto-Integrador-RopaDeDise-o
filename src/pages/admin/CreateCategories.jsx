/* eslint-disable jsx-a11y/label-has-associated-control */
import { IconCategoryFilled } from '@tabler/icons-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateCategory, useToast } from '../../hooks';

function CreateCategories() {
	const toast = useToast();
	const [preview, setPreview] = useState(null);
	const {
		onSubmit: createProductOnSubmit,
		statusCode,
		// isLoading,
		// dataState,
	} = useCreateCategory();

	const onSubmit = (data) => {
		createProductOnSubmit(data);

		if (statusCode !== 200) {
			toast.error('Error al crear la categoria.');
		}
		// console.log({
		// 	data,
		// 	isLoading,
		// 	dataState,
		// });
	};

	const handlePreview = ({ target: { files } }) => {
		if (Array.from(files)?.length === 0) return;
		if (Array.from(files)?.length > 1) {
			setPreview({
				images: Array.from(files).map((file) =>
					URL.createObjectURL(file),
				),
			});
		} else {
			setPreview({
				images: [URL.createObjectURL(files[0])],
			});
		}
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<div className="form-page-container">
			<section className="section-container">
				<header
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '1.5rem',
					}}
				>
					<div
						style={{
							height: '60px',
							width: '60px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							color: 'var(--color-black-cow)',
							borderRadius: '5px',
							boxShadow: '0 2px 15px -5px var(--color-black-cow)',
						}}
					>
						<IconCategoryFilled />
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							height: '60px',
						}}
					>
						<h2 className="form-page-title">Agregar categoría</h2>
						<p className="section-description">
							Estimado administrador, desde ésta sección podrás
							crear nuevas categorías para la plataforma.
						</p>
					</div>
				</header>
				<main className="form-container">
					<form onSubmit={handleSubmit(onSubmit)} className="form">
						<div className="form-group">
							<label htmlFor="title">Escribe un título:</label>
							<input
								className="input"
								id="title"
								type="text"
								autoComplete="off"
								placeholder="Título"
								{...register('title', { required: true })}
							/>
						</div>
						{errors.title && (
							<span
								style={{
									color: 'red',
									fontSize: '12.25px',
									marginInlineStart: 'auto',
									marginBlockStart: '5px',
								}}
							>
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
							<span
								style={{
									color: 'red',
									fontSize: '12.25px',
									marginInlineStart: 'auto',
									marginBlockStart: '5px',
								}}
							>
								Este campo es requerido.
							</span>
						)}
						<div className="form-group">
							<label htmlFor="image">
								Selecciona una imagen:
							</label>
							<input
								id="image"
								className="input"
								type="file"
								accept="image/*"
								{...register(
									'image',
									{
										onChange: handlePreview,
									},
									{ required: true },
								)}
							/>
						</div>
						{errors.image && (
							<span
								style={{
									color: 'red',
									fontSize: '12.25px',
									marginInlineStart: 'auto',
									marginBlockStart: '5px',
								}}
							>
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
							Agregar categoría
						</button>
					</form>
				</main>
			</section>
		</div>
	);
}

export default CreateCategories;
