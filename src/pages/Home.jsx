import ProgressBar from 'react-bootstrap/ProgressBar';

const Home = () => {
  return(
    <div>
      <section className="container-fluid bg-image d-flex justify-content-center align-items-center">
        <div className="text-white text-center">
          <p><strong>Bonjour, je suis Romain Jeanniot</strong></p>
          <h1>Développeur web Fullstack</h1>
          <button type="button" className="btn btn-danger">En savoir plus</button>
        </div>
      </section>

      <section id="info-perso" className="container my-4">
        <div id="about" className="row rounded-4 shadow p-4">
          <div className="col-md-6">
            <h2 className="border-bottom border-primary border-3">A propos</h2>
            <img className="img-fluid rounded-3 my-4" src="./images/john-doe-about.jpg" alt=""></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem 
              perferendis non, vel in est, possimus commodi veritatis nobis, amet 
              incidunt in iure voluptatem atque! Tenetur, quia?
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente 
              dolores amet consectetur adipisicing quo aperiam nemo numquam ad. Esse 
              quia eaque ea quo, reprehenderit provident facere quas dolorem.</p>
          </div>

          <div id="progress" className="col-md-6">
            <h2 className="border-bottom border-primary border-3 mb-4">Mes compétences</h2>
            <p>HTML 5<span>
            <ProgressBar variant="success" now={70} label={`${70}%`}/></span></p>
            <p>CSS 3<span>
            <ProgressBar variant="info" now={70} label={`${70}%`} /></span></p>
            <p>JAVASCRIPT<span>
            <ProgressBar variant="warning" now={50} label={`${50}%`} /></span></p>
            <p>PHP<span>
            <ProgressBar variant="danger" now={20} label={`${20}%`} /></span></p>
            <p>REACT<span>
            <ProgressBar variant="primary" now={35} label={`${35}%`} /></span></p>
          </div>
        </div> 
      </section>
    </div>
  )
};

export default Home;