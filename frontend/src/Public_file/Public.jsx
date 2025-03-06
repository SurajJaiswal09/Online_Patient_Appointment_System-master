import React from 'react'
import Footer from '../components_logout/Footer'
import Contact_us from '../components_logout/Contact_us'
import Appointment from '../components_logout/Appointment'
import About_us from '../components_logout/About_us'
import Banner from '../components_logout/Banner'
import Navbar from '../components_logout/Navbar'
function Public() {
    return (
        <>
        

            <Navbar />
            <div id="home">
                <Banner />

            </div>
            <div id="about-us">
                <About_us />

            </div>
            <div id="appointment">
                <Appointment />

            </div>
            <div id="contact-us">
                <Contact_us />

            </div>
            <Footer />
            
        </>
    )
}

export default Public;
