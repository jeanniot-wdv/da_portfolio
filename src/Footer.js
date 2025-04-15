import { Component } from "react";
import { Link } from "react-router-dom";
import Address from "./Address";

export default class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid bg-dark bg-gradient navbar-dark p-4">
        <div className="d-flex text-white justify-content-around">
          <Address />
          <nav className="">
            <h3 className="fs-5 lh-base">Liens utiles</h3>
            <ul className="navbar-nav">
              <li className="nav-item">
                  <Link className="nav-link py-0" aria-current="page" to="/">Accueil</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link py-0" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link py-0" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link py-0" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link py-0" to="/mention">Mentions légales</Link>
              </li>
            </ul>
          </nav>
          <div className="">
            <h3 className="fs-5 lh-base">Mes dernières réalisations</h3>
          </div>
        </div>
      </footer>
    )
  }
}