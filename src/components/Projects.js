import React, { useRef, useState } from "react";
import { projects } from "../data/ProjectsData.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleQuestion,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook.js";

const Projects = () => {
  const refTab = useRef(null);
  const divs = useRef([]);
  CustomHook(refTab, divs);

  const [filtro, setFiltro] = useState("Todos");
  const [popupData, setPopupData] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const popupTimeout = useRef(null);

  const tipos = ["Todos", "Front End", "Back End", "Full Stack"];

  const projetosFiltrados =
    filtro === "Todos" ? projects : projects.filter((p) => p.type === filtro);

  const handleMouseEnter = (proj) => {
    clearTimeout(popupTimeout.current);
    setPopupData(proj);
    setPopupVisible(true);
  };

  const handleMouseLeave = () => {
    popupTimeout.current = setTimeout(() => {
      setPopupVisible(false);
      setPopupData(null);
    }, 200);
  };

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };


  return (
    <section className="projects" ref={refTab}>
      <h2 className="titulo" ref={(el) => el && divs.current.push(el)}>
        Meus Projetos
      </h2>

      <div className="filtros">
        {tipos.map((tipo) => (
          <button
            key={tipo}
            className={`filtro ${filtro === tipo ? "ativo" : ""}`}
            onClick={() => setFiltro(tipo)}
          >
            {tipo}
          </button>
        ))}
      </div>

      <div className="grade-projetos">
        {projetosFiltrados.map((proj, index) => (
          <a
            href={proj.link}
            className="card-projeto"
            key={index}
            onMouseEnter={() => handleMouseEnter(proj)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            ref={(el) => el && divs.current.push(el)}
          >
            <div className="card-container">
              <div className="card-title"><h3>{proj.name}</h3></div>
              <img className="card-img" src={proj.images} />
            </div>
            <div className="glow"></div>
          </a>
        ))}
      </div>

      {popupVisible && popupData && (
        <div
          className="popup-back"
          onMouseEnter={() => clearTimeout(popupTimeout.current)}
          onMouseLeave={handleMouseLeave}
          style={{
            top: mousePosition.y - 300 + "px",
            left:
              mousePosition.x > window.innerWidth / 2
                ? mousePosition.x - 900 + "px" // aparece à esquerda se o mouse está na direita
                : mousePosition.x + "px", // aparece à direita se o mouse está na esquerda
            backgroundImage: `url(${popupData.images})`,
          }}
        >
          <div className="popup-detalhes">
            <div className="item">
              <div className="images" ref={(el) => el && divs.current.push(el)}>
                <img src={popupData.images} alt="project" />
              </div>
              <div
                className="content"
                ref={(el) => el && divs.current.push(el)}
              >
                <h3>{popupData.name}</h3>
                <div className="des">{popupData.des}</div>
                <div className="mission">
                  <div>
                    <FontAwesomeIcon icon={faPersonCircleQuestion} />
                  </div>
                  <div>
                    <h4>Minhas Funções</h4>
                    <div className="de">{popupData.mission}</div>
                  </div>
                </div>
                <div className="mission">
                  <div>
                    <FontAwesomeIcon icon={faEarthAmericas} />
                  </div>
                  <div>
                    <h4>Tecnologias Usadas</h4>
                    <div className="de">{popupData.language}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
