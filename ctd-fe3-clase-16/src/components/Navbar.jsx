import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../utils/routes'

const Navbar = () => {
  return (
    <nav>
        {/* Aqui deberan agregar los Links */}
        <Link to={routes.home}><h4 className='link'>Home</h4></Link>
        <Link to={routes.contact}><h4 className='link'>Contacto</h4></Link>
    </nav>
  )
}

export default Navbar