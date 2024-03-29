import React from 'react'
import Input from './Input'
import emailjs from 'emailjs-com'

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault()
        document.getElementById('status').innerText = ''

        emailjs
            .sendForm('service_2fah0n8', 'template_q5fc0b7', e.target, '1ZQfE7ltt-ZRrlVfP')
            .then((result) => {
                console.log(result.text)
                document.getElementById('status').innerText = 'Message envoyé'

                setTimeout(() => {
                    document.getElementById('status').innerText = ''
                }, 3000)
            })
            .catch((err) => {
                console.log(err)
                document.getElementById('status').innerText = "Erreur lors de l'envoi du message. Veuillez réessayer ultérieurement."
            })
        e.target.reset()
    }

    return (
        <div className='p-8 md:py-16 xl:py-48 lg:px-12 xl:px-16'>
            <p className='font-clash text-4xl lg:text-5xl xl:text-6xl font-medium mb-8'>&#060; Contact /&#062;</p>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div className='flex flex-col lg:max-w-lg'>
                    <div className='font-medium text-sm md:text-base lg:text-lg xl:text-xl'>
                        <p>
                            Vous avez une idée en tête, un projet ? <br /> N'hésitez pas à me contacter directement par mail ou directement avec le formulaire.
                        </p>
                        <p>Je me ferais un plaisir d'étudier votre demande et vous proposer un devis adapté à vos besoins.</p>
                        <p>Je reste à votre disposition pour toutes autres questions et/ou demandes de renseignements.</p>
                    </div>
                </div>
                <form className='flex flex-col items-start lg:w-1/2 lg:ml-8 font-clash mt-8 lg:mt-0' onSubmit={sendEmail}>
                    <div className='flex w-full justify-between gap-4'>
                        <Input type={'text'} name={'lastname'} placeholder={'Nom'} />
                        <Input type={'email'} name={'email'} placeholder={'Email'} />
                    </div>
                    <Input type={'text'} name={'subject'} placeholder={'Objet'} />
                    <textarea
                        className='bg-gray-300/20 text-sm md:text-base lg:text-lg text-white w-full h-36 border-2 border-white hover:border-purple-500 rounded-lg p-2 mb-4'
                        name='message'
                        placeholder='Message'
                        required
                    />
                    <div className='flex gap-4 items-center w-full'>
                        <input
                            className='font-clash w-1/3 text-sm md:text-base lg:text-lg py-1 px-2 border-2 border-white rounded-lg cursor-pointer text-center hover:bg-gray-300/30'
                            value='Envoyer'
                            type='submit'
                        />
                        <p id='status'></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact

