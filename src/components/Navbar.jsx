import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
   <nav>
        <NavLink to="/" className="brand">Rick &amp; Morty Explorer</NavLink>
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
    </div>
    </nav>
  )
}

export default Navbar