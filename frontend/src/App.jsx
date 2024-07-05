import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/body/body.jsx'
import About from './components/about/about.jsx'
import Footer from './components/footer/footer.jsx'
import Projects from './components/projects/projects.jsx';
import Contact from './components/contact/contact.jsx';
import Blog from './components/blogs/blogs.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id='main-section'>
        <Navbar></Navbar>
        <Body></Body>
      </section>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer/>
    </>
  )
}

export default App
