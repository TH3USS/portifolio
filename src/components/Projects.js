import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import CustomHook from './CustomHook';
import { projects } from "../data/ProjectsData.js";

const Projects = () => {

  const refTab = useRef(null);
  const divs = useRef([]);
  CustomHook(refTab, divs);
  return (
    <section className='projects' ref={refTab}>
      <div className='title' ref={(el) => el && divs.current.push(el)}>
        This is my Projects
      </div>
      <div className='des' ref={(el) => el && divs.current.push(el)}>Seguem alguns dos projetos ao qual desenvolvi.</div>
      <div className='list'>
        {
          projects.map((value, key) => (
            <div key={key} className='item'>
              <div className='images' ref={(el) => el && divs.current.push(el)}>
                <img src={value.images} alt='project'/>
              </div>
              <div className='content' ref={(el) => el && divs.current.push(el)}>
                <h3>{value.name}</h3>
                <div className='des'>{value.des}</div>
                <div className='mission'>
                  <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                  <div>
                    <h4>Minhas Funções</h4>
                    <div className='de'>{value.mission}</div>
                  </div>
                </div>
                <div className='mission'>
                  <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                  <div>
                    <h4>Tecnologias Usadas</h4>
                    <div className='de'>{value.language}</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Projects