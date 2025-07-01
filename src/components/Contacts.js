import React, { useRef, useState } from "react";
import CustomHook from "./CustomHook";
import emailjs from "@emailjs/browser";
import { contacts } from "../data/ContactsData";

const Contacts = () => {
  
  const refTab = useRef(null);
  const divs = useRef([]);
  CustomHook(refTab, divs);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("E-mail enviado com sucesso!", result.text);
          alert("Mensagem enviada!");
          form.current.reset();
        },
        (error) => {
          console.error("Erro ao enviar:", error);
          alert("Erro ao enviar. Veja o console.");
        }
      );
  };

  return (
    <section className="contacts" ref={refTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Contacts
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Me chame ou mande uma mensagem pelos seguintes meios de contato.
      </div>
      <div className="contacts_content">
        <div>
          <div className="list" ref={(el) => el && divs.current.push(el)}>
            {contacts.map((value, key) => (
              <a key={key} className="item">
                {value.image}
                <h3>{value.title}</h3>
                <div>{value.value}</div>
              </a>
            ))}
          </div>
        </div>

        <form className="contact_form" ref={form} onSubmit={sendEmail}>
          <input
            className="form_texts input1"
            type="text"
            name="name"
            placeholder="Nome Completo"
            required
          />
          <input
            className="form_texts input1"
            type="email"
            name="email"
            placeholder="Endereço de email"
            required
          />
          <input
            className="form_texts input1"
            type="text"
            name="title"
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
      </div>
    </section>
  );
};

export default Contacts;
