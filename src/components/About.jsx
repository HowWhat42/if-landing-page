import { HiCheck } from 'react-icons/hi'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true })
  const { ref: projetcs, inView: inViewProject } = useInView({ triggerOnce: true })
  return (
    <div className='flex flex-col justify-between px-8 lg:px-12 xl:px-20 py-8 md:py-16 xl:py-48'>
      <div ref={ref} className={inView ? 'animate-fade-in' : ''}>
        <p className='text-4xl lg:text-5xl xl:text-6xl font-medium font-clash mb-8'>Qui suis-je ?</p>
        <div className='text-sm md:text-base lg:text-lg xl:text-xl mb-16 font-medium lg-:w-2/3'>
          <p>Moi c'est Charles, je suis développeur Fullstack !</p>
          <p>Passionné par le développement, je décide en 2021 de me lancer à 100% à mon compte en créant Infinite Lab.</p>
          <p>Je m'occupe de votre projet de la création du premier prototype à l'hébergement final en passant par un développement réfléchi et optimisé.</p>
          <p>Mes services s'adressent aussi bien pour des entreprises que pour des particuliers, alors vous êtes tous les bienvenus !</p>
          <p>Quelque soit votre projet, je saurais vous accompagner et trouver une solution répondant à vos besoins.</p>
        </div>
      </div>
      <div className='pt-8 md:pt-16 xl:pt-32'>
        <p className='text-4xl lg:text-5xl xl:text-6xl font-medium font-clash mb-8'>&#060; Projets réalisés /&#062;</p>
        <div className='mx-4'>
          <ol ref={projetcs} className={`relative border-l border-gray-200 ${inViewProject ? 'animate-slide-left' : ''}`}>
            <li className='mb-10 ml-6 px-4'>
              <span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-purple-400 rounded-full ring-8 ring-white'>
                <HiCheck />
              </span>
              <a href="https://www.reveal.me/" target="_blank" rel="noreferrer"><h3 className='flex items-center mb-1 text-lg lg:text-xl font-clash font-medium text-purple-500 hover:underline'>Reveal
              {/* <span className='bg-blue-100 text-bluehttps://www.infinite-lab.com/-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3'>Plus récent</span> */}
              </h3></a>
              <time className='block mb-2 text-sm font-normal leading-none text-slate-300'>Next.JS / NestJS</time>
              <ul className='list-disc pl-8'>
                <li>Réseau social pour adultes</li>
                <li>Travail en équipe avec Figue.io</li>
                <li>Architecture DDD</li>
              </ul>
            </li>
            <li className='mb-10 ml-6 px-4'>
              <span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-purple-400 rounded-full ring-8 ring-white'>
                <HiCheck />
              </span>
              <h3 className='flex items-center mb-1 text-lg lg:text-xl font-clash font-medium text-purple-500'>Dashboard City Manager</h3>
              <time className='block mb-2 text-sm font-normal leading-none text-slate-300'>React / InertiaJS / AdonisJS</time>
              <p className='mb-4 text-base lg:text-lg font-normal text-slate-100'>Développement du dashboard CM Air Rental</p>
              <ul className='list-disc pl-8'>
                <li>Affichage des réservations, logements</li>
                <li>Création/modification Keeper, propriétaire</li>
                <li>Statistiques générales</li>
              </ul>
            </li>
            <li className='mb-10 ml-6 px-4'>
              <span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-purple-400 rounded-full ring-8 ring-white'>
                <HiCheck />
              </span>
              <h3 className='flex items-center mb-1 text-lg lg:text-xl font-clash font-medium text-purple-500'>Application Keeper</h3>
              <time className='block mb-2 text-sm font-normal leading-none text-slate-300'>React Native / AdonisJS</time>
              <p className='mb-4 text-base lg:text-lg font-normal text-slate-100'>Développement de l'application mobile Keeper</p>
              <ul className='list-disc pl-8'>
                <li>Gestion des missions de ménage</li>
                <li>Notifications</li>
                <li>Statistiques de mission</li>
                <li>Intégration d'un calendrier de réservations</li>
                <li>Affichage et historique des réservations</li>
                <li>Statistiques du logement</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default About
