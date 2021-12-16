import React from 'react'
import { Link } from 'react-router-dom'

const BotonVerTicket = () => (
	<Link to="/tickets">
		<button className="button mr-2 is-info is-light">
		Ver tickets
		</button>
	</Link>
)

export default BotonVerTicket

