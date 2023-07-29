import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../utils/routes'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbar'>
        <div className={`navLinks ${isOpen && 'open'}`}>
            <Link to={routes.home}><h3>Inicio</h3></Link>
            <Link to={routes.carrito}><h3>Carrito</h3></Link>
            <Link to={routes.recomendations}><h3>Recomendaciones</h3></Link>
        </div>
        <div className={`navToggle ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)}>
          <img src='images/menuburger.png' alt=''/>
        </div>
    </div>
  )
}

export default Navbar