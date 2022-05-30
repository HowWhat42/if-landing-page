import { Navbar, Hero, About, Services, Contact, Footer } from './components'
import './App.scss'


function App() {

  return (
    <div className="App">
      <h1>Infinite Lab</h1>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
