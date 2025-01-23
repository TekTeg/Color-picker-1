import "./index.css"
const PickedColor = (props) => {
  return (
    <h2 className = "selected-color" >{props.selectedColor}</h2>
  )
}

export default PickedColor