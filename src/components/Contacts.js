import React, { useRef, useState } from 'react'
import CustomHook from './CustomHook';

const Contacts = () => {
  const [listContacts] = useState([
    {
      title: 'Phone Number',
      value: '+11 99502-1758'
    },
    {
      title: 'Email',
      value: 'matheusramossilva2003@gmail.com'
    },
    {
      title: 'Linkedin',
      value: 'https://www.linkedin.com/in/matheus-ra'
    }
  ]);
  const refTab = useRef(null);
  const divs = useRef([]);
  CustomHook(refTab, divs);
  return (
    <section className='contacts' ref={refTab}>
      <div className='title' ref={(el) => el && divs.current.push(el)}>
        This is my Contacts
      </div>
      <div className='des' ref={(el) => el && divs.current.push(el)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusamus beatae, soluta blanditiis impedit, fuga sit quo nemo distinctio possimus id neque vitae eligendi, libero facere quaerat ipsam at. Neque!
      </div>
      <div className='list' ref={(el) => el && divs.current.push(el)}>
        {
          listContacts.map((value, key) => (
            <div key={key} className='item'>
              <h3>{value.title}</h3>
              <div>{value.value}</div>
            </div>
          ))
        }
      </div>
    </section >
  )
}

export default Contacts