import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../utils/routes'

const Navbar = () => {
  return (
    <div className='navbar'>
        
        <div className='navLinks'>
            <Link to={routes.home}><h3>Inicio</h3></Link>
            <Link to={routes.products}><h3>Productos</h3></Link>
            <Link to={routes.carrito}><h3>Carrito</h3></Link>
            <Link to={routes.recomendations}><h3>Recomendaciones</h3></Link>
        </div>
    </div>
  )
}

export default Navbar