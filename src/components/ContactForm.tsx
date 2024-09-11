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
    <div className='flex'>
      <form ref={form} onSubmit={sendEmail}>
          {success && <div className="text-green-500">Recibimos tu consulta!</div>}
          {failure && <div className="text-red-500">Lo sentimos, hubo un error.</div>}
          <ul className="wrapper">
            <li style={{ '--i': 5 }} >
              <input className="input" type="text" placeholder="Nombre" required/>
            </li>
            <li style={{ '--i': 4 }}>
              <input className="input" placeholder="Telefono" name="phone"/>
            </li>
            <li style={{ '--i': 3 }}>
              <input className="input" type="email" placeholder="E-mail" name="email" required />
            </li >
            <li style={{ '--i': 2 }}>
              <input className="input" type="textarea" placeholder="Consulta" name="consulta" required />
            </li >
            <button style={{ '--i': 1 }} className='envio-btn'>Enviar</button>
          </ul>
      </form>
    </div>
  )
}

export default ContactForm