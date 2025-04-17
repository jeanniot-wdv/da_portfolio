import { Link } from "react-router-dom";
import Header from "../Header";

const CardProject = (props) => {
  return (
    <article className="col">
        <div className="card h-100">
          <img src={props.image} className="card-img-top" alt={props.image} />
          <div className="card-body">
            <h2 className="card-title fs-5">{props.title}</h2>
            <p className="card-text">{props.description}</p>
            <Link to={props.site} className="btn btn-primary">Voir le site</Link>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">{props.cardFooter}</small>
          </div>
        </div>
    </article>
  )
}

const Portfolio = () => {
  return(
    <section>
      <Header title="Mon portfolio"
      description="Voici quelques unes de mes réalisations"/>

      <div className="container"> 
        <section id="portfolio" className="row row-cols-1 row-cols-md-2 row-cols-lg-3 text-center gy-4 mb-4">
          <CardProject 
            image="./images/portfolio/fresh-food.jpg" 
            title="Fresh Food" 
            description="Site de vente de produit frais en ligne" 
            site="" 
            cardFooter="Site réalisé avec PHP et MySQL"/>

          <CardProject 
            image="./images/portfolio/restaurant-japonais.jpg" 
            title="Restaurant Akira" 
            description="Site de vente de produit frais en ligne" 
            site="" 
            cardFooter="Site réalisé avec Wordpress"/>
            
          <CardProject 
            image="./images/portfolio/espace-bien-etre.jpg" 
            title="Espace bien-être" 
            description="Site de vente de produit frais en ligne" 
            site="" 
            cardFooter="Site réalisé avec LARAVEL"/>
            
          <CardProject 
            image="./images/portfolio/seo.jpg" 
            title="SEO" 
            description="Amélioration du référencement d'un site e-commerce" 
            site="" 
            cardFooter="Utilisation des outils SEO"/>
            
          <CardProject 
            image="./images/portfolio/coder.jpg" 
            title="Création d'une API" 
            description="Création d'une API RESTFULL publique" 
            site="" 
            cardFooter="PHP - SYMPHONY"/>
            
          <CardProject 
            image="./images/portfolio/screens.jpg" 
            title="Maquette d'un site web" 
            description="Création du prototype d'un site web" 
            site="" 
            cardFooter="Réalisé avec FIGMA"/>
        </section>
      </div>
    </section>

    
  )
};

export default Portfolio;