import React from 'react'
import Doctors from '../Doctors'
import Navbar_login from '../Navbar_login'

function Doctor2() {
  return (
    <>

      <Navbar_login />
      <div className='min-h-screen'>
        <Doctors />
      </div>
    </>
  )
}

export default Doctor2
