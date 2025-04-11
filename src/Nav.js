import { Component } from "react";
import { Link } from "react-router-dom";


export default class Nav extends Component {
  render() {
    return (
      <header className="container-fluid gx-0 text-uppercase">
        <nav className="navbar navbar-expand-lg bg-gradient navbar-dark bg-dark shadow px-5 fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="./images/favicon_io/favicon-32x32.png" alt="Bootstrap" width="30" height="24" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Accueil</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/services">Services</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/mention">Mentions légales</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}