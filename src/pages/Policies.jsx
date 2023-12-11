import { PRIVACY_POLICY, USAGE_POLICY } from '../constants/policies';

function Policies() {
	return (
		<div
			style={{
				fontFamily: 'var(--ff-roboto)',
				color: 'var(--color-black-cow)',
				padding: '3rem',
				maxWidth: '1258px',
				margin: '2rem auto',
				backgroundColor: 'white',
				borderRadius: '5px',
			}}
		>
			<h1
				style={{
					textAlign: 'center',
					marginBottom: '2rem',
					backgroundColor: '#464646',
					borderRadius: '5px',
					color: 'white',
					padding: '1rem',
					fontWeight: '500',
				}}
			>
				Políticas del sitio web
			</h1>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					fontSize: '0.85rem',
				}}
			>
				<div
					style={{
						width: '45%',
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					<h2 style={{ marginBlockEnd: '-0.5rem' }}>
						Políticas de privacidad
					</h2>
					<p style={{ marginBlockEnd: '0.25rem' }}>
						Entrada en vigencia: 23 de noviembre de 2023
					</p>
					{PRIVACY_POLICY.map((policy, index) => (
						<div key={policy.title}>
							<h4 style={{ marginBottom: '0.25rem' }}>
								{index + 1}. {policy.title}
							</h4>
							<p>{policy.description}</p>
						</div>
					))}
				</div>
				<div
					style={{
						width: '45%',
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					<h2 style={{ marginBlockEnd: '-0.5rem' }}>
						Políticas de uso
					</h2>
					<p style={{ marginBlockEnd: '0.25rem' }}>
						Entrada en vigencia: 23 de noviembre de 2023
					</p>
					{USAGE_POLICY.map((policy, index) => (
						<div key={policy.title}>
							<h4 style={{ marginBottom: '0.25rem' }}>
								{index + 1}. {policy.title}
							</h4>
							<p>{policy.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Policies;