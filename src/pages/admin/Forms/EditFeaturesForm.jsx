import PropTypes, { number } from 'prop-types';
import { useEffect, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '../../../hooks';
import { isUrl } from '../../../utils';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContext } from '../../../contexts/ToastContext';
import { UserContext } from '../../../contexts/UserContext';
 import { URLS } from '../../../constants/urls';
function FeaturesForm() {
	const toast = useToast();
	const [preview, setPreview] = useState();
	const [imagePreviews, setImagePreviews] = useState([])
	const [image, setImage] = useState([])
    const { state, logout } = useContext(UserContext);
    const { setValue, control, reset } = useForm();
    const {id} = useParams();
	const navigate = useNavigate();
	const toastContext = useContext(ToastContext);
    
    const getCaracteristica = async (id) => {
		try {
			const response = await fetch(`http://localhost:8080/caracteristicas/${id}`, {
				method: 'GET',
				headers: {
					'Content-type': 'application/json',
					'Authorization': `Bearer ${state.token}`
				},
			});
            
			const resp = await response.json()
			setPreview(resp);	
			
		} catch (error) {
			console.log(error);
		}
	}
    useEffect(() => {
        getCaracteristica(id);

    }, [])

	
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		
	} = useForm();

	const onErrors = () => {
		setError(true);
		setTimeout(() => {
			setError(false);
		}, 6000);
	};

	const onSubmit = async (data, id) => {
		try {
		  const caracteristicaData = {
			nombre: data.title,
			// Resto de los campos del producto...
			rutaIcono: image[0].ruta
		  };
	  
		  // Realizar la llamada para crear el producto
		  const productoResponse = await fetch(`http://localhost:8080/caracteristicas/${preview.idCaracteristica}`, {
			method: 'PUT',
			headers: {
			  'Content-Type': 'application/json',
			  'Authorization': `Bearer ${state.token}`
			},
			body: JSON.stringify(caracteristicaData),
		  });
	  
		  if (productoResponse.status === 200) {
			toastContext.success('Caracterisitica actualizada');
			reset();
			setImagePreviews([])
		  }
	  
		  const productoCreado = await productoResponse.json();
	
		  // Restablecer el formulario o realizar otras acciones después de la creación
		  reset();

		} catch (error) {
		  console.error('Error:', error.message);
		}
	  };

	return (
		<div className="form-page-container">
			<section className="section-container">
				<header className="form-header">
					<div className="form-header-icon-container">
						{/* <IconCategoryFilled /> */}
					</div>
					<div className="form-header-texts-container">
						<h2 className="form-page-title">Editar Caracteristica</h2>
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
							<span className="form-error-message">
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
						  {...register('image', {
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
								setImage(uploadedImages);
						    },
						  })}
						/>
						</div>
						{errors.image && (
							<span className="form-error-message">
								Este campo es requerido.
							</span>
						)}
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
						<button type="submit" className="submit-button">
							Agregar Caracteristica
						</button>
					</form>
				</main>
			</section>
		</div>
	);
}

export default FeaturesForm;