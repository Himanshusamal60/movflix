import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <>
      <nav className="navbar text-sm-center navbar-expand-lg  bg-dark">
  <div className="container-fluid  justify-content-center">
    <Link className="navbar-brand  navbrand-color  fs-3" to="/">Navbar</Link>
    <button className="navbar-toggler navbarIconBg position-absolute  end-0 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-lg-5  me-auto mb-2 mb-lg-0">
        <li className="nav-item text-center ">
          <Link className="nav-link text-light active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item text-center">
          <Link className="nav-link text-light" to="/trending" >Trending</Link>
        </li>
        <li className="nav-item text-center">
          <Link className="nav-link text-light" to="/events">Events</Link>
        </li>
        <li className="nav-item text-center">
          <Link className="nav-link text-light" to="games">Games</Link>
        </li>
     
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control  me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success " type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Nav
