import { useState, useEffect } from 'react'
import Logo from '../assets/images/logo.svg'
import Wireframe from '../assets/images/wireframe.png'

const Hero = () => {
    // Track mouse position
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const updateMousePosition = ev => {
        setMousePosition({ x: ev.clientX, y: ev.clientY })
    }

    useEffect(() => {
        window.addEventListener('mousemove', updateMousePosition)

        return () => window.removeEventListener('mousemove', updateMousePosition)
    }, [])

    const scales = [1, 0.93, 0.85, 0.8, 0.75]

    // Move wireframes with parallax effect on mouse move
    const moveWireframes = () => {
        const wireframes = document.querySelectorAll('.wireframes')

        wireframes.forEach((group) => {
            group.childNodes.forEach((wireframe, index) => {
                // Move and rotateX and rotateY and scale wireframes
                // RotateX and rotateY are inverted to have a better effect and max rotation is 20deg and min rotation is -20deg to avoid wireframes to go out of the screen
                // Translate max is 100px and min is -100px to avoid wireframes to go out of the screen
                // Use dX and dY to have a lerp effect
                wireframe.style.transform = `translate(${(mousePosition.x - window.innerWidth / 2) / 5 * scales[index]}px, ${(mousePosition.y - window.innerHeight / 2) / 5 * scales[index]}px) rotateX(${-((mousePosition.y - window.innerHeight / 2) / 10 * scales[index]) / 5}deg) rotateY(${((mousePosition.x - window.innerWidth / 2) / 10 * scales[index]) / 5}deg) scale(${scales[index]})`
            })
        })
    }

    useEffect(() => {
        moveWireframes()
    }, [mousePosition])

    return (
        <div className='h-screen flex justify-center xl:justify-start items-center'>
            <div className='hidden xl:flex logo h-screen w-1/2 items-center justify-center wireframes'>
                <img className='h-64 absolute wireframe' src={Logo} alt='logo' />
                <img className='h-64 absolute wireframe opacity-70 blur-[1px]' src={Wireframe} alt='wireframe1' />
                <img className='h-64 absolute wireframe opacity-50 blur-[2px]' src={Wireframe} alt='wireframe2' />
                <img className='h-64 absolute wireframe opacity-40 blur-[3px]' src={Wireframe} alt='wireframe3' />
                <img className='h-64 absolute wireframe opacity-30 blur-[4px]' src={Wireframe} alt='wireframe4' />
            </div>
            <div className='font-clash md: flex flex-col justify-center items-center text-center animate-fade-in'>
                <p className='text-xl md:text-3xl lg:text-4xl xl:text-5xl'>Lancez votre projet avec</p>
                <p className='tracking-wide text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-medium text-transparent my-4' style={{ WebkitTextStrokeWidth: '0.08rem', WebkitTextStrokeColor: '#FFF' }}>Infinite Lab</p>
                <p className='text-base md:text-lg lg:text-xl xl:text-2xl mb-3'>Entreprise de développement informatique</p>
                <p className='text-base md:text-lg lg:text-xl xl:text-2xl px-4 py-2 bg-gray-300/30 rounded-lg border-white border'>Web - Application - 3D</p>
            </div>
        </div>
    )
}

export default Hero