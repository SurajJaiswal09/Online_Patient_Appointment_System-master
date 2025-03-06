import React from 'react'
import Navbar_login from '../Navbar_login'
import Dash from '../Dash'
function Dashboard() {
  return (
    <>

      <Navbar_login />
      <div className='min-h-screen'>
        <Dash />
      </div>
 
    </>
  )
}

export default Dashboard
