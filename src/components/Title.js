
export default function TopTitle(props) {
  return (
    <div className="d-flex flex-column align-items-center">
      <img className="img-fluid" src="./images/banner.jpg" alt="banner portfolio bleu"></img>
      <div className="text-center px-4 mt-4">
        <h1>{props.title}</h1>
        <p className="mb-4">{props.description}</p>
      </div>
      <div className="border-bottom border-secondary border-3 w-25 mb-4"></div>
    </div>
  )
}