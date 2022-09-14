import React from 'react'
import { TextInput, Label } from 'flowbite-react'
import Input from './Input'
import emailjs from 'emailjs-com'

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_2fah0n8', 'template_q5fc0b7', e.target, '1ZQfE7ltt-ZRrlVfP')
            .then((result) => console.log(result.text))
            .catch((err) => console.log(err))
        e.target.reset()
    }


    return (
        <div className='flex flex-col lg:flex-row justify-between px-8 lg:px-12 xl:px-16' id='contact'>
            <div className='flex flex-col lg:max-w-lg'>
                <p className='font-clash text-4xl lg:text-5xl xl:text-6xl font-medium mb-4'>&#060; Contact /&#062;</p>
                <hr className='w-full border-2 rounded-sm mb-8' />
                <div className='font-medium text-sm md:text-base lg:text-lg xl:text-xl'>
                    <p>Pour tout projet, vous pouvez nous contacter afin d’obtenir un devis sur mesure et gratuit répondant à votre besoin.</p>
                    <p>Nous restons à votre disposition pour toutes questions et demande de renseignement.</p>
                </div>
            </div>
            <form className='flex flex-col items-start lg:w-1/2 lg:ml-8 font-clash mt-8 lg:mt-0' onSubmit={sendEmail}>
                <Input type={'text'} name={'firstname'} placeholder={'Prénom'} />
                <Input type={'text'} name={'lastname'} placeholder={'Nom'} />
                <Input type={'email'} name={'email'} placeholder={'Email'} />
                <Input type={'text'} name={'subject'} placeholder={'Objet'} />
                <textarea className='bg-gray-300/20 text-sm md:text-base lg:text-lg text-white w-full h-24 border-2 border-white rounded-lg p-2 mb-4' name='message' placeholder='Message' required />
                <input className='font-clash text-sm md:text-base lg:text-lg py-1 px-2 border-2 border-white rounded-lg cursor-pointer text-center hover:bg-gray-300/30' value='Envoyer' type='submit' />
            </form>
        </div>
    )
}

export default Contact