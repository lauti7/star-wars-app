import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return(
    <header className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <p className="navbar-brand" >Star Wars</p>
          <ul className="navbar-nav">
            <li className="nav-item">
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/personajes">personajes</Link>
            </li>
            <li className="nav-item">
            </li>
          </ul>
        </nav>
     </header>
  )
}


export default Menu
