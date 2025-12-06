import React from 'react'
import './navbar.css';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <nav className='navbar'>
        <NavLink to="/" className="nav-item">Home</NavLink>
        <NavLink to="/login" className="nav-item">Login</NavLink>
        <NavLink to="/dashboard" className="nav-item">Dashboard</NavLink>
        <NavLink to="/add-applications" className="nav-item">Add Application</NavLink>

        <NavLink to="/application" className="nav-item">Applications</NavLink>
    </nav>
  )
}

export default Navbar
