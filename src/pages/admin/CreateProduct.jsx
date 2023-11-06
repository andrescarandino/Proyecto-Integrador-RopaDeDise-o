/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import * as createProductStyles from '../../styles/admin/createProduct.module.css';
import { useToast } from '../../hooks';

function CreateProduct() {
	const [state, setState] = React.useState({
		name: '',
		price: 0,
		description: '',
		images: [],
	});
	const toast = useToast();

	const onSubmit = (e) => {
		e.preventDefault();

		// eslint-disable-next-line no-alert
		alert(JSON.stringify(state));
	};

	useEffect(() => {
		// eslint-disable-next-line no-console
		console.log(state);
	}, [state]);

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
						<div className="imageContainer">
							<div className={createProductStyles.imageItem}>
								{/* <img
									src="https://i.imgur.com/s05AhrD.png"
									alt=""
								/> */}
								👁️ Aquí se verá la previsualización del
								producto.
							</div>
						</div>
					</div>
					<form
						onSubmit={onSubmit}
						className={createProductStyles.form}
					>
						<div className="form-group">
							<label htmlFor="name">Escribe un nombre:</label>
							<input
								className="input"
								id="name"
								type="text"
								autoComplete="off"
								onChange={(e) =>
									setState({ ...state, name: e.target.value })
								}
							/>
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
								onChange={(e) =>
									setState({
										...state,
										description: e.target.value,
									})
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
								onChange={(e) =>
									setState({
										...state,
										images: e.target.files,
									})
								}
							/>
						</div>
						<button type="submit" className="submit-button">
							Agregar producto ✨
						</button>
						<button
							type="button"
							className="submit-button"
							onClick={() => toast.error('Example')}
						>
							Mostrar toast{' '}
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}

export default CreateProduct;
