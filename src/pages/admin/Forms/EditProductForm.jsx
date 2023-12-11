import ProductForm from "./EditProductForm";
import { IconTrashFilled } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import { Fragment, useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../contexts/UserContext'
import { ToastContext } from '../../../contexts/ToastContext';
import { useParams } from 'react-router-dom';

function EditProductForm () {
    const { setValue } = useForm();
    const {id} = useParams();
	const {state, logout } = useContext(UserContext);
	const [images, setImages] = useState([]);
  	const [imagesPreviews, setImagesPreviews] = useState([]);
	const [categories, setCategories] = useState([]);
	const [caracteristicas, setCaracteristicas] = useState([])
    const [product, setProduct] = useState(null);
	const [error, setError] = useState(false);
	const toastContext = useContext(ToastContext);
    const idUsuario = id; 
    const fetchProduct = async (id) => {
        const response = await fetch(`http://localhost:8080/productos/${id}`, {
        method: 'GET',
      });
      const resp = await response.json();
    }

    
	  useEffect(() => {
        const fetchCategories = async () => {
          try {
            const response = await fetch('http://localhost:8080/categorias', {
              method: 'GET',
              headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${state.token}`
              },
            });
    
            if (!response.ok) {
              throw new Error('Categories response was not ok');
            }
    
            const result = await response.json();
            setCategories(result);
          } catch (error) {
            console.error('Error fetching product:', error);
            toastContext.error('error al crear el producto');
          }
        };
    
        const fetchCaracteristicas = async () => {
          try {
            const response = await fetch('http://localhost:8080/caracteristicas', {
              method: 'GET',
              headers: {
                'Content-type': 'application/json',
              },
            });
    
            if (!response.ok) {
              throw new Error('caracteristicas response was not ok');
            }
    
            const result = await response.json();
            setCaracteristicas(result);
          } catch (error) {
            console.error('Error fetching features:', error);
            throw error;
          }
        };

        
        
        fetchCategories();
        fetchCaracteristicas();
        fetchProduct(id);
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
    
        const onSubmit = async (data, id) => {
            try {
              const productoData = {
                idProductos: idUsuario,
                nombre: data.name,
                descripcion: data.description,
                categories: data.categories,
                precio: data.precio,
                caracteristicas: data.caracteristicas,
                // Resto de los campos del producto...
                imagenes: images.map((image) => ({ idImagenes: image.idImagenes })),
              };
          
              // Realizar la llamada para crear el producto
              const productoResponse = await fetch(`http://localhost:8080/productos` , {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${state.token}`
                },
                body: JSON.stringify(productoData),
              });
          
              if (productoResponse.status === 200) {
                toastContext.success('Producto actualizado');
                reset();
              }else{
                toastContext.error('El producto ya existe');
              }
              
              const productoCreado = await productoResponse.json();
    
              
            } catch (error) {
              console.error('Error:', error.message);
    
            }
          };

return(
    
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
					<div className="form-group">
						<label htmlFor="caracterisitas">
							Selecciona una caracteristica:
						</label>
					<select
							className="input"
							id="caracteristica"
							name="caracteristica"
							defaultValue=""
							multiple
							{...register('caracteristica', {
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
								Selecciona una característica
							</option>
							{caracteristicas?.map((category) => (
								<option key={category.idCategorias} value={category.idCategorias} >
									{category.nombre}
								</option>
							))}
						</select>
					<button
						type="button"
						className="submit-button"
						//onClick={onAddFeature}
					>
						Añadir nueva
					</button>
					</div>
					{errors.caracteristicas && (
						<span className="form-error-message">
							Este campo es requerido.
						</span>)}

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
								setImagesPreviews(selectedImages.map((image)=> URL.createObjectURL(image)));
								
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

					{imagesPreviews.length > 0 &&
  						imagesPreviews.map((preview, index) => (
    					<div className="form-preview-item" key={index}>
      					<img
       						 src={preview}
       						 alt={`Previsualización de la imagen ${index + 1}`}
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
export default EditProductForm;