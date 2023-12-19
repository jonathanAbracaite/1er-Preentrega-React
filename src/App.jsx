import './App.css'
import Navbar from './comps/NavBar/Navbar'
import ItemListContainer from './comps/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
     <Navbar />
     <ItemListContainer titulo = 'Lorem ipsum.' cuerpo = 'Lorem ipsum dolor sit amet consectetur, adipiscing elit conubia commodo felis aenean, sodales tristique purus phasellus.'/>
     <ItemListContainer titulo = 'Lorem2' cuerpo = 'Lorem ipsum dolor sit amet consectetur, adipiscing elit conubia commodo felis aenean, sodales tristique purus phasellus.'/>
    </>
  )
}

export default App
