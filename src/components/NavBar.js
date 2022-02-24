import React from 'react'
import CartWidget from "./CartWidget.js"

const NavBar = () => {
  return (
    <nav className="navbar ms-auto">
        <ul className="d-flex align-items-center m-0">
          <li className="mx-1"><a href="#" className="text-white py-2 px-3">Categoría 1</a></li>
          <li className="mx-1"><a href="#" className="text-white py-2 px-3">Categoría 2</a></li>
          <li className="mx-1"><a href="#" className="text-white py-2 px-3">Categoría 3</a></li>
          <li className="mx-1"><a href="#" className="text-white py-2 px-3">Categoría 4</a></li>
        </ul>
        <div className='contProfile ms-4 d-flex align-items-center'>
          <CartWidget/>
          <a href='#' className='login py-2 px-3'><small>SALIR</small></a>
        </div>
    </nav> 
  )
}

export default NavBar