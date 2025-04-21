import { useState , useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from 'react-router-dom';
import { Title, Meta } from "react-head";

const Home = () => {
  // États pour stocker les données récupérées depuis l'API GitHub
  const [userData, setUserData] = useState([]); 
  const [userDataRepo, setUserDataRepo] = useState([]); 
  const [userDataFollo, setUserDataFollo] = useState([]); 
  const [userDataFllg, setUserDataFllg] = useState([]); 

  useEffect(() => {
    // Fonction pour récupérer les données GitHub
    const  getUserData = async() => { 
    const res = await  fetch("https://api.github.com/users/jeanniot-wdv");
    const data = await res.json(); 

    const resRepo = await  fetch("https://api.github.com/users/jeanniot-wdv/repos");
    const dataRepo = await resRepo.json(); 

    const resFollo = await  fetch("https://api.github.com/users/jeanniot-wdv/followers");
    const dataFollo = await resFollo.json(); 

    const resFllg = await  fetch("https://api.github.com/users/jeanniot-wdv/following");
    const dataFllg = await resFllg.json(); 

    // Mise à jour des états avec les données récupérées
    setUserData(data); 
    setUserDataRepo(dataRepo); 
    setUserDataFollo(dataFollo); 
    setUserDataFllg(dataFllg); 
    }; 
    getUserData (); 

    }, []);

  return(
    <>
      {/* Titre de l'onglet de la page */}
      <Title>Romain Jeanniot Portfolio</Title>
      {/* Meta description pour le SEO */}
      <Meta name="description" content="Bienvenue sur mon site Portfolio">
      </Meta>

      <section id="intro" className="d-flex bg-image justify-content-center align-items-center">
        <div className="text-white text-center">
          <p><strong>Bonjour, je suis Romain Jeanniot</strong></p>
          <h1>Développeur web Fullstack</h1>
          <button type="button" className="btn btn-warning mt-4" data-bs-toggle="modal" data-bs-target="#myModal">En savoir plus</button>
        </div>

        <div className="modal fade border-opacity-25" id="myModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-black bg-opacity-75 text-white">
              <div className="modal-header  border-0" data-bs-theme="dark">
                <h1 className="modal-title fs-5" id="modalLabel">Mon profil GitHub</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <img className="img-fluid rounded-5 my-4" src={userData.avatar_url} alt=''/>
                    </div>
                    <div className='col-md-6'>
                      <p className='border-bottom mt-4 pb-2'>
                        <i className="bi bi-person"></i> 
                        <Link to="https://github.com/jeanniot-wdv" target='_blank'>{userData.name}</Link>
                      </p>
                      <p className='border-bottom pb-2'><i class="bi bi-geo-alt"></i> {userData.location}</p>
                      <p className='border-bottom pb-2'><i class="bi bi-card-heading"></i> {userData.bio}</p>
                      <p className='border-bottom pb-2'><i class="bi bi-box"></i> Repositories : {userDataRepo.length}</p>
                      <p className='border-bottom pb-2'><i class="bi bi-people"></i> Followers : {userDataFollo.length}</p>
                      <p><i class="bi bi-people"></i> Following : {userDataFllg.length}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer border-0">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
              </div>
            </div>
          </div>
        </div>


      </section>

      <section id="info" className="container my-4">
        <div className="row rounded-4 shadow p-4">
          <section id="about" className="col-md-6">
            <h2 className="border-bottom border-secondary border-3">A propos</h2>
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
            <h2 className="border-bottom border-secondary border-3 mb-4">Mes compétences</h2>
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
    </>
  )
};

export default Home;