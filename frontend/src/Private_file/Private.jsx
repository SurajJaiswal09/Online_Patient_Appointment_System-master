import React from 'react'
import { Routes, Route } from "react-router-dom"
import Doctor2 from '../components_login/Doctors/Doctor2'
import Dashboard from '../components_login/Dashboard/Dashboard'
import Appointment_main from '../components_login/Appointment/Appointment_main'
function Private() {
    return (
        <>
            <Routes>
                <Route path='/Dashboard' element={<Dashboard />} />
                <Route path='/Doctors' element={<Doctor2 />} />
                <Route path='/Appointments' element={<Appointment_main />} />
            </Routes>
        </>
    );
}

export default Private;
