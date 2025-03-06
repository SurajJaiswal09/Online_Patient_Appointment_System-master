import React from 'react'
import { Routes, Route } from "react-router-dom";
import Public from './Public_file/Public.jsx';
import Private from './Private_file/Private.jsx';
import ScrollToTopButton from './components_logout/ScrollToTopButton.jsx';
import Cursor from './Custom_cursor/Cursor.jsx';

function App() {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Cursor/>
        <Routes>
          <Route path='/' element={<Public/>} />
          <Route path='/Dashboard/*' element={<Private/>} />
          <Route path='/Doctors/*' element={<Private/>} />
          <Route path='/Appointments/*' element={<Private/>} />
        </Routes>
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default App;
