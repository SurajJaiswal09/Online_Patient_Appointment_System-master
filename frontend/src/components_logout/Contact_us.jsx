import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faLocationDot,faEnvelope} from '@fortawesome/free-solid-svg-icons'


function Contact_us() {

    return (
        <>
        <div id='contactus'>

            <h1 className='text-5xl text-blue-600 text-center font-bold'>Contact Us</h1>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-40 space-y-5 space-x-0 md:space-x-12'>
                <div className='w-full md:w-1/3 space-y-2'>
                    <FontAwesomeIcon icon={faPhone} size="2x"/><br />
                    <h1>Phone</h1>
                    <p>Clinic Number(Emergency) : +91 9099909929</p>
                    <p>Telephone Number :  +91 9099909929</p>
                </div>
                <div className='w-full md:w-1/3 space-y-2'>
                <FontAwesomeIcon icon={faLocationDot} size="2x" />
                <h1>Address</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas nostrum eaque, at ducimus ea pariatur!</p>

                </div>
                <div className='w-full md:w-1/3 space-y-2'>
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                <h1>Email</h1>
                <a href="mailto:abc@gmail.com">Clinic : abc@gmail.com</a>

                </div>
            </div>
        </div>
        </>
    )
}

export default Contact_us;
