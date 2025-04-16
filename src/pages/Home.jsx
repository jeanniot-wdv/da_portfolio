import ProgressBar from 'react-bootstrap/ProgressBar';

const Home = () => {

  

  return(
    <div>
      <section id="intro" className="container-fluid bg-image d-flex justify-content-center align-items-center">
        <div className="text-white text-center">
          <p><strong>Bonjour, je suis Romain Jeanniot</strong></p>
          <h1>Développeur web Fullstack</h1>
          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#myModal">En savoir plus</button>
        </div>

        <div className="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Mon profil GitHub</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                
              </div>
              <div class="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>


      </section>

      <section id="info-perso" className="container my-4">
        <div className="row rounded-4 shadow p-4">
          <section id="about" className="col-md-6">
            <h2 className="border-bottom border-primary border-3">A propos</h2>
            <img className="img-fluid rounded-3 my-4" src="./images/john-doe-about.jpg" alt="john doe bureau"></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem 
              perferendis non, vel in est, possimus commodi veritatis nobis, amet 
              incidunt in iure voluptatem atque! Tenetur, quia?
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente 
              dolores amet consectetur adipisicing quo aperiam nemo numquam ad. Esse 
              quia eaque ea quo, reprehenderit provident facere quas dolorem.</p>
          </section>

          <section id="progress" className="col-md-6">
            <h2 className="border-bottom border-primary border-3 mb-4">Mes compétences</h2>
            <p>HTML 5</p>
            <ProgressBar variant="success" now={70} label={`${70}%`}/>
            <p>CSS 3</p>
            <ProgressBar variant="info" now={70} label={`${70}%`}/>
            <p>JAVASCRIPT</p>
            <ProgressBar variant="warning" now={50} label={`${50}%`}/>
            <p>PHP</p>
            <ProgressBar variant="danger" now={20} label={`${20}%`}/>
            <p>REACT</p>
            <ProgressBar variant="primary" now={35} label={`${35}%`}/>
          </section>
        </div> 
      </section>
    </div>
  )
};

export default Home;