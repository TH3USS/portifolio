import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.YOUR_SERVICE_ID,      
        process.env.YOUR_TEMPLATE_ID,     
        form.current,
        process.env.YOUR_PUBLIC_KEY      
      )
      .then(
        (result) => {
          alert('Mensagem enviada com sucesso!');
          form.current.reset();
        },
        (error) => {
          alert('Erro ao enviar a mensagem. Tente novamente.');
        }
      );
  };

  return (
    <form className="contact_form" ref={form} onSubmit={sendEmail}>
      <input
        className="form_texts input1"
        type="text"
        name="user_name"
        placeholder="Nome Completo"
        required
      />
      <input
        className="form_texts input1"
        type="email"
        name="user_email"
        placeholder="Endereço de email"
        required
      />
      <input
        className="form_texts input1"
        type="text"
        name="subject"
        placeholder="Assunto do email"
        required
      />
      <textarea
        className="form_texts input2"
        name="message"
        rows="4"
        placeholder="Digite sua mensagem aqui..."
        required
      />
      <input className="form_button" type="submit" value="Enviar" />
    </form>
  );
}

export default ContactForm
