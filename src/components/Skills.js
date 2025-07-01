import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomHook from './CustomHook';
import { skills } from '../data/SkillsData';
import { ReactComponent as CSharp } from '../csharp.svg';

const Skills = () => {
 
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
          skills.map((value, key) => (
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