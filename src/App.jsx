import { Navbar, Hero, About, Splitter, Service, Contact, Footer } from './components'
import './App.scss'
import './Button.scss'
import DevImg from './assets/images/dev.jpg'
import IntegrationImg from './assets/images/integration.jpg'
import HousingImg from './assets/images/housing.jpg'

const App = () => {
  const services = [
    {
      title: 'Développement',
      text: `Au travers de la création d’applications et de fonctionnalités, Infinite Lab peut vous proposer une solution sur mesure.
            Nous pouvons réaliser tout type de projet, du plus simple au plus exigeant avec NodeJS et NPM.
            Nous créons les APIs, à l'aide d'Express, pour interconnecter votre projet avec la partie client et d’autres services en ligne.`,
      img: DevImg,
      color: '#FFA800'
    },
    {
      title: 'Intégration',
      text: `Nous pouvons intégrer des design et maquettes à l’aide des technologies Web telles que React.JS pour le contenu et l'aspect fonctionnel et SCSS pour la mise en forme. 
            Gestion de bases de données SQL ou NoSQL.`,
      img: IntegrationImg,
      color: '#00B2FF'
    },
    {
      title: 'Hébergement',
      text: `La création de service en ligne nécessite un hébergement de qualité. 
            La gestion du nom de domaine, d’un serveur mail et de la maintenance sont des points clés pour assurer la continuité de votre projet.`,
      img: HousingImg,
      color: '#2400FF'
    }
  ]

  return (
    <div className="App">
      <div className="App-main">
        <Navbar />
        <Hero />
        <About />
        <Splitter />
      </div>
      {services.map((service, i) => <Service key={i} title={service.title} text={service.text} img={service.img} color={service.color} id={i + 1} />)}
      <Contact />
      <Footer />
    </div>
  )
}

export default App
