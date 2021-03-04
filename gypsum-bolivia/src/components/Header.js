import { Link } from 'gatsby';
import React from 'react'

export default function Header() {
 return (
  <nav>
   <h1>Gypsum Bolivia</h1>
   <div className="links">
    <Link to='/'>Inicio</Link>
    <Link to='/about'>Quienes Somos</Link>
    <Link to='/products'>Productos</Link>
    <Link to='/services'>Servicios</Link>
    <Link to='/equipment'>Equipos</Link>
    <Link to='/portfolio'>Portafolio</Link>
    <Link to='/contact'>Contacto</Link>
   </div>
  </nav>
 )
}
