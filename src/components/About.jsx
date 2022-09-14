import { Timeline } from 'flowbite-react'
import { HiCheck } from 'react-icons/hi'
import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col justify-between mx-8 lg:mx-12 xl:mx-16'>
            <div>
                <p className='text-4xl lg:text-5xl xl:text-6xl font-medium font-clash mb-8'>&#060; A propos /&#062;</p>
                <div className='text-sm md:text-base lg:text-lg xl:text-xl mb-16 font-medium'>
                    <p>En 2021, je me suis lancé dans la création de mon entreprise en freelance proposant des services de développement, d'intégration et de gestion d'hébergement ; c'est ainsi qu'est né Infinite Lab.</p>
                    <p>Je suis un jeune développeur curieux qui cherche à apprendre et développer mes compétences au travers de mon entreprise.</p>
                    <p>Infinite Lab est une entreprise encore jeune mais qui à déjà su répondre aux attentes de différents clients.</p>
                    <p>Quelque soit votre projet, je saurais vous accompagner de la structuration au déploiement final.</p>
                </div>
            </div>
            <div>
                <p className='text-4xl lg:text-5xl xl:text-6xl font-medium font-clash mb-8'>&#060; Projets /&#062;</p>
                <div className='mx-4'>
                    <Timeline>
                        <Timeline.Item>
                            <Timeline.Point icon={HiCheck} />
                            <Timeline.Content className='py-4'>
                                <Timeline.Time>
                                    Août 2022
                                </Timeline.Time>
                                <Timeline.Title className='font-clash text-purple-400'>
                                    Application Keeper
                                </Timeline.Title>
                                <Timeline.Body className='text-slate-100'>
                                    Développement de l'application propriétaire Air Rental en React Native.
                                </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                        <Timeline.Item>
                            <Timeline.Point icon={HiCheck} />
                            <Timeline.Content className='py-4'>
                                <Timeline.Time>
                                    Janvier 2022
                                </Timeline.Time>
                                <Timeline.Title className='font-clash text-purple-400'>
                                    Composant Calendrier Adalo
                                </Timeline.Title>
                                <Timeline.Body className='text-slate-100'>
                                    Création d'un composant Adalo permettant d'afficher les réservations et gérer la disponibilité d'un logement.
                                </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                    </Timeline>
                </div>
            </div>
        </div>
    )
}

export default About