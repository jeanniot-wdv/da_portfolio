import { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid bg-dark bg-gradient navbar-dark">
        <div className="row text-white">
          <div className="col-md-4">
            <address>
              <p><strong>Romain Jeanniot</strong></p>
              <p>1 rue du Paradis</p>
              <p>75000 PARIS</p>
              <p>+33 6 20 30 40 50</p>
              <p>janedoe@gmail.com</p>
            </address>
          </div>
          <nav className="col-md-4">
            <h3>Liens utiles</h3>
          </nav>
          <div className="col-md-4">
            <h3>Mes dernières réalisations</h3>
          </div>
        </div>
      </footer>
    )
  }
}