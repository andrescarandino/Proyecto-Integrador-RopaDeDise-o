import { IconTrashFilled } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import { Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';




function ProductForm({  }) {
	const [images, setImages] = useState([]);
  	const [imagePreviews, setImagePreviews] = useState([]);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const categories = async () => {
				try {
					const response = await fetch('http://localhost:8080/productos', {
						method: 'GET',
						headers: {
							'Content-type': 'application/json',
						},
					});
			
					if (!response.ok) {
						throw new Error('Categories response was not ok');
					}
			
					const result = await response.json();
					setCategories(result)
				} catch (error) {
					console.error('Error fetching product:', error);
					throw error;
				}
			};
			
		categories();
	}, []);


	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm();

	const onErrors = () => {
		setError(true);
		setTimeout(() => {
			setError(false);
		}, 6000);
	};

	const onSubmit = async (data) => {
		try {
		  // Subir imágenes
		  const formData = new FormData();
		  data.images.forEach((image) => formData.append('images', image));
		  
		  const uploadResponse = await fetch('http://localhost:8080/img/upload', {
			method: 'POST',
			body: formData,
		  });
	  
		  if (!uploadResponse.ok) {
			throw new Error('Error al subir las imágenes');
		  }
	  
		  const uploadedImages = await uploadResponse.json();
	  
		  // Crear objeto para la creación del producto
		  const productoData = {
			nombre: data.name,
			descripcion: data.description,
			// Resto de los campos del producto...
			imagenes: uploadedImages.map((image) => ({ idImagenes: image.idImagenes })),
		  };
	  
		  // Realizar la llamada para crear el producto
		  const productoResponse = await fetch('http://localhost:8080/productos', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(productoData),
		  });
	  
		  if (!productoResponse.ok) {
			throw new Error('Error al crear el producto');
		  }
	  
		  const productoCreado = await productoResponse.json();
	  
		  console.log('Producto creado:', productoCreado);
	  
		  // Restablecer el formulario o realizar otras acciones después de la creación
		  reset();
		} catch (error) {
		  console.error('Error:', error.message);
		}
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
{/* 						<input
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
						/> */}
						<input
						  id="image"
						  className="input"
						  type="file"
						  multiple
						  accept="image/*"
						  {...register('images', {
						    onChange: (e) => {
						      const selectedImages = Array.from(e.target.files || []);
						      setImages(selectedImages);
							
						      // Previsualización de imágenes
						      const previews = selectedImages.map((image) =>
						        URL.createObjectURL(image)
						      );
						      setImagePreviews(previews);
						    },
						  })}
						/>

					</div>
					{errors.images && (
						<span className="form-error-message">
							Este campo es requerido.
						</span>
					)}
					{/* {preview?.images?.length > 0 &&
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
						))} */}
						{imagePreviews.length > 0 &&
						  imagePreviews.map((preview, index) => (
						    <div className="form-preview-item" key={index}>
						      <img
						        src={preview}
						        alt={`Previsualización de la imagen ${index + 1}`}
						        key={preview}
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

/* ProductForm.propTypes = {
	edit: PropTypes.bool.isRequired,
	initialValues: PropTypes.shape({
		name: PropTypes.string,
		description: PropTypes.string,
		images: PropTypes.arrayOf(PropTypes.string),
		features: PropTypes.arrayOf(PropTypes.string),
		category: PropTypes.string,
	}),
}; */

/* ProductForm.defaultProps = {
	initialValues: {
		name: '',
		description: '',
		images: [],
		features: [],
		category: '',
	},
}; */

export default ProductForm;
