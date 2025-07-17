import React, { useRef } from 'react'
import CustomHook from './CustomHook';

const Home = () => {
  const refTab = useRef(null);
  CustomHook(refTab);
  return (
    <section className='home' ref={refTab}>
      <div className='content'>
        <div className='name'>
          matheus<span>.is()</span>
        </div>
        <ul className='numbers'>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <div className='des'>
        <span>Matheus Ramos Silva</span><p>Desenvolvedor Full Stack versátil, com domínio em tecnologias Front End como React.js, além de experiência em linguagens Back End como C# e Python.</p>
        </div>
        <a className='cv-button' href='/Currículo-Matheus-FullStack.pdf' target='_blank' rel='noopener noreferrer'>Baixe meu CV</a>
      </div>
      <div className='avatar'>
        <div className='card'>
          <img src={process.env.PUBLIC_URL + '/perfil.jpeg'} alt='perfil'/>
          <div className='info'>
            <div>Desenvolvedor</div>
            <div>Brasileiro</div>
            <div>20/12</div>
            <div>Homem</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home