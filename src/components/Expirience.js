import React, { useEffect, useState, useRef } from 'react'

const Expirience = () => {

useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("timeline-highlight");
            entry.target.classList.remove("timeline-faded");
          } else {
            entry.target.classList.remove("timeline-highlight");
            entry.target.classList.add("timeline-faded");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const elements = document.querySelectorAll(".observe");
    elements.forEach((el) => {
      el.classList.add("timeline-faded");
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const sectionRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const fill = fillRef.current;
      if (!section || !fill) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = section.offsetHeight;

      const scrollMiddle = window.scrollY + window.innerHeight / 2;
const scrollProgress = (scrollMiddle - sectionTop) / sectionHeight;


      // Garante que o valor fique entre 0% e 100%
      const heightPercent = Math.min(Math.max(scrollProgress * 100, 0), 100);

      fill.style.height = `${heightPercent}%`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Executa na carga inicial

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
     <div class="page-wrapper">
      <div class="section-timeline" ref={sectionRef}>
        <div class="timeline-container">
          <div class="timeline-component">
            <div class="timeline-progress">
              <div className="progress-fill" ref={fillRef}></div>
            </div>

            <div class="timeline-item observe">
              <div class="timeline-left">
                <div class="date-text">aaaaaaaa 2010</div>
              </div>
              <div class="timeline-centre">
                <div class="timeline-circle"></div>
              </div>
              <div class="timeline-right">
                <div class="margin-bottom">
                  <div class="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto magni accusantium numquam consequuntur? Commodi
                    impedit at ullam. Earum sint id quae perferendis nihil,
                    illum commodi voluptate culpa neque libero quas.
                  </div>
                </div>
                <div class="image"><img src="https://i.pinimg.com/736x/0c/b3/7f/0cb37f9503693273360af4963611ee58.jpg" loading="lazy" width="480"/></div>
              </div>
            </div>

            <div class="timeline-item observe">
              <div class="timeline-left">
                <div class="date-text">2010</div>
              </div>
              <div class="timeline-centre">
                <div class="timeline-circle"></div>
              </div>
              <div class="timeline-right">
                <div class="margin-bottom">
                  <div class="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto magni accusantium numquam consequuntur? Commodi
                    impedit at ullam. Earum sint id quae perferendis nihil,
                    illum commodi voluptate culpa neque libero quas.
                  </div>
                </div>
                <div class="image"><img src="https://i.pinimg.com/736x/0c/b3/7f/0cb37f9503693273360af4963611ee58.jpg" loading="lazy" width="480"/></div>
              </div>
            </div>  

            <div class="timeline-item observe">
              <div class="timeline-left">
                <div class="date-text">2010</div>
              </div>
              <div class="timeline-centre">
                <div class="timeline-circle"></div>
              </div>
              <div class="timeline-right">
                <div class="margin-bottom">
                  <div class="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto magni accusantium numquam consequuntur? Commodi
                    impedit at ullam. Earum sint id quae perferendis nihil,
                    illum commodi voluptate culpa neque libero quas.
                  </div>
                </div>
                <div class="image"><img src="https://i.pinimg.com/736x/0c/b3/7f/0cb37f9503693273360af4963611ee58.jpg" loading="lazy" width="480"/></div>
              </div>
            </div>  

            <div class="timeline-item observe">
              <div class="timeline-left">
                <div class="date-text">2010</div>
              </div>
              <div class="timeline-centre">
                <div class="timeline-circle"></div>
              </div>
              <div class="timeline-right">
                <div class="margin-bottom">
                  <div class="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto magni accusantium numquam consequuntur? Commodi
                    impedit at ullam. Earum sint id quae perferendis nihil,
                    illum commodi voluptate culpa neque libero quas.
                  </div>
                </div>
                <div class="image"><img src="https://i.pinimg.com/736x/0c/b3/7f/0cb37f9503693273360af4963611ee58.jpg" loading="lazy" width="480"/></div>
              </div>
            </div>  

            <div class="timeline-item observe">
              <div class="timeline-left">
                <div class="date-text">2010</div>
              </div>
              <div class="timeline-centre">
                <div class="timeline-circle"></div>
              </div>
              <div class="timeline-right">
                <div class="margin-bottom">
                  <div class="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto magni accusantium numquam consequuntur? Commodi
                    impedit at ullam. Earum sint id quae perferendis nihil,
                    illum commodi voluptate culpa neque libero quas.
                  </div>
                </div>
                <div class="image"><img src="https://i.pinimg.com/736x/0c/b3/7f/0cb37f9503693273360af4963611ee58.jpg" loading="lazy" width="480"/></div>
              </div>
            </div>

            <div class="fade-top"></div>
            <div class="fade-bottom"></div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Expirience