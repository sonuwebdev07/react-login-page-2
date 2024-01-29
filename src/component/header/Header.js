import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:"#5d54a4"}}>
    <div className="container-fluid">
      <Link className="navbar-brand">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className='nav-link active my-3 m-3' to="/">Log In</Link>
          </li>
          <li className="nav-item">
          <Link className='nav-link my-3 m-3 text-end' to="data-list">Data List</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
    </div>
  )
}

export default Header
