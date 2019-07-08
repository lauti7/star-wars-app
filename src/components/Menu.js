import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return(
    <header className="sticky-top mb-3">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand" >Star Wars</Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/personajes">Personajes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favoritos">Favoritos</Link>
            </li>
          </ul>
        </nav>
     </header>
  )
}


export default Menu
