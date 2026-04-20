import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/NavBar'
import Zap from './components/WhatsappBtn'
import About from './components/About'
import './styles/global.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <Zap />
    </>
  )
}

export default App
