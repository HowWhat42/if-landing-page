import Logo from '../assets/images/logo.svg'
import { Tooltip } from 'flowbite-react'

const Navbar = () => {
    const copy = () => {
        navigator.clipboard.writeText('charles.lapierre@infinite-lab.com')
    }

    return (
        <div className='flex justify-between items-center py-4 xl:py-8 px-4 md:px-8 lg:px-12 xl:px-16 font-clash absolute w-full'>
            <img className='h-8 md:h-12 lg:h-16 xl:h-20' src={Logo} alt='logo' />
            <Tooltip content="Email copié" trigger="click" animation="duration-500">
                <button className='font-clash text-sm md:text-base lg:text-lg xl:text-xl ml-4 md:m-0 p-1 md:py-1 md:px-2 xl:py-2 xl:px-4 border-2 border-white rounded-lg cursor-pointer text-center hover:bg-gray-300/30' onClick={copy}>
                    charles.lapierre@infinite-lab.com
                </button>
            </Tooltip>
        </div>
    )
}

export default Navbar