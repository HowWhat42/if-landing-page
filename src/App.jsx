import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Splitter from './components/Splitter'
import Service from './components/Service'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectImg from './assets/images/project.webp'
import DevImg from './assets/images/dev.webp'
import IntegrationImg from './assets/images/integration.webp'
import HousingImg from './assets/images/housing.webp'

const App = () => {
    const services = [
        {
            title: 'Gestion du projet',
            texts: [
                `Le gestion du projet passe par la définition précise de vos besoins en établissant un cahier des charges.`,
                `La relation client est ma priorité, c'est pourquoi je saurais m'adapter à l'évolution de vos besoins durant le développement de votre projet.`
            ],
            img: ProjectImg,
            color: '#FFAC00'
        },
        {
            title: 'Développement Front End',
            texts: [
                `Le Front End est la partie avec laquelle le client peut directement interagir.`,
                `Il s'agit du code qui s'exécute sur votre appareil sous forme d'application, de site Web...`,
                `Pour se faire, j'utilise des frameworks comme React et TailwindCSS pour obtenir un code rapide et léger.`
            ],
            img: DevImg,
            color: '#7FFF00'
        },
        {
            title: 'Développement Back End',
            texts: [
                `Le Back End correspond à l'arrière boutique d'un magasin.`,
                `C'est cette partie qui assure le bon fonctionnement de l'application ou du site Web.`,
                `On y retrouve la configuration de l'infrastructure, la gestion des bases de données et surtout la conception d'API pour interagir avec d'autres services en ligne.`
            ],
            img: IntegrationImg,
            color: '#EEFE00'
        },
        {
            title: 'Hébergement',
            texts: [
                `La création de service en ligne nécessite un hébergement de qualité.`,
                `La gestion du nom de domaine, d’un serveur mail et de la maintenance sont des points clés pour assurer la continuité de votre projet.`
            ],
            img: HousingImg,
            color: '#33DBFF'
        }
    ]

    return (
        <div className="bg-main-background bg-no-repeat w-full bg-cover">
            <Navbar />
            <Hero />
            <About />
            <Splitter />
            {services.map((service, i) => <Service key={i} title={service.title} texts={service.texts} img={service.img} color={service.color} id={i + 1} />)}
            <Contact />
            <Footer />
        </div>
    )
}

export default App
