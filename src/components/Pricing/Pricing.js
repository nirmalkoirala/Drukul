import React from 'react'
import './PricingStyles.css'
import { Link } from 'react-router-dom'

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>- Basic -</h3>
                    <span className='bar'></span>
                    <p className='btc'> Consultancy</p>
                    <p>- Book appointment -</p>
                    <p>- Book appointment -</p>
                    <p>- Book appointment -</p>
                </div>
                <div className='card'>
                    <h3>- Basic -</h3>
                    <span className='bar'></span>
                    <p className='btc'> Consultancy</p>
                    <p>- Book appointment -</p>
                    <p>- Book appointment -</p>
                    <p>- Book appointment -</p>
                </div>
                <div className='card'>
                    <h3>- Basic -</h3>
                    <span className='bar'></span>
                    <p className='btc'> Consultancy</p>
                    <p>- Book appointment -</p>
                    <p>- Book appointment -</p>
                    <p>- Book appointment -</p>
                </div>
            </div>            
        </div>
    )
}

export default Pricing
