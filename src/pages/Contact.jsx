import Header from "../Header";
import Address from "../Address";
import MyMap from "../Maps";

const Contact = () => {
  return(
    <div>
      <Header title="Contactez moi" 
      description="Pour me contacter en vue d'un entretien ou 
      d'une futur collaboration, merci de remplir ce formulaire."/>

      <section id="contact" className="container my-4">
        <div className="row rounded-4 shadow p-4">
          <div className="col-md-6">
            <h2 className="border-bottom border-primary border-3 mb-4">Formulaire de contact</h2>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" id="name" placeholder="Votre nom" required/>
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" id="email" placeholder="Votre adresse email" required/>
              </div>
              <div className="mb-3">
                <input type="tel" className="form-control" id="phone" placeholder="Votre numéro de téléphone" pattern="0[0-9]{9}"required/>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="subject" placeholder="Sujet" required/>
              </div>
              <div className="mb-3">
                <textarea className="form-control" id="message" rows="8" placeholder="Votre message" required/>
              </div>
              <div className="d-flex mx-auto">
                <button type="" className="btn btn-primary mx-auto">Envoyer</button>
              </div>
            </form>
          </div>

          <div id="" className="col-md-6">
            <h2 className="border-bottom border-primary border-3 mb-4">Mes coordonnées</h2>
            <Address />
            <div id="google-map"><MyMap /></div>
            
          </div>
        </div> 
      </section>

    </div>
  )
};

export default Contact;