import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faHtml5, faCss3, faJs, faPython } from '@fortawesome/free-brands-svg-icons'
import { ReactComponent as CSharp } from '../csharp.svg'
import CustomHook from './CustomHook';


const Skills = () => {
  const [listSkills] = useState ([    
    {
      name: 'C#',
      des:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusamus beatae, soluta blanditiis impedit, fuga sit quo nemo distinctio possimus id neque vitae eligendi, libero facere quaerat ipsam at. Neque!',
      icon: CSharp,
    },
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
      name: 'Python',
      des:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusamus beatae, soluta blanditiis impedit, fuga sit quo nemo distinctio possimus id neque vitae eligendi, libero facere quaerat ipsam at. Neque!',
      icon: faPython
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
        Tecnologias as quais tenho um maior dominio.
      </div>
      <div className='list' >
        {
          listSkills.map((value, key) => (
            <div key={key} className='item' ref={(el) => el && divs.current.push(el)}>
              {value.name === 'C#' ? (
                <CSharp/>
              ) : (
                <FontAwesomeIcon icon={value.icon} />
              )}
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