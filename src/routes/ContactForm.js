import React from 'react'
import Contact from '../components/Contact/Contact'

import Footer from '../components/Footer/Footer'
import Form from '../components/Form'
import InfoSection from '../components/InfoSection/InfoSection'
import Navbar from '../components/Navbar/Navbar'

const ContactForm = () => {
    return (
        <div>
            <Navbar />
            <InfoSection heading='CONTACT' text='Contact DRUKUL Education'/>
            <Form />
            <Footer />
        </div>
    )
}

export default ContactForm
