import React, { useState } from 'react'
import './Styles/about.css'
const About = () => {
        const [skills]= useState([
            'Javascript','React-js','Node js','Express Js',"C++",'Python','Git & GitHub', 'Data Structures and Algorithms'
        ]);
        

  return (
    <div id="about">
    <h1 id="h1-about">About Me and My Skills</h1>

        
            <div id="paragraph-contianer">
        <p>
            I am a passionate developer, with ability to write efficient code in MERN Stack.
            I have been developing web apps since May 2021. I am well versed in coding using c++ and javascript (and its framworks).
            As I grow and flourish as a Developer, one thing which keeps me going is my iquisitiveness for discovering new things every day.
        </p>
        
        </div>

                <div id="skills-div">
                    {
                        skills.map((skill,idx)=><div className='skill-div' key={idx}>{skill}</div>)
                    }
                </div>
        <div>

        </div>
    </div>
  )
}

export default About