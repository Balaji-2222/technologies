import './index.css'

const Coding = props => {
  const {cardsItems} = props
  const {title, description, imgUrl, className} = cardsItems
  return (
    <li className="cardContainer">
      <li className={className}>
        <h1 className="heading1">{title}</h1>
        <p className="paragraph1">{description}</p>
        <div className="imageContainer">
          <img src={imgUrl} alt={title} className="image" />
        </div>
      </li>
    </li>
  )
}

export default Coding
