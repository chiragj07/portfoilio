import React from 'react'
import './Styles/home.css'
import fnal from '../assets/fnal.png'
const Home = () => {
    
    return (
    
    
    <div id="home-container">
        <div id="intro-container">
            <h1>I am Chirag Joshi</h1>
            <p>Sotware Developer</p>
            <button id="contact-button">
               <a href="#contact">Connect Me</a> </button>
        </div>
        <div id="image-container">
            <img src={fnal} alt="unavailable" width={"328px"} height={"300px"} />
        </div>    

    </div>

  )
}

export default Home