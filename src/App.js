import React, { useContext, useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import moment from "moment"
import TableTickets from "./components/TableTickets"
import TableProducts from "./components/TableProducts"
import PageTicket from "./components/PageTicket"
import CreateTicket from "./components/CreateTicket"

//import LeadModal from "./LeadModal"
//import { UserContext } from "../context/UserContext"

const App = () => {
    const [tickets, setTickets] = useState(false)

    /*return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<TableProducts setTickets={setTickets}/>} />
                <Route exact path="/tickets" element={<TableTickets />} />
                <Route exact path="/tickets/ticket" element={<PageTicket />} />
            </Routes>
        </BrowserRouter>
    )*/
    return <CreateTicket />
}



export default App