import { Link } from "react-router-dom";
import Header from "../components/Header";
import Address from "../components/Address";
import Accordion from 'react-bootstrap/Accordion';
import { Title, Meta } from "react-head";

const Mention = () => {
  return(
    <>
      <Title>Mentions légales | Romain Jeanniot Portfolio</Title>
      <Meta name="robots" content="noindex, nofollow"></Meta>

      <div id="mention">
      <Header title="Mentions légales"
      description=""/>
      <div className="container pb-4">

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="button-active-color-secondary">Editeur du site</Accordion.Header>
            <Accordion.Body><Address /></Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur</Accordion.Header>
            <Accordion.Body>
              <address>
                <h3>Alwaysdata</h3>
                <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                <p><i className="fa-solid fa-globe"></i> <Link to="https://www.alwaysdata.com" target="_blank">www.alwaysdata.com</Link></p>
              </address>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              <h2>Crédits</h2>
              <p>Ce site a été réalisé par Romain Jeanniot, étudiant au <Link to="https://www.centre-europeen-formation.fr/" target="_blank">Centre Européen de formation</Link></p>
              <p><em>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <Link to="https://pixabay.com/fr/" target="_blank">Pixabay</Link></em></p>
              <p><em>La ravicon de ce site a été fournie par <Link to="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="_blank">John de Icons erstellt von Freepik - Flaticon</Link></em></p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
    </>
  )
};

export default Mention;