import React from 'react'
import about_us from '../../public/about_us.jpg'
function About_us() {
    return (<>
    <div id="aboutus">

    </div>
        <h1 className='text-5xl text-blue-600 text-center font-bold mt-20 md:mt-0'>About Us</h1>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-16 md:my-32 space-y-3'>
            {/* left side */}
            <div className='w-full md:w-1/2 order-2 md:order-1 space-y-5'>
                <h1 className='text-4xl md:text-6xl font-bold'>We are <span className='text-blue-600'>developing</span> a <span className='text-blue-600'>healthcare system</span> around you</h1>
                <p>We think that everyone should have easy access to excellent
                    healthcare. Our aim is to make the procedure as simple as
                    possible for our patients and to offer treatment no matter
                    where they are — in person or at their convenience.
                </p>
            </div>
            {/* right side */}
            <div className='w-full md:w-1/2 order-1'>
                <img src={about_us} alt="" className='rounded-2xl md:rounded-full w-86 h-96 ml-none md:ml-28' />
            </div>

        </div>
    </>
    )
}

export default About_us
