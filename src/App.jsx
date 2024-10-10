import './App.css'
import Header from './Header'

import {BrowserRouter as Router,Route,Link, Routes}
from 'react-router-dom'
import Principal from './Principal'
import Footer from './Footer'
import Contador from './COntador'
import { Mensaje } from './Mensaje'
import { RickAndMorty } from './RickAndMorty'
let encabezado='Encabezado 🎉 🎁'
let principal='Principal'
let footer='Derechos reservados ✅'

{/* <Header text={encabezado}/>
<Principal text={principal}/>
<Footer text={footer}/> */}

function App() {
//logica

  return (
    <>
    <Router>
      <nav style={{padding:'10px',
       border:'10px solid green'}}>
        <Link to='/header'>Header</Link>
        <Link to='/main'>Principal</Link>
        <Link to='/footer'>Footer</Link>
      </nav>
      <Routes>
        <Route path='/header' element={<Header text={encabezado}/>}/>
        <Route path='/main' element={<Principal text={principal}/>}/>
        <Route path='/footer' element={<Footer text={footer}/>}/>
        <Route path='/contador' element={<Contador/>}/>
        <Route path='/mensaje' element={<Mensaje/>}/>
        <Route path='/api' element={<RickAndMorty/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
