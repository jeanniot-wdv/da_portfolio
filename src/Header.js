


export default function Header(props) {
    return (
      <div className="d-flex flex-wrap justify-content-center">
        <img className="img-fluid" src="./images/banner.jpg" alt="banner portfolio bleu"></img>
        <div className="border-bottom border-primary border-3 text-center px-4 my-4">
          <h1>{props.title}</h1>
          <p className="mb-4">{props.description}</p>
        </div>
      </div>
    )
}