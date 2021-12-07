import React from 'react'
import './PricingStyles.css'
// import { Link } from 'react-router-dom'

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    {/* <h3>- Basic -</h3>
                    <span className='bar'></span> */}
                    <p className='btc'>Career Counseling:</p>
                    <p>To put our clients in better position to make life-changing decisions, we take one-on-one session for career counseling. Based on our clients’ ability and interest, we provide them with options and backup options for various courses and universities selection. </p>
                </div>
                <div className='card'>
                    <p className='btc'>Assist in application process:</p>
                    <p>Understanding the application process is critical t successfully submitting your application. We guide our clients on how to submit and track their application, where to find information, formatting requirements submission policies and submission dates. </p>
                </div>
                <div className='card'>
                    <p className='btc'>Monitoring:</p>
                    <p>We constantly keep in touch with our clients and keep track of what they are up to on both personal and academically. We are committed in helping out our clients in times of difficulties. </p>
                </div>
            </div>            
        </div>
    )
}

export default Pricing
