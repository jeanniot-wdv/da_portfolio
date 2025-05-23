import { Link } from "react-router-dom";
import TopTitle from "../components/Title";
import { Title, Meta } from "react-head";

import projects from "../components/ProjectsData";

const Portfolio = () => {
  return(
    <>
      {/* Titre de l'onglet de la page */}
      <Title>Mon Portfolio | Romain Jeanniot Portfolio</Title>
      {/* Meta description pour le SEO */}
      <Meta name="description" content="Voici quelques unes de mes réalisations"></Meta>

      <TopTitle title="Mon portfolio"
      description="Voici quelques unes de mes réalisations"/>

      <div className="container"> 
        <section id="portfolio" className="row row-cols-1 row-cols-md-2 row-cols-lg-3 text-center gy-4 mb-4">
          {/* Parcours dynamique de la liste des projets */}
          {projects.map((project) => (
            <div className="col" key={project.title}>
              <div className="card h-100">
                <img src={project.image} className="card-img-top" alt={project.image} />
                <div className="card-body">
                  <h2 className="card-title fs-5">{project.title}</h2>
                  <p className="card-text">{project.description}</p>
                  <Link to={project.site} className="btn btn-secondary">Voir le site</Link>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">{project.footer}</small>
                </div>
              </div>
            </div>
            ))
          }
        </section>
      </div>
    </>
  )
};

export default Portfolio;