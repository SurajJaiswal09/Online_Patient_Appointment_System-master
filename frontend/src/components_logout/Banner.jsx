import React from 'react'
import banner from "../../public/Banner.jpg"
import { Link } from 'react-scroll'

function Banner() {
  return (
    <>

      <div id='home'>

        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row min-h-screen">
          <div className="w-full md:w-1/2 mt-12 md:mt-56 order-2 md:order-1">
            <div className='space-y-12'>
              <h1 className='text-5xl md:text-6xl font-bold'>We're <span className='text-blue-600'>determined</span> for <span className="hidden lg:inline"><br /></span>
                your <span className='text-blue-600'>better life</span></h1>
              <p className='text-xl'>You can get the care you need 24/7 - be it online or in person. You will be treated by caring specialist doctors.</p>
            </div>
            <Link to='makeappointment' smooth={true} duration={500} offset={-100} className="cursor-pointer">
              <button href="" className="bg-blue-600 text-white px-7 py-3 hover:bg-blue-700 duration-300 cursor-pointer rounded-lg mt-6">Make An Appointment</button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img src={banner} alt="" className="md:rounded-full h-92 w-96 lg:ml-32 mt-32 md:mt-36 " />
          </div>
        </div>
      </div>

    </>
  )
}
export default Banner;
