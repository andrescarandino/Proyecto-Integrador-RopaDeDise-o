import * as createProductStyles from '../../styles/admin/createProduct.module.css';

function CreateProduct() {
	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className={createProductStyles.container}>
			<h1>Agregar un nuevo producto</h1>
			<p>
				Estimado administrador, en esta sección podrás crear nuevos
				productos, los cuales se listarán de forma automática en la
				vista general de productos.
			</p>
			<form className={createProductStyles.form} onSubmit={onSubmit}>
				<input type="text" placeholder="Nombre del producto" />
				<input type="text" placeholder="Descripción del producto" />
				<input type="text" placeholder="Precio del producto" />
			</form>
		</div>
	);
}

export default CreateProduct;
