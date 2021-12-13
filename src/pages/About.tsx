import React from 'react'
import Nav from '../components/Nav'
const About: React.FC = () => {
  return (
    <div className='app'>
      <Nav />
      <div className='about'>
        <p className='about__text'>This website was created on Salt HackDay under 8 Hours <br/> to test our capabilities on creating a fullstack project and 
        <br/> to see if we can handle the stress of creating a full project <br/>
        But by the End of the day I was able to build this fullstack  <br/>Selling app using node express for the backend and for the<br/>frontend I used react with some other libareries </p>
      </div>

    </div>
  )
}

export default About
