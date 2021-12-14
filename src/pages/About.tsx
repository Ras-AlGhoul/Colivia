import React from 'react'
import Nav from '../components/Nav'
const About: React.FC = () => {
  return (
    <div className='app'>
      <Nav />
      <div className='about'>
        <p className='about__text'>This website was created for an interview with Colivia using typescript, react and node </p>
      </div>

    </div>
  )
}

export default About
