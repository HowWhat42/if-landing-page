import React from 'react'
import './About.scss'

const About = () => {
    return (
        <div className='if-about' id='about'>
            <p className='if-about__title'>&#060; A propos /&#062;</p>
            <div className='if-about__text'>
                <p>En 2021, je me suis lancé dans la création de mon entreprise en freelance proposant des services de développement, d'intégration et de gestion d'hébergement ; c'est ainsi qu'est né Infinite Lab.</p>
                <p>Je suis un jeune développeur curieux qui cherche à apprendre et développer mes compétences au travers de mon entreprise.</p>
                <p>Infinite Lab est une entreprise encore jeune mais qui à déjà su répondre aux attentes de différents clients.</p>
                <p>Quelque soit votre projet, je saurais vous accompagner de la structuration au déploiement final.</p>
            </div>
            <a className='if-button' href='http://portfolio.infinite-lab.com'>Voir Portfolio</a>
        </div>
    )
}

export default About