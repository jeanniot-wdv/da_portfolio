import Header from "../Header";

const Card = (props) => {
  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-body">
          <i className={props.icon}></i>
          <h2 className="card-title">{props.title}</h2>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  )
}

const Services = () => {
  return(
    <div>

      <Header title="Mon offre de services"
      description="Voici les prestations sur lesquelles je peux intervenir"/>

      <div className="container">
        <div id="services" className="row row-cols-1 row-cols-md-2 row-cols-lg-3 text-center gy-4 mb-4">
          <Card icon="text-primary fa-solid fa-desktop py-5" title="UX Design" 
            description="L'UX Design est une discipline qui consiste à concevoir des 
            produits (sites web, applications mobiles, logiciels, objets connectés, etc.) 
            en plaçant l'utilsatour au centro des préoccupations. L'objectif est de rendre 
            l'expérience utilisateur le plus fluide et agréable possible."/>

          <Card icon="text-primary fa-solid fa-code py-5" title="Développement web" 
            description="Le dévelonnement de sites web consiste à créer des sites internet 
            en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et 
            des frameworks (Bootstrap, React, Angular, etc.)."/>

          <Card icon="text-primary fa-solid fa-magnifying-glass py-5" title="Référencement" 
            description="Le référencement naturel (SEO) est une technique qui consiste à 
            optimiser un site web pour le faire remonter dans les résultats des moteurs de 
            recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de 
            visiteurs qualifiés sur le site."/>
          </div>
        </div>
    </div>
    )
};

export default Services;