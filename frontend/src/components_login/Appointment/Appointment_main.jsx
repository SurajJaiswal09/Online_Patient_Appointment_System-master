import React from 'react'
import Appointments from '../Appointments'
import Navbar_login from '../Navbar_login'
function Appointment_main() {
    return (
        <>

            <Navbar_login />
            <div className='min-h-screen'>
                <Appointments/>
            </div>
        

        </>
    )
}

export default Appointment_main;
