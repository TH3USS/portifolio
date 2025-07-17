import React, { useEffect, useState, useRef } from "react";
import CustomHook from "./CustomHook.js";

const Expirience = () => {
  const refTab = useRef(null);
  const divs = useRef([]);
  CustomHook(refTab, divs);

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
    <div class="experience" ref={refTab}>
      <div class="section-timeline" ref={sectionRef}>
        <div
          class="timeline-container"
          ref={(el) => el && divs.current.push(el)}
        >
          <div class="timeline-component">
            <div class="timeline-progress">
              <div className="progress-fill" ref={fillRef}></div>
            </div>

            <div class="timeline-item observe">
              <div class="timeline-left">
                <div class="date-text">Fervereiro 2023</div>
              </div>
              <div class="timeline-centre">
                <div class="timeline-circle"></div>
              </div>
              <div class="timeline-right">
                <div class="margin-bottom">
                  <div class="text">
                    <span>Desenvolvedor FullStack - Freelance</span>
                    <br />
                    <p>Elaboração de um software para dimensionamento de frota por
                    mim e uma equipe como um produto a um outro professor de
                    logística da faculdade Fatec Guarulhos, o projeto contava
                    com profissionais de banco de dados, documentação,
                    analistas, desenvolvimento e teste de software, dos quais
                    fiz parte da equipe de desenvolvimento, agindo como
                    desenvolvedor full stack.</p>
                  </div>
                </div>
                <div class="image">
                  <img
                    src="https://i.pinimg.com/736x/0c/b3/7f/0cb37f9503693273360af4963611ee58.jpg"
                    loading="lazy"
                    width="480"
                  />
                </div>
              </div>
            </div>

            <div class="timeline-item observe">
              <div class="timeline-left">
                <div class="date-text">Abril 2024</div>
              </div>
              <div class="timeline-centre">
                <div class="timeline-circle"></div>
              </div>
              <div class="timeline-right">
                <div class="margin-bottom">
                  <div class="text">
                    <span>Estágio Voluntário - Fatec Guarulhos</span>
                    <br />
                    <p>Estágio voluntário na área de Suporte de TI ao Cliente.
                    Prestar suporte aos professores e alunos em relação a
                    hardware e software. Fazer manutenção nos computadores e na
                    rede da faculdade. Instalação e manutenção de softwares
                    utilizados no dia a dia da faculdade.</p>
                  </div>
                </div>
                <div class="image">
                  <img
                    src="https://i.pinimg.com/736x/0c/b3/7f/0cb37f9503693273360af4963611ee58.jpg"
                    loading="lazy"
                    width="480"
                  />
                </div>
                <div class="margin-bottom">
                  <div class="text">
                    <span>Desenvolvedor FullStack - Influenciar Consultoria e
                    Treinamento em Tecnologia LTDA</span>
                    <br />
                    <p>Desenvolvimento de uma aplicação web de gestão de riscos
                    para um professor de logística da Fatec Guarulhos, a
                    aplicação foi previamente iniciada por um desenvolvedor
                    sênior e atualmente dou continuidade na mesma. Responsável
                    por dar continuidade ao desenvolvimento da aplicação.</p>
                  </div>
                </div>
                <div class="image">
                  <img
                    src="https://i.pinimg.com/736x/0c/b3/7f/0cb37f9503693273360af4963611ee58.jpg"
                    loading="lazy"
                    width="480"
                  />
                </div>
              </div>
            </div>

            <div class="timeline-item observe">
              <div class="timeline-left">
                <div class="date-text">Julho 2024</div>
              </div>
              <div class="timeline-centre">
                <div class="timeline-circle"></div>
              </div>
              <div class="timeline-right">
                <div class="margin-bottom">
                  <div class="text">
                    <span>Estágio em Suporte Técnico - Furp</span>
                    <br />
                    <p>Estágio de TI na área de Suporte Técnico, onde fui
                    responsável por: Prestar suporte aos funcionários da
                    fundação, auxiliar na manutenção da rede de computadores, ,
                    manutenção de switchs, manutenção dos servidores da
                    fundação, instalação de Windows Server, Realizar Backups,
                    além de agendamento de Backups automáticos e Restore dos
                    dados da fundação, auxilio na gestão da rede corporativa da
                    fundação, entre outras funções administrativas.</p>
                  </div>
                </div>
                <div class="image">
                  <img
                    src="https://i.pinimg.com/736x/0c/b3/7f/0cb37f9503693273360af4963611ee58.jpg"
                    loading="lazy"
                    width="480"
                  />
                </div>
              </div>
            </div>

            <div class="timeline-item observe">
              <div class="timeline-left">
                <div class="date-text">Now</div>
              </div>
              <div class="timeline-centre">
                <div class="timeline-circle"></div>
              </div>
              <div class="timeline-right">
                <div class="margin-bottom">
                  <div class="text">...</div>
                </div>
              </div>
            </div>

            <div class="fade-top"></div>
            <div class="fade-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expirience;
