import React, { useContext, useState, useEffect } from 'react'
import moment from "moment"
import Header from "./Header"
//import ErrorMessage from "./ErrorMessage"
//import Loading from "./Loading"
//import LeadModal from "./LeadModal"

const TableTasks = () => {
	const [activeModal, setActiveModal] = useState(false)
	
	/*const handleUpdate = async () => {
		setId(id)
		setActiveModal(true)
	}


	const handleModal = () => {
		setActiveModal(!activeModal)
		getLeads()
		setId(null)
	}*/

	//<LeadModal active={activeModal} handleModal={handleModal} token={token} id={id} setErrorMessage={setErrorMessage}/>
	return (
		<>
			<Header title="Tareas" />
			<table className="table is-fullwidth">
				<thead>
					<tr>
						<th>Título</th>
						<th>Estado</th>
						<th>Horas Trabajadas</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Arreglar celular</td>
						<td>En desarrollo</td>
						<td>0:36:13</td>
						<td>
							<button className="button mr-2 is-danger is-light">
							Borrar tarea
							</button>
						</td>
					</tr>
					<tr>
						<td>Arreglar tablet</td>
						<td>Cerrado</td>
						<td>2:12:13</td>
						<td>
							<button className="button mr-2 is-danger is-light">
							Borrar tarea
							</button>
						</td>
					</tr>
				</tbody>
			</table>
			<button className ="button is-fullwidth mb-5 is-primary">
			CREAR TAREA | ASIGNAR TAREA
			</button>
		</>
	)
}

export default TableTasks