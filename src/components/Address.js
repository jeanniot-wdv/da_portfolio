import { Link } from "react-router-dom";

export default function Address() {
  return (
    <address>
      <p className="fs-5 fw-semibold mb-0">Romain Jeanniot</p>
      <p><i className="bi bi-map"></i>1 rue du Paradis</p>
      <p><i className="bi bi-geo-alt"></i> 75000 PARIS</p>
      <p><i className="bi bi-phone"></i>+33 6 20 30 40 50</p>
      <p><i className="bi bi-envelope-at"></i> 
        <Link to="mailto: romainjeanniot@dev.com" 
        className="link-offset-2 link-light link-underline-opacity-25 link-underline-opacity-100-hover">romainjeanniot@dev.com</Link>
      </p>
    </address>
  )
}