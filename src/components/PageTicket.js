import React, { useContext, useState, useEffect } from 'react'
import moment from "moment"
import Header from "./Header"
import TableTasks from "./TableTasks"

const PageTicket = () => {
	return (
		<>
			<Header title="Nombre ticket" />
			<div class="tile is-ancestor">
			  <div class="tile is-6 is-vertical is-parent">
			    <div class="tile is-child box">
			      <p class="title">Responsable: Tomas Perez</p>
			      <p class="title">Estado: Abierto</p>
			      <p class="title">Severidad: 2</p>
			      <p class="title">Fecha Límite: 30-12-2021</p>
			   </div>
			  </div>
			  <div class="tile is-parent">
			    <div class="tile is-child box">
			      <p class="title">Descripción</p>
			      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
			      <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
			      <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
			    </div>
			  </div>
			</div>
			<TableTasks />

		</>
	)
}

export default PageTicket