import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <h3>Typeing Express</h3>
      <Link to='/'>Signup</Link>
    </nav>
  )
}

export default Navbar;
