import './App.css'
import Navbar from './components/navbar.jsx'
import Home from './components/home.jsx'
import Projects from './components/projects.jsx' 
import AboutMe from './components/about.jsx'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Projects/>   
      <AboutMe/>
    </div>
  )
}

export default App
