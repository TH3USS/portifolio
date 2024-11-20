import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import CustomHook from './CustomHook';

const Projects = () => {
  const [listProjects] = useState([
    {
      name: "Project Real-Time chating in website",
      des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusamus beatae, soluta blanditiis impedit, fuga sit quo nemo distinctio possimus id neque vitae eligendi, libero facere quaerat ipsam at. Neque!',
      mission: 'Back-end Developer, system analysis and design',
      language: 'HTML5, CSS3, React Js, SoketIO,...',
      images: '/C-.png'
    },
    {
      name: "Project Real-Time chating in website",
      des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusamus beatae, soluta blanditiis impedit, fuga sit quo nemo distinctio possimus id neque vitae eligendi, libero facere quaerat ipsam at. Neque!',
      mission: 'Back-end Developer, system analysis and design',
      language: 'HTML5, CSS3, React Js, SoketIO,...',
      images: '/C-.png'
    },
    {
      name: "Project Real-Time chating in website",
      des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusamus beatae, soluta blanditiis impedit, fuga sit quo nemo distinctio possimus id neque vitae eligendi, libero facere quaerat ipsam at. Neque!',
      mission: 'Back-end Developer, system analysis and design',
      language: 'HTML5, CSS3, React Js, SoketIO,...',
      images: '/C-.png'
    }
  ]);
  const refTab = useRef();
  const divs = useRef([]);
  CustomHook(refTab, divs);
  return (
    <section className='projects' ref={refTab}>
      <div className='title' ref={(el) => el && divs.current.push(el)}>
        This is my Projects
      </div>
      <div className='des' ref={(el) => el && divs.current.push(el)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusamus beatae, soluta blanditiis impedit, fuga sit quo nemo distinctio possimus id neque vitae eligendi, libero facere quaerat ipsam at. Neque!
      </div>
      <div className='list'>
        {
          listProjects.map((value, key) => (
            <div key={key} className='item'>
              <div className='images' ref={(el) => el && divs.current.push(el)}>
                <img src={value.images} />
              </div>
              <div className='content' ref={(el) => el && divs.current.push(el)}>
                <h3>{value.name}</h3>
                <div className='des'>{value.des}</div>
                <div className='mission'>
                  <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                  <div>
                    <h4>Mission</h4>
                    <div className='de'>{value.mission}</div>
                  </div>
                </div>
                <div className='mission'>
                  <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                  <div>
                    <h4>Language</h4>
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