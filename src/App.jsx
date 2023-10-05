import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'
import Principal from './Principal'
import Educacion from './Educacion'
import Habilidades from './Habilidades'
import Proyectos from './Proyectos'
import Contacto from './Contacto'
import Final from './Final'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Principal/>
      <Educacion/>
      <Habilidades/>
      <Proyectos/>
      <Contacto/>
      <Final/>
    </>
  )
}

export default App
