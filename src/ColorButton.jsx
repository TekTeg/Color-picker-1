import "./index.css"
const ColorButton = (props) => {
  console.log(props)
  return (
    <button className={props.className} onClick={() => { props.setSelectedColor(props.colorName) }}>{props.colorName}</button>
  )
}
export default ColorButton