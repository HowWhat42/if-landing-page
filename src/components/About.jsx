import { HiCheck } from 'react-icons/hi'
import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col justify-between mx-8 lg:mx-12 xl:mx-16'>
            <div>
                <p className='text-4xl lg:text-5xl xl:text-6xl font-medium font-clash mb-8'>&#060; A propos /&#062;</p>
                <div className='text-sm md:text-base lg:text-lg xl:text-xl mb-16 font-medium'>
                    <p>Moi c'est Charles ! J'ai 20 ans et je suis développeur Fullstack !</p>
                    <p>Passionné par le développement, je décide en 2021 de me lancer à 100% à mon compte en créant Infinite Lab.</p>
                    <p>Je m'occupe de votre projet de la création du premier prototype à l'hébergement final en passant par un développement réfléchis et optimisé.</p>
                    <p>Je travail aussi bien pour des entreprises que pour des particuliers, alors vous êtes tous les bienvenus !</p>
                    <p>Quelque soit votre projet, je saurais vous accompagner et trouver une solution répondant à vos besoins.</p>
                </div>
            </div>
            <div>
                <p className='text-4xl lg:text-5xl xl:text-6xl font-medium font-clash mb-8'>&#060; Projets récents /&#062;</p>
                <div className='mx-4'>
                    <ol className="relative border-l border-gray-200">
                        <li className="mb-10 ml-6 px-4">
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-purple-400 rounded-full ring-8 ring-white">
                                <HiCheck />
                            </span>
                            <h3 className="flex items-center mb-1 text-lg lg:text-xl font-clash font-medium text-purple-500">Application Keeper <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">Plus récent</span></h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-slate-300">Août 2022 - React Native / NodeJS</time>
                            <p className="mb-4 text-base lg:text-lg font-normal text-slate-100">Développement de l'application propriétaire Air Rental.</p>
                        </li>
                        <li className="mb-10 ml-6 px-4">
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-purple-400 rounded-full ring-8 ring-white">
                                <HiCheck />
                            </span>
                            <h3 className="mb-1 text-lg lg:text-xl font-medium font-clash text-purple-500">Composant Calendrier Adalo</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-slate-300">Janvier 2022 - React</time>
                            <p className="text-base lg:text-lg font-normal text-slate-100">Création d'un composant Adalo permettant d'afficher les réservations et gérer la disponibilité d'un logement.</p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default About