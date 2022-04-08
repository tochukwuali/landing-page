import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo/Logo'
import './Navbar.css'

const Navbar = () => {
  return (
    <section className='navbar-wrapper'>
      <div className='navbar-logo'>
        <Logo /> 
      </div>
      <div className='navbar-links'>
        <ul>
          <li><Link to="/company">Company</Link></li>
          <li><Link to="/discover">Discover</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <button>Get the app</button>
      </div>
    </section>
  )
}

export default Navbar