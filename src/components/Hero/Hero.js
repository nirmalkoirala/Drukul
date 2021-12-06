import React from 'react'
import './HeroStyles.css'
import {Link} from 'react-router-dom'
import Video from '../../assets/video2.mp4'


const Hero = () => {
    return (
        <div className="hero">
            <video autoPlay loop muted id='video' >
                 <source src={Video} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Drukul. Edu. Co.</h1>
                <p>Australia's number one education consultancy </p>
                <div>
                    <Link to='/training' className='btn'>Call Us Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
