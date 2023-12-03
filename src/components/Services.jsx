import React from 'react'

const Services = () => {
    return (
        <div className='w-full xl:h-[155vh] flex justify-center items-center'>
            <div className='w-5/6 h-full flex flex-col items-center justify-center gap-4 xl:gap-6'>
                <div className='w-full flex flex-col xl:flex-row gap-4 xl:gap-6 h-3/5'>
                    <div className='w-full xl:w-1/5 bg-white/20 h-full p-4 rounded-lg'>
                        <p className='uppercase text-white/50'>Front end</p>
                        <p className='font-clash text-xl py-2 bg-clip-text'>Une interface visuelle pour chacun de vos appareils</p>
                        <p className='font-clash text-white/70 text-lg pb-2'>Site Web</p>
                        <p className='pb-4'>
                            E-commerce, vitrine, blog, portfolio, dashboard... Je saurais m'adapter à vos besoins. <br /> Du concept à la réalité, chaque détail
                            est soigneusement intégré pour offrir une expérience utilisateur immersive sur tous les appareils. Un site web qui vous ressemble et
                            qui s'adapte à tous les écrans.
                        </p>
                        <p className='font-clash text-white/70 text-lg pb-2'>Application mobile</p>
                        <p>
                            Besoin de fidéliser vos clients ou de fonctionnalités spécifiques ? <br />
                            Je vous accompagne dans la création de votre application mobile, de la conception à la publication sur les stores. <br /> Que ce
                            soit pour iOS ou Android, je m'engage à créer des expériences utilisateur fluides et intuitives. Cette application pourra vous
                            suivre partout.
                        </p>
                    </div>
                    <div className='w-full xl:w-4/5 flex flex-col gap-4 xl:gap-6 h-full'>
                        <div className='bg-white/20 w-full h-1/3 p-4 rounded-lg'>
                            <p className='uppercase text-white/50'>Back end</p>
                            <p className='font-clash text-xl py-2'>Des performances fluides en coulisses</p>
                            <p>
                                Tout restaurant a besoin d'une cuisine. Je m'assure que toutes les interactions avec l'interface soient rapides et efficaces.
                                <br /> Je m'occupe de la configuration de l'infrastructure, de la gestion des bases de données et de la conception d'API pour
                                interagir avec d'autres services en ligne. Mon objectif est de mettre la logique métier au premier plan pour répondre pleinement
                                à vos besoins. Le choix des technologies se fera en fonction de la logique métier pour garantir des performances optimales et
                                offrir une possibilité d'évolution à votre projet.
                            </p>
                        </div>
                        <div className='w-full h-1/3 flex flex-col xl:flex-row gap-4 xl:gap-6'>
                            <div className='bg-white/20 w-full xl:w-2/5 h-full p-4 rounded-lg'>
                                <p className='uppercase text-white/50'>Référencement</p>
                                <p className='font-clash text-xl py-2'>Soyez le premier aux yeux de vos clients</p>
                                <p>
                                    Je m'occupe du référencement (SEO) pour que votre site Web soit optimisé pour les moteurs de recherche afin que vous
                                    puissiez être trouvé par vos clients potentiels. <br /> Je vous accompagne également dans la mise en place de campagnes
                                    publicitaires (SEA) pour vous garantir une visibilité optimale.
                                </p>
                            </div>
                            <div className='bg-white/20 w-full xl:w-3/5 h-full p-4 rounded-lg'>
                                <p className='uppercase text-white/50'>Gestion de projet</p>
                                <p className='font-clash text-xl py-2'>Un projet géré de l'idée à la production</p>
                                <p>
                                    Etant très à l'écoute, je saurais m'adapter à l'évolution de vos besoins durant le développement de votre projet. <br />
                                    Ma méthode de gestion de projet personnalisée garantit une collaboration étroite, des résultats efficaces et des solutions
                                    sur mesure adaptées à vos besoins spécifiques.
                                </p>
                            </div>
                        </div>
                        <div className='w-full h-1/3 flex flex-col xl:flex-row gap-4 xl:gap-6'>
                            <div className='w-full xl:w-4/6 bg-white/20 h-full p-4 rounded-lg'>
                                <p className='uppercase text-white/50'>Sur-mesure</p>
                                <p className='font-clash text-xl py-2'>Un problème ? Une solution adaptée</p>
                                <p>
                                    Chaque projet est unique, et c'est pourquoi je m'engage à créer des solutions sur mesure qui répondent précisément à vos
                                    besoins. Du design à l'intégration, de la gestion de projet à l'hébergement, chaque aspect est conçu sur mesure pour
                                    refléter votre vision, s'adapter à vos besoins et correspondre à votre budget.
                                </p>
                            </div>
                            <div className='w-full xl:w-2/6 bg-white/20 h-full p-4 rounded-lg'>
                                <p className='uppercase text-white/50'>Hébergement</p>
                                <p className='font-clash text-xl py-2'>Votre projet entre de bonnes mains</p>
                                <p>
                                    Mon but, vous assurer la sécurité, la vitesse et la fiabilité de votre service en ligne. <br />
                                    Je m'occupe de la gestion de votre nom de domaine, de votre serveur mail et de la maintenance de votre projet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services

