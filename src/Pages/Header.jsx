import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div class="sticky-sm-top">
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/skills">Skills</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contacts</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/projects" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Details/4">The Himalayan Times</Link></li>
            <li><Link className="dropdown-item" to="/Details/2">Karkhana</Link></li>
            <li><Link className="dropdown-item" to="/Details/1">Janaki Airways</Link></li>
            <li><Link className="dropdown-item" to="/Details/3">Janaki Collections</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
   

    </>
  )
}

export default Header