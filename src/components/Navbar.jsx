import Logo from '../assets/images/logo.svg'

const Navbar = () => {
    const copy = () => {
        navigator.clipboard.writeText('charles.lapierre@infinite-lab.com')
        const emailButton = document.querySelector('.email-button')
        emailButton.classList.add('bg-gray-300/30')
        emailButton.innerHTML = 'Email copié !'
        setTimeout(() => {
            emailButton.classList.remove('bg-gray-300/30')
            emailButton.innerHTML = 'charles.lapierre@infinite-lab.com'
        }, 2000)
    }

    return (
        <div className='flex justify-between items-center py-4 xl:py-8 px-4 md:px-8 lg:px-12 xl:px-16 font-clash absolute w-full'>
            <img className='h-8 md:h-10' src={Logo} alt='logo' />
            <div>
                <button className='email-button w-64 xl:w-96 font-clash text-sm md:text-base lg:text-lg xl:text-xl ml-4 md:m-0 p-1 md:py-1 md:px-2 xl:py-2 xl:px-4 border-2 border-white rounded-lg cursor-pointer text-center hover:bg-gray-300/30 transition-all' onClick={copy}>
                    charles.lapierre@infinite-lab.com
                </button>
            </div>
        </div>
    )
}

export default Navbar