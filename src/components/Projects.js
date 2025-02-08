import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import CustomHook from './CustomHook';

const Projects = () => {
  const [listProjects] = useState([
    {
      name: "DMF - Software de Dimensionamento de Frota",
      des: 'O software consiste em uma forma de gameficação dos conceitos de Dimensionamento de Frota com o objetivo de levar os alunos do curso de logística a porem em pratica os conhecimentos adquiridos em relação a matéria.',
      mission: 'Análise e design do sistema, desenvolvimento back-end e front-end e implementação de banco de dados.',
      language: '.NET C#, .NET CORE, ASP.NET, Windows Forms e MySql como banco de dados.',
      images: process.env.PUBLIC_URL + '/C-.png'
    },
    {
      name: "Software de Gerenciamento de Riscos",
      des: 'Software de gerenciamento de riscos para empresas, com o objetivo de prover ferramentas de análises de risco, planos de ação, controle de riscos...',
      mission: 'Desenvolvimento back-end e front-end, otimização do software e implementação de novas funcionalidades.',
      language: '.NET C#, .NET Core, ASP.NET MVC, HTML, CSS, JavaScript e SQL Server como banco de dados,...',
      images: process.env.PUBLIC_URL + '/C-.png'
    },
    {
      name: "Software para Gestão de Biblioteca",
      des: 'Esta é uma aplicação web pra controle de empréstimo de livros, na aplicação é possível cadastrar um livro e a quantidade disponível dele e cadastrar um empréstimo do mesmo de acordo com o numero de livros disponíveis.',
      mission: 'Análise e design do sistema, desenvolvimento back-end e front-end e implementação de banco de dados.',
      language: 'ASP.NET MVC, .NET C#, HTML, CSS, Bootstrap, JavaScript e  SQL Server como anco de dados.',
      images: process.env.PUBLIC_URL + '/C-.png'
    },
    {
      name: "Aplicação web para controle de gastos",
      des: 'Este é um projeto de uma aplicação de controle de gastos, onde pode-se fazer a entrada dos gastos realizados e da receita ganha, a aplicação faz as contas do saldo final, mostrando se foi positivo ou negativo, e disponibilizando um gráfico pizza e um gráfico de linhas para a consulta.',
      mission: 'Análise e design do sistema, desenvolvimento back-end e front-end e implementação de banco de dados.',
      language: 'ASP.NET MVC, .NET C#, HTML, CSS, JavaScript e  SQL Server como anco de dados.',
      images: process.env.PUBLIC_URL + '/C-.png'
    },
    {
      name: "Calculadora de IMC",
      des: 'Esta é uma aplicação web de uma calculadora de IMC.',
      mission: 'Desenvolvimento back-end e front-end.',
      language: 'ASP.NET MVC, .NET C#, HTML, CSS e JavaScript.',
      images: process.env.PUBLIC_URL + '/C-.png'
    },
    {
      name: "Conversor de Moedas",
      des: 'Esta é uma aplicação web de um conversor de moeda.',
      mission: 'Desenvolvimento back-end e front-end.',
      language: 'ASP.NET MVC, .NET C#, HTML, CSS e JavaScript.',
      images: process.env.PUBLIC_URL + '/C-.png'
    },
    {
      name: "Gerador de Senhas",
      des: 'Esta é uma aplicação web de um gerador de senhas.',
      mission: 'Desenvolvimento back-end e front-end.',
      language: 'ASP.NET MVC, .NET C#, HTML, CSS e JavaScript.',
      images: process.env.PUBLIC_URL + '/C-.png'
    },
    {
      name: "Simulador de Juros Compostos",
      des: 'Esta é uma aplicação web de um simulador de juros compostos.',
      mission: 'Desenvolvimento back-end e front-end.',
      language: 'ASP.NET MVC, .NET C#, HTML, CSS e JavaScript.',
      images: process.env.PUBLIC_URL + '/C-.png'
    },
    {
      name: "Portal de Publicações",
      des: 'Esta é uma aplicação web de um Portal de Publicações, na aplicação é possível fazer e visualizar publicações.',
      mission: 'Análise e design do sistema, desenvolvimento back-end e front-end e implementação de banco de dados',
      language: 'ASP.NET MVC, .NET C#, HTML, CSS, JavaScript e  SQL Server como anco de dados.',
      images: process.env.PUBLIC_URL + '/C-.png'
    }
  ]);
  const refTab = useRef(null);
  const divs = useRef([]);
  CustomHook(refTab, divs);
  return (
    <section className='projects' ref={refTab}>
      <div className='title' ref={(el) => el && divs.current.push(el)}>
        This is my Projects
      </div>
      <div className='des' ref={(el) => el && divs.current.push(el)}></div>
      <div className='list'>
        {
          listProjects.map((value, key) => (
            <div key={key} className='item'>
              <div className='images' ref={(el) => el && divs.current.push(el)}>
                <img src={value.images} alt='project'/>
              </div>
              <div className='content' ref={(el) => el && divs.current.push(el)}>
                <h3>{value.name}</h3>
                <div className='des'>{value.des}</div>
                <div className='mission'>
                  <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                  <div>
                    <h4>Minhas Funções</h4>
                    <div className='de'>{value.mission}</div>
                  </div>
                </div>
                <div className='mission'>
                  <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                  <div>
                    <h4>Tecnologias Usadas</h4>
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