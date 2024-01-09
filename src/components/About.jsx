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
        <p className='text-4xl lg:text-5xl xl:text-6xl font-medium font-clash mb-8'>&#060; Projets récents /&#062;</p>
        <div className='mx-4'>
          <ol ref={projetcs} className={`relative border-l border-gray-200 ${inViewProject ? 'animate-slide-left' : ''}`}>
            <li className='mb-10 ml-6 px-4'>
              <span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-purple-400 rounded-full ring-8 ring-white'>
                <HiCheck />
              </span>
              <h3 className='flex items-center mb-1 text-lg lg:text-xl font-clash font-medium text-purple-500'>
                Dashboard Trading Crypto<span className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3'>Plus récent</span>
              </h3>
              <time className='block mb-2 text-sm font-normal leading-none text-slate-300'>Janvier 2024 - React / AdonisJS (Work In Progress)</time>
              <ul className='list-disc pl-8'>
                <li>Réception et suivi de signaux de trading</li>
                <li>Trading automatisé sur différents exchanges</li>
                <li>Statistiques générales</li>
              </ul>
            </li>
            <li className='mb-10 ml-6 px-4'>
              <span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-purple-400 rounded-full ring-8 ring-white'>
                <HiCheck />
              </span>
              <h3 className='flex items-center mb-1 text-lg lg:text-xl font-clash font-medium text-purple-500'>Dashboard Channel Manager</h3>
              <time className='block mb-2 text-sm font-normal leading-none text-slate-300'>Décembre 2023 - Next.JS / AdonisJS</time>
              <p className='mb-4 text-base lg:text-lg font-normal text-slate-100'>Développement du dashboard CM Air Rental.</p>
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
              <time className='block mb-2 text-sm font-normal leading-none text-slate-300'>Octobre 2023 - React Native / AdonisJS</time>
              <p className='mb-4 text-base lg:text-lg font-normal text-slate-100'>Développement de l'application Keeper Air Rental.</p>
              <ul className='list-disc pl-8'>
                <li>Gestion des missions de ménage</li>
                <li>Notifications</li>
                <li>Statistiques de mission</li>
              </ul>
            </li>
            <li className='mb-10 ml-6 px-4'>
              <span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-purple-400 rounded-full ring-8 ring-white'>
                <HiCheck />
              </span>
              <h3 className='flex items-center mb-1 text-lg lg:text-xl font-clash font-medium text-purple-500'>Application Propriétaire</h3>
              <time className='block mb-2 text-sm font-normal leading-none text-slate-300'>Août 2022 - React Native / GraphQL / NodeJS</time>
              <p className='mb-4 text-base lg:text-lg font-normal text-slate-100'>Développement de l'application propriétaire Air Rental.</p>
              <ul className='list-disc pl-8'>
                <li>Création et gestion d'annonce de location</li>
                <li>Intégration d'un calendrier de réservations</li>
                <li>Affichage et historique des réservations</li>
                <li>Statistiques du logement</li>
              </ul>
            </li>
            <li className='mb-10 ml-6 px-4'>
              <span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-purple-400 rounded-full ring-8 ring-white'>
                <HiCheck />
              </span>
              <h3 className='flex items-center mb-1 text-lg lg:text-xl font-clash font-medium text-purple-500'>Hébergement du site Keeper Community</h3>
              <time className='block mb-2 text-sm font-normal leading-none text-slate-300'>Mai 2022 - Nginx / Certificat SSL</time>
              <p className='mb-4 text-base lg:text-lg font-normal text-slate-100'>Déploiement et gestion des certificats de sécurité du site.</p>
              <a
                target='_blank'
                href='https://keeper-community.com/'
                className='inline-flex items-center font-clash text-sm md:text-base lg:text-lg xl:text-xl ml-4 md:m-0 p-1 md:py-1 md:px-2 xl:py-2 xl:px-4 border-2 border-white rounded-lg cursor-pointer text-center hover:bg-gray-300/30 transition-all'
              >
                Voir le site{' '}
                <svg className='ml-2 w-3 h-3' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </a>
            </li>
            <li className='mb-10 ml-6 px-4'>
              <span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-purple-400 rounded-full ring-8 ring-white'>
                <HiCheck />
              </span>
              <h3 className='mb-1 text-lg lg:text-xl font-medium font-clash text-purple-500'>Composant Calendrier Adalo</h3>
              <time className='block mb-2 text-sm font-normal leading-none text-slate-300'>Janvier 2022 - React</time>
              <p className='mb-4 text-base lg:text-lg font-normal text-slate-100'>
                Création d'un composant Adalo permettant d'afficher les réservations et gérer la disponibilité d'un logement.
              </p>
              <ul className='list-disc pl-8'>
                <li>Centralisation des réservations de toutes les plateformes</li>
                <li>Verrouillage de dates</li>
                <li>Modification des prix du logement</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default About
