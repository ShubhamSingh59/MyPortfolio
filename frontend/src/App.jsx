import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/body/body.jsx'
import About from './components/about/about.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id='main-section'>
        <Navbar></Navbar>
        <Body></Body>
      </section>
      <About></About>
    </>
  )
}

export default App
