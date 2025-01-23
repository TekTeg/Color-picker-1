import { useState } from 'react'
import ColorButton from './ColorButton'
import PickedColor from './PickedColor'
function App() {
  const [selectedColor, setSelectedColor] = useState('')

  return (
    <>
    {
      selectedColor? <PickedColor selectedColor={selectedColor} /> : <> <ColorButton setSelectedColor={setSelectedColor} colorName={"Yellow"} className={"yellow"}  /><br />
      <ColorButton setSelectedColor={setSelectedColor} colorName={"Green"} className={"green"} /><br />
      <ColorButton setSelectedColor={setSelectedColor} colorName={"Black"} className={"black"} /> <br /></>
    }
      
      

    </>
  )
}

export default App
