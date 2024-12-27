import React, { useRef } from 'react'
import CustomHook from './CustomHook';

const Home = () => {
  const refTab = useRef([]);
  CustomHook(refTab);
  return (
    <section className='home' ref={refTab}>
      <div className='content'>
        <div className='name'>
          MY NAME IS <span>MATHEUS</span>
        </div>
        <div className='des'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusamus beatae, soluta blanditiis impedit, fuga sit quo nemo distinctio possimus id neque vitae eligendi, libero facere quaerat ipsam at. Neque!
        </div>
        <a href='/Currículo-Matheus_Silva.pdf' target='_blank' rel='noopener noreferrer'>Download My CV</a>
      </div>
      <div className='avatar'>
        <div className='card'>
          <img src={process.env.PUBLIC_URL + '/lata.png'} alt='perfil'/>
          <div className='info'>
            <div>Developer</div>
            <div>Brazilian</div>
            <div>03/12</div>
            <div>Male</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home