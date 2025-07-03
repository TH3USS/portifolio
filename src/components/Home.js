import React, { useRef } from 'react'
import CustomHook from './CustomHook';

const Home = () => {
  const refTab = useRef(null);
  CustomHook(refTab);
  return (
    <section className='home' ref={refTab}>
      <div className='content'>
        <div className='name'>
          MEU NOME É <span>MATHEUS</span>
        </div>
        <div className='des'>
        Me chamo Matheus, sou Desenvolvedor FullStack tenho experiência com HTML e CSS linguagens Front End como JavaScript e linguagens Back End como Java, C e principalmente C#, e linguagens de banco de dados como MySql, SQL Server e SQLite.
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