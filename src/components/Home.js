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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusamus beatae, soluta blanditiis impedit, fuga sit quo nemo distinctio possimus id neque vitae eligendi, libero facere quaerat ipsam at. Neque!
        </div>
        <a href='/Currículo-Matheus_Silva.pdf' target='_blank' rel='noopener noreferrer'>Baixe meu CV</a>
      </div>
      <div className='avatar'>
        <div className='card'>
          <img src={process.env.PUBLIC_URL + '/lata.png'} alt='perfil'/>
          <div className='info'>
            <div>Developer</div>
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