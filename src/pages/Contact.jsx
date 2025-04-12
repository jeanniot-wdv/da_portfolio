import Header from "../Header";
import Address from "../Address";

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
              <div class="mb-3">
                <input type="text" class="form-control" id="name" placeholder="Votre nom"/>
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" id="email" placeholder="Votre adresse email"/>
              </div>
              <div class="mb-3">
                <input type="tel" class="form-control" id="phone" placeholder="Votre numéro de téléphone"/>
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" id="subject" placeholder="Sujet"/>
              </div>
              <div class="mb-3">
                <textarea class="form-control" id="message" rows="8" placeholder="Votre message"/>
              </div>
              <div className="d-flex mx-auto">
                <button type="" class="btn btn-primary mx-auto">Envoyer</button>
              </div>
            </form>
          </div>

          <div id="map" className="col-md-6">
            <h2 className="border-bottom border-primary border-3 mb-4">Mes coordonnées</h2>
            <Address />

          </div>
        </div> 
      </section>

    </div>
  )
};

export default Contact;