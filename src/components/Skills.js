import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faHtml5, faCss3, faJs, faVuejs, faLaravel } from '@fortawesome/free-brands-svg-icons'
import CustomHook from './CustomHook';


const Skills = () => {
  const [listSkills] = useState ([
    {
      name: 'HTML',
      des:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusamus beatae, soluta blanditiis impedit, fuga sit quo nemo distinctio possimus id neque vitae eligendi, libero facere quaerat ipsam at. Neque!',
      icon: faHtml5
    },
    {
      name: 'Css',
      des:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusamus beatae, soluta blanditiis impedit, fuga sit quo nemo distinctio possimus id neque vitae eligendi, libero facere quaerat ipsam at. Neque!',
      icon: faCss3
    },
    {
      name: 'JavaScript',
      des:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusamus beatae, soluta blanditiis impedit, fuga sit quo nemo distinctio possimus id neque vitae eligendi, libero facere quaerat ipsam at. Neque!',
      icon: faJs
    },
    {
      name: 'ReactJs',
      des:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusamus beatae, soluta blanditiis impedit, fuga sit quo nemo distinctio possimus id neque vitae eligendi, libero facere quaerat ipsam at. Neque!',
      icon: faReact
    },
    {
      name: 'VueJs',
      des:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusamus beatae, soluta blanditiis impedit, fuga sit quo nemo distinctio possimus id neque vitae eligendi, libero facere quaerat ipsam at. Neque!',
      icon: faVuejs
    },
    {
      name: 'Laravel',
      des:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusamus beatae, soluta blanditiis impedit, fuga sit quo nemo distinctio possimus id neque vitae eligendi, libero facere quaerat ipsam at. Neque!',
      icon: faLaravel
    },
  ]);
  const refTab = useRef(null);
  const divs = useRef([]);
  CustomHook(refTab, divs);
  return (
    <section className='skills' ref={refTab}>
      <div className='title' ref={(el) => el && divs.current.push(el)}>
        This is my Skills
      </div>
      <div className='des' ref={(el) => el && divs.current.push(el)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusamus beatae, soluta blanditiis impedit, fuga sit quo nemo distinctio possimus id neque vitae eligendi, libero facere quaerat ipsam at. Neque!
      </div>
      <div className='list' >
        {
          listSkills.map((value, key) => (
            <div key={key} className='item' ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon}/>
              <h3>{value.name}</h3>
              {/*<div className='des'>{value.des}</div>*/}
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills