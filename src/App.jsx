import { Route, Routes} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Fruits from './components/Fruits/Fruits'
import Footer from './components/Footer/Footer'
import About from './components/About/about'
import Contact from './components/Contact/Contact'
function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Fruits />} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
