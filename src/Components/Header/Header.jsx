import React from 'react'
import './header.css'
import logo from '../../Assets/Images/MyLogo.png'
import NavItem, { NavItemDropDown } from '../NavItem/NavItem'
import { Link } from "react-router-dom";
import PrimaryButton from '../Buttons/Buttons';

const Header = () => {
  
  return (
    <>
  <nav className="navbar  navbar-expand-lg navbar-dark ">
  <div className="container">
    <Link to="/" className="navbar-brand"> <h2>PS4 GAMES</h2></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <NavItem>
        <Link to="/" className="nav-link"> Home </Link>
        </NavItem>
        <NavItem>
        <Link to="/Browse" className="nav-link"> Browse </Link>
        </NavItem>
        <NavItem>
        <Link to="/Profile" className="nav-link"> Pofile </Link>
        </NavItem>
        <NavItem>
        <Link to="/Streming" className="nav-link"> Strems </Link>
        </NavItem>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Details
          </a>
          <ul className="dropdown-menu">
            <NavItemDropDown>
              <a className="dropdown-item" href="#">Action</a>
            </NavItemDropDown>
            <NavItemDropDown><a className="dropdown-item" href="#">Another action</a></NavItemDropDown>
            <NavItemDropDown><hr className="dropdown-divider" /></NavItemDropDown>
            <NavItemDropDown><a className="dropdown-item" href="#">Something else here</a></NavItemDropDown>
          </ul>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2 "  type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-light" style={{color:"#8E94F2"}} type="submit">Search</button>
        Primar
      </form>
    </div>
  </div>
</nav>


    </>
  )
}

export default Header