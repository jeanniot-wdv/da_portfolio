
export default function Header(props) {
    return (
      <div className="row d-flex flex-wrap justify-content-center">
        <img className="img-fluid" src="./images/banner.jpg" alt="banner portfolio bleu"></img>
        <div className="text-center px-4 mt-4">
          <h1>{props.title}</h1>
          <p className="mb-4">{props.description}</p>
        </div>
        <div className="border-bottom border-primary border-3 w-25 mb-4"></div>
      </div>
    )
}