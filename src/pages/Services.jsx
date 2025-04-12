
const Card = (props) => {
  return (
    <div className="col">
      <div className="card h-100">
      <i class="fa-solid fa-house"></i>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  )
}

const Services = () => {
  return(
    <div className="d-flex flex-wrap justify-content-center">
      <img className="img-fluid" src="./images/banner.jpg" alt="banner portfolio bleu"></img>
      <div className="border-bottom border-primary border-3 text-center px-4 my-4">
        <h1>Mon offre de services</h1>
        <p className="mb-4">Voici les prestations sur lesquelles je peux intervenir</p>
      </div>
      <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3 text-center gy-4 mb-4">
        <Card title="UX Design" 
          description="L'UX Design est une discipline qui consiste à concevoir des 
          produits (sites web, applications mobiles, logiciels, objets connectés, etc.) 
          en plaçant l'utilsatour au centro des préoccupations. L'objectif est de rendre 
          l'expérience utilisateur le plus fluide et agréable possible."/>

        <Card title="Développement web" 
          description="Le dévelonnement de sites web consiste à créer des sites internet 
          en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et 
          des frameworks (Bootstrap, React, Angular, etc.)."/>

        <Card title="Référencement" 
          description="Le référencement naturel (SEO) est une technique aui consiste à 
          optimiser un site web pour le faire romontor donc loc récultote des metoure de 
          recherche Google. Bina. Yahoo. etc.). L'obiectif est d'attirer un maximum de 
          visiteurs qualifiés sur le web."/>
      </div>
    </div>
    )
};

export default Services;