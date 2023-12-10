/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
	IconEye,
	IconUserUp,
	IconInfoCircle,
	IconUserDown,
	IconTrashFilled,
} from '@tabler/icons-react';
import { useEffect, useState, useContext } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import * as listUserStyles from '../../styles/admin/listUser.module.css';
import { UserContext } from '../../contexts/UserContext';
import { ToastContext } from '../../contexts/ToastContext';

function ListUsers() {
	const [users, setUsers] = useState([]);
	const { state, logout } = useContext(UserContext);
	const toastContext = useContext(ToastContext);

	const getUsers = async () => {
		try {
			const response = await fetch('http://localhost:8080/usuarios', {
				method: 'GET',
				headers: {
					'Content-type': 'application/json',
				},
			});
			const result = await response.json();
			console.log(result);
			setUsers(result);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		
		getUsers();
	}, []);




	const handleClickPermissions = (id) => {
		
		const user = users.find((user) => user.idUsuarios === id);
		console.log(user)
		user.roles[0] = (user.roles[0].nombre === "ADMIN") ?
			{
				idTipoUsuarios : 2,
				nombre: "USER"
			} : {
				idTipoUsuarios: 1,
				nombre: "ADMIN"
			}

		const userPut =	{
				idUsuarios: user.idUsuarios,
				nombre: user.nombre,
				apellido: user.apellido,
				email: user.email,
				password: user.password,
				roles: [user.roles[0]]
		}
		const putUser = async () => {
			try {
				const response = await fetch(`http://localhost:8080/usuarios`, {
					method: 'PUT',
					headers: {
						'Content-type': 'application/json',
						'Authorization': `Bearer ${state.token}`,
					},
					body: JSON.stringify(userPut)
				})
				if(response.ok){
				toastContext.success('Usuario modificado');	
				getUsers();
				}
			} catch (error) {
				console.log(error);
			}
		};
		putUser();
		
	};


 		const onTogglePermissions = (id) => {
			console.log(id);
			confirmAlert({
			
				title: 'Modificar permisos de usuario',
				message:
					'¿Estás seguro de modificar los permisos de este usuario?',
				buttons: [
					{
						label: 'Confirmar',
						onClick: () => handleClickPermissions(id),
					},
					{
						label: 'Cancelar',
					},
				],
			});
		};

	 
	
	
	return (
		<div className={listUserStyles.container}>
			<header className={listUserStyles.headerContainer}>
				<h2 className={listUserStyles.title}>
					 Identificar administrador
				</h2>
			</header>
			<section className={listUserStyles.sectionContainer}>
				<p className={listUserStyles.sectionDescription}>
				</p>
				<div>
					<table className={listUserStyles.table}>
						<thead>
							<tr>
								
								<th>Nombre</th>
								<th>Permisos</th>
								<th
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										gap: '5px',
										width: '40%',
									}}
								>
									Modificar permisos <IconInfoCircle size={20} />
								</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user) => (
								<tr>
									<td>{user?.email}</td>
									<td>{user?.roles[0].nombre}</td>
									<td className={listUserStyles.actions}>
										<div
											className={
												listUserStyles.actionButton
											}
											role="button"
											onClick={() =>
												onTogglePermissions(user.idUsuarios)
											}
										>
											{user.roles[0].nombre ===
											'ADMIN' ? (
												<IconUserDown/>
											) : (
												< IconUserUp />
											)}
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
		</div>
	)
}

export default ListUsers;
