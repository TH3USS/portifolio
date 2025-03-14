import React, { useRef } from 'react'
import CustomHook from './CustomHook';

const Experience = () => {
    const [listExperience] = useState ([    
        {
          time: 2024,
          job:  'Program a lot!',
          company: 'Fatec',
          des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium odit ad eveniet tenetur vero iusto aut facilis nulla dicta. At aliquid veniam maiores libero totam obcaecati nesciunt quaerat neque!'
        },
      ]);

  const refTab = useRef(null);
  CustomHook(refTab);
  return (
    <section className="experience" id="experience" ref={refTab}>
        <div className="container">
            <div className="list">
                <div className="_item">
                        {
                        listExperience.map((value, key) => (
                            <a key={key} className='item'  ref={(el) => el && divs.current.push(el)}>
                                <div class="time">{value.time}</div>
                                <i class="fa-solid fa-school"></i>
                                <div class="content">
                                    <div class="job">
                                        {value.job}
                                    </div>
                                    <div class="company">
                                        {value.company}
                                    </div>
                                    <div class="des">
                                        {value.des}
                                    </div>
                                </div>
                            </a>
                        ))
                        }                    
                </div>                
            </div>
        </div>
    </section>
  )
}

export default Experience