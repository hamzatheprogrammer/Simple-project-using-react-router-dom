import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <nav>
      <ul>
        <li>
          <NavLink style={({isActive}) => ({color: isActive? 'red': 'black'})} to={'/'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => ({color: isActive? 'red': 'black'})} to={'/about'}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
      
    </div>
  )
}

export default Navbar