import { useState } from 'react'
import './App.scss'
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {


  const handleLink = e => {


    e.preventDefault()
    window.open(e.target.href, "_blank")



  }






  return (
    <>

      <div className="name-and-info">
        <img src="/profile.jpg" alt="s" className='profile' />
        <div className="info">
          <h2>Jean Paul Rodriguez Zerpa</h2>
          <span><i className='bi bi-geo-alt-fill'></i> Bogot&aacute;, Colombia</span>
          <div className="container-btns">
            <a href='mailto:jeanpaul.hero2@gmail.com' className="mail-btn"><i className='bi bi-envelope-open-fill'></i> jeanpaul.hero2@gmail.com</a>
            <a ><i className='bi bi-file-earmark-text'></i></a>
            <a href='https://github.com/OctoverianSpark' onClick={e => handleLink(e)}><i className='bi bi-github'></i></a>
            <a href='https://www.linkedin.com/in/jean-paul-rodriguez-zerpa-6b3270258' onClick={e => handleLink(e)}><i className='bi bi-linkedin'></i></a>
          </div>
        </div>


      </div>
      <div className="about-me">
        <h3>Sobre m&iacute;</h3>
        <p>Soy un desarrollador Full Stack con mas de 3 años de experiencia y con conocimiento en distintas tecnologias que me permiten desenvolverme en el entorno en el que me encuentre,</p>
      </div>
      <hr />
      <h2>Tecnolog&iacute;as</h2>
      <div className="container-btns">

        <button><i className='bi bi-code-slash'></i> HTML5</button>
        <button><i className='bi bi-code-slash'></i> CSS</button>

        <button><i className='bi bi-code-slash'></i> JavaScript</button>
        <button><i className='bi bi-code-slash'></i> PHP</button>
        <button><i className='bi bi-code-slash'></i> Python</button>
        <button><i className='bi bi-code-slash'></i> MySQL</button>
        <button><i className='bi bi-code-slash'></i> C#</button>
      </div>

      <h2>Experiencia</h2>


      <div className="experience">
        <span className='xp-img'><i className='bi bi-terminal-fill'></i></span>
        <div className="description">

          <h3>GoXpert SAS</h3>
          <h3>Analista de Soporte y Desarrollador Full Stack</h3>

        </div>

        <p className='duration'>2022 - Actualidad</p>
      </div>


      <h2>Proyectos</h2>



      <div className="project">
        <span className='xp-img'><i className='bi bi-bar-chart-line-fill'></i></span>
        <div className="description">

          <h3>HelpDesk</h3>
          <h4>Software Propiedad de GoXpert SAS</h4>
          <p>Herramienta de gestion de solicitudes realizadas al departamento de ATI de la empresa, facilitando asi su control, delegacion y atencion</p>


          <div className="tools">
            <span>PHP</span>
          </div>

          <div className="container-btns">
            <button><i className='bi bi-github'></i></button>
            <button><i className='bi bi'></i></button>
          </div>

        </div>

        <p className='duration'>2022 - Actualidad</p>
      </div>



    </>
  )
}

export default App
