import React from 'react'
import Navbar_login from '../Navbar_login'
import Dash from '../Dash'

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900">
      <Navbar_login />
      <main className="pt-4">
        <Dash />
      </main>
    </div>
  )
}

export default Dashboard
