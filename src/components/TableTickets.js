import React, { useContext, useState, useEffect } from 'react'
import moment from "moment"
import Header from "./Header"
//import ErrorMessage from "./ErrorMessage"
//import Loading from "./Loading"
//import LeadModal from "./LeadModal"

const TableTickets = () => {
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
			<Header title="Tickets" />
			<button className ="button is-fullwidth mb-5 is-primary">
			CREAR TICKET
			</button>
			<table className="table is-fullwidth">
				<thead>
					<tr>
						<th>Título</th>
						<th>Responsable</th>
						<th>Fecha límite</th>
						<th>Estado</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Problema Celular</td>
						<td>Tomas Perez</td>
						<td>30-12-2021</td>
						<td>Abierto</td>
						<td>
							<button className="button mr-2 is-info is-light">
							Detalles
							</button>
						</td>
					</tr>
					<tr>
						<td>Problema Celular2</td>
						<td>Tomas Perez</td>
						<td>30-12-2021</td>
						<td>Abierto</td>
						<td>
							<button className="button mr-2 is-info is-light">
							Detalles
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	)
}

export default TableTickets