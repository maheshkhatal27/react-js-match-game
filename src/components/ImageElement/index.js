import './index.css'

const ImageElement = props => {
  const {imageItemDetails, currentImageTabClick} = props
  const {id, thumbnailUrl} = imageItemDetails
  const onClickImageTab = () => {
    currentImageTabClick(id)
  }

  return (
    <li className="thumbnail-image-item">
      <button className="thumbnail-btn" type="button" onClick={onClickImageTab}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ImageElement
