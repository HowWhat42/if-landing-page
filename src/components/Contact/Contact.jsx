import React from 'react'
import './Contact.scss'
import Input from '../Input/Input'
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
        <div className='if-contact' id='contact'>
            <div className='if-contact__container'>
                <p className='if-contact__title'>&#060; Contact /&#062;</p>
                <hr />
                <div className='if-contact__text'>
                    <p>Pour tout projet, vous pouvez nous contacter afin d’obtenir un devis sur mesure et gratuit répondant à votre besoin.</p>
                    <p>Nous restons à votre disposition pour toutes questions et demande de renseignement.</p>
                </div>
            </div>
            <form className='if-contact__form' onSubmit={sendEmail}>
                <Input type={'text'} name={'firstname'} placeholder={'Prénom'} />
                <Input type={'text'} name={'lastname'} placeholder={'Nom'} />
                <Input type={'email'} name={'email'} placeholder={'Email'} />
                <Input type={'text'} name={'subject'} placeholder={'Objet'} />
                <textarea className='if-contact__form-textarea' name='message' placeholder='Message' required />
                <div className='if-contact__form-checkbox'>
                    <input id='condition' type='checkbox' required />
                    <label for={'condition'}></label>
                    <p>J’ai lu et j’accepte les conditions</p>
                </div>
                <input className='if-button' value='Envoyer' type='submit' />
            </form>
        </div>
    )
}

export default Contact