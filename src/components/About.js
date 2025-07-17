import React, { useRef } from "react";
import CustomHook from "./CustomHook";

const About = () => {
  const refTab = useRef(null);
  const divs = useRef([]);
  CustomHook(refTab, divs);

  return (
    <div className="about" ref={refTab}>
      <div className="about-content" ref={(el) => el && divs.current.push(el)}>
        <h2>
          Mais <span className="about-span">Sobre</span> Mim!
        </h2>
        <p>
          Desenvolvedor Full Stack especializado em .NET C# a 3 anos, possuo
          mais de 80 projetos desenvolvidos durante esse tempo. Minhas
          competências incluem também linguagens Back-End como Java, C e Python.
          <br/>
          <br/>
          Atualmente participo do desenvolvimento de uma aplicação web de gestão
          de riscos, que levou a uma redução de perdas e riscos financeiros e ao
          aumento da eficiência operacional em até 60% para as empresas que
          fizeram uso da aplicação, sendo utilizadas tecnologias como .NET C#,
          .NET Core, ASP.NET, ASP.NET MVC, HTML, CSS e SQL Server para sua
          elaboração.
          <br/>
          <br/>
          Tive a oportunidade de contribuir para outros projetos
          relevantes, como a criação de um Software para Dimensionamento de
          Frota desenvolvido em .NET C#, ASP.NET, Windows Forms e MySQL. Que
          ajudou alunos de logística no aumento da retenção de informações,
          aplicação prática do conhecimento e desenvolvimento de habilidades
          cognitivas levando a retenção média que antes era de até 30% a uma
          retenção média de até 90% com a utilização do software.
        </p>
      </div>
      <div class="flag_tag tag1">
        <div class="marquee">
          <span class="marquee-text">
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO -
          </span>
          <span class="marquee-text">
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO -
          </span>
        </div>
      </div>

      <div class="flag_tag tag2">
        <div class="marquee">
          <span class="marquee-text">
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
          </span>
          <span class="marquee-text">
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
          </span>
        </div>
      </div>

      <div class="flag_tag tag3">
        <div class="marquee">
          <span class="marquee-text">
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
          </span>
          <span class="marquee-text">
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
          </span>
        </div>
      </div>

      <div class="flag_tag tag4">
        <div class="marquee">
          <span class="marquee-text">
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
          </span>
          <span class="marquee-text">
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
          </span>
        </div>
      </div>

      <div class="flag_tag tag5">
        <div class="marquee">
          <span class="marquee-text">
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
          </span>
          <span class="marquee-text">
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
