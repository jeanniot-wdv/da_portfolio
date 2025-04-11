import { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid bg-dark bg-gradient navbar-dark">
        <div className="container p-4">
          <div className="row text-white">
            <div className="col-md-4">
              <address>
                <p><strong>Romain Jeanniot</strong></p>
                <p>1 rue du Paradis</p>
                <p>75000 PARIS</p>
                <p>+33 6 20 30 40 50</p>
                <p>romainjeanniot@dev.com</p>
              </address>
            </div>
            <nav className="col-md-4">
              <h3>Liens utiles</h3>
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
            <div className="col-md-4">
              <h3>Mes dernières réalisations</h3>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}