import React, { useContext, useState, useEffect } from 'react'
import moment from "moment"
import Header from "./Header"
import BotonVerTicket from "./BotonVerTickets"
import CreateTicket from "./CreateTicket"

const TableProducts = () => {
	return (
		<>
			<CreateTicket />
			<Header title="Productos" />
			<button className ="button is-fullwidth mb-5 is-primary">
			BUSCAR
			</button>
			<table className="table is-fullwidth">
				<thead>
					<tr>
						<th></th>
						<th>Producto</th>
						<th>Versión</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td />
						<td>Celular</td>
						<td>Versión 1.0.1</td>
						<td>
							<BotonVerTicket />
						</td>
					</tr>
					<tr>
						<td />
						<td></td>
						<td>Versión 1.0.2</td>
						<td>
							<BotonVerTicket />
						</td>
					</tr>
				</tbody>
			</table>
		</>
	)
}

export default TableProducts