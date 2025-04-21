import { Component } from "react";
import { Link, NavLink } from "react-router-dom";


export default class Header extends Component {
  render() {
    return (
      <header className="container-fluid gx-0 text-uppercase">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow px-5 fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand text-capitalize text-warning" to="/">MyPortfolio</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">Accueil</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/services">Services</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/mention">Mentions légales</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}