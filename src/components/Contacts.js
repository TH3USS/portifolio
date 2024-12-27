import React, { useRef, useState } from 'react'
import CustomHook from './CustomHook';

const Contacts = () => {
  const [listContacts] = useState([
    {
      title: 'Phone Number',
      value: '+84123123'
    },
    {
      title: 'Email',
      value: 'nome@gmail.com'
    },
    {
      title: 'Linkedin',
      value: 'link'
    }
  ]);
  const refTab = useRef([]);
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