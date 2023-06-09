import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div className='navbar'>
      <h2 className='logo'><span className="fn">Booki</span><span className="ln">Man</span> </h2>
      <div className="search-box">
        <input type="search" placeholder='Search Here' />
      </div>
      <div>
      <NavLink to={'/'}><i className="fa-solid fa-house"></i></NavLink>
      <NavLink to={'/favorites'}><i className="fa-solid fa-heart"></i></NavLink>
      </div>
     
    </div>
  )
}

export default Navbar
