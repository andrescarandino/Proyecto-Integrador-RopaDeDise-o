function Spinner() {
	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '2rem',
			}}
		>
			<div>
				<h1
					style={{
						fontFamily: 'Berkshire Swash',
						fontStyle: 'normal',
						fontSize: '85px',
						fontWeight: '100',
					}}
				>
					carolki.
				</h1>
				<h3
					style={{
						fontSize: '32px',
						fontStyle: 'normal',
						marginLeft: '30px',
					}}
				>
					...diseñamos pasión
				</h3>
			</div>
			<div
				style={{
					fontFamily: 'Roboto',
					fontSize: '25px',
					fontStyle: 'italic',
					marginLeft: '30px',
				}}
			>
				Cargando...
			</div>
		</div>
	);
}

export default Spinner;
