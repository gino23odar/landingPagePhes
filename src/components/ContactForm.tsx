'use client'

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '', form.current!, {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||'',
          }).then(
            () => {
              console.log('SUCCESS!');
              handleSuccess();
            },
            (error) => {
              console.log('FAILED...', error.text);
              handleFailure();
            },
          ); 
    }

    const handleSuccess = () =>{
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 5000);
      }
      const handleFailure = () =>{
        setFailure(true);
        setTimeout(() => {
            setFailure(false);
        }, 5000);
      }

  return (
    <form ref={form} onSubmit={sendEmail}>
        {success && <div className="text-green-500">Recibimos tu consulta!</div>}
        {failure && <div className="text-red-500">Lo sentimos, hubo un error.</div>}
        <div>
            <h2>Contacto</h2>
            <div className="flex">
                <label>Nombre</label>
                <input type="text" name="name" required />
            </div>
            <div className="flex">
                <label>Email</label>
                <input type="email" name="user_email" className='rounded-md text-black p-2' pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required />
            </div>
            <div className="flex">
                <label>Telefono</label>
                <input type="text" name="phone" pattern="\d{1,9}$" />
            </div>
            <div className="flex">
                <label>Consulta</label>
                <textarea name="consulta" required />
            </div>
        </div>

    </form>
  )
}

export default ContactForm