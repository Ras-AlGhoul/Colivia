import React from 'react';
import logo from '../assets/2-green.png'
import { Link } from 'react-router-dom';


const Nav: React.FC = () => {
  return (
    <div>
      <a href='/'> <img className='logo' alt='logo' src={logo}></img> </a>
      <nav className='nav'>
        <Link to='/'>
          <li> Home </li>
        </Link>
        <Link to='/search'>
          <li> Search </li>
        </Link>
        <Link to='/About'>
          <li> About </li>
        </Link>
      </nav>
    </div>
  )
}

export default Nav
