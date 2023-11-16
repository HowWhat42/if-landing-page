import React from 'react'
import Input from './Input'
import { Resend } from 'resend'
import Email from './Email'

const resend = new Resend(process.env.RESEND_API_KEY)

const Contact = () => {
    const sendEmail = async (e) => {
        e.preventDefault()

        try {
            await resend.emails.send({
                from: 'Infinite Lab <alert@teasquare.fr>',
                to: 'charles.lapierre@infinite-lab.com',
                subject: e.target.subject.value,
                react: Email({ name: e.target.lastname.value, email: e.target.email.value, message: e.target.message.value }),
            })
        } catch (error) {
            throw new Error(error)
        }
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
                    <input
                        className='font-clash w-1/3 text-sm md:text-base lg:text-lg py-1 px-2 border-2 border-white rounded-lg cursor-pointer text-center hover:bg-gray-300/30'
                        value='Envoyer'
                        type='submit'
                    />
                </form>
            </div>
        </div>
    )
}

export default Contact

