import { IconTrashFilled } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import { Fragment, useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../contexts/UserContext'



function ProductForm({  }) {
	const { state, logout } = useContext(UserContext);
	const [images, setImages] = useState([]);
  	const [imagePreviews, setImagePreviews] = useState([]);
	const [categories, setCategories] = useState([]);
	const [error, setError] = useState(false);
	console.log(state.token);

	  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:8080/categorias', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Categories response was not ok');
        }

        const result = await response.json();
        setCategories(result);
      } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
      }
    };

    const fetchFeatures = async () => {
      try {
        const response = await fetch('http://localhost:8080/caracteristicas', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Features response was not ok');
        }

        const result = await response.json();
		//console.log(result)
        setFeatures(result);
      } catch (error) {
        console.error('Error fetching features:', error);
        throw error;
      }
    };

    fetchCategories();
    fetchFeatures();
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
		  const productoData = {
			nombre: data.name,
			descripcion: data.description,
			categories: data.categories,
			precio: data.precio,
			// Resto de los campos del producto...
			imagenes: images.map((image) => ({ idImagenes: image.idImagenes })),
		  };
	  
		  // Realizar la llamada para crear el producto
		  const productoResponse = await fetch('http://localhost:8080/productos', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			  'Authorization': `Bearer ${state.token}`
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
						<label htmlFor="precio">Escribe el precio:</label>
						<input
							className="input"
							id="name"
							type="number"
  							step="any"
							autoComplete="off"
							placeholder="Precio"
							{...register('precio', { required: true })}
						/>
					</div>
					{errors.precio && (
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
								<option key={category.idCategorias} value={category.idCategorias}>
									{category.nombre}
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
						//onClick={onAddFeature}
					>
						Añadir nueva
					</button>
{/* 					{watchFeatures?.length > 0 &&
						watchFeatures?.map((feature, index) => (
							<Fragment key={index}>
								<div className="form-group">
									<label
										style={{
											display: 'flex',
											alignItems: 'center',
										}}
										htmlFor={`feature-${index}`}
									/>
										<IconTrashFilled
											onClick={() =>
												onRemoveFeature(feature)
											}
										/>
										&nbsp; Característica {index + 1}:
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
						))} */}
					<div className="form-group">
						<label htmlFor="image">Selecciona las imágenes:</label>
						<input
						  id="image"
						  className="input"
						  type="file"
						  multiple
						  accept="image/*"
						  {...register('images', {
							onChange: async (e) => {
								const selectedImages = Array.from(e.target.files || []);
								setImagePreviews(selectedImages.map((image)=> URL.createObjectURL(image)));
								// Subir imágenes
								const formData = new FormData();
								selectedImages.forEach((image) => formData.append('archivos', image));
						  
								const uploadResponse = await fetch('http://localhost:8080/img/upload', {
								  method: 'POST',
								  headers: {
									'Authorization': `Bearer ${state.token}`
								  },
								  body: formData,
								});
						  
								if (!uploadResponse.ok) {
								  throw new Error('Error al subir las imágenes');
								}
						  
								const uploadedImages = await uploadResponse.json();
								setImages(uploadedImages);
						    },
						  })}
						/>

					</div>
					{errors.images && (
						<span className="form-error-message">
							Este campo es requerido.
						</span>
					)}
					<div className='imgPreviewContainer'>

						{imagePreviews.length > 0 &&
						  imagePreviews.map((preview, index) => (
							  <div className="form-preview-item" key={index}>
						      <img
						        src={preview}
						        alt={`Previsualización de la imagen ${index + 1}`}
						        key={preview}
						        width={150}
						        height={150}
								/>
						    </div>
						  ))}
						</div>
					<button type="submit" className="submit-button">
						Agregar producto
					</button>
				</form>
			</main>

		</>
	);
}



export default ProductForm;
