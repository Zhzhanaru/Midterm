import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.styles.css'

const Navbar = () => {
  return (
    <div className='nav-bar-container'>
    <nav className="nav-links-container">
        <Link to='/' className='nav-links-dark'>Home</Link>
        <Link to='/profile' className='nav-links-dark'>Profile</Link>
        <Link to='/post' className='nav-links-dark'>Post</Link>
    </nav>
    </div>
  )
}

export default Navbar