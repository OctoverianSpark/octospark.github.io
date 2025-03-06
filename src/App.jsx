import { React, useRef } from 'react'
import './App.scss'
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer,toast } from 'react-toastify';

function App() {


  const sectionRef = useRef(null)

  const handleLink = e => {


    e.preventDefault()
    window.open(e.target.href, "_blank")



  }


  const scroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleCopy = async () => {
    
    try {
      await navigator.clipboard.writeText('jeanpaul.hero2@gmail.com');
      toast.success('Correo copiado al portapapeles!');
    } catch (err) {
      toast.error('Error al copiar el correo');
    }
  };


  const handleDownload = () => {
    const url = "/cv.pdf"; 
    const link = document.createElement("a");
    link.href = url;
    link.download = "cv.pdf"; // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className='portfolio-body' ref={sectionRef}>
      <ToastContainer/>      
      <div className="name-and-info">
        <img src="/profile.jpg" alt="s" className='profile' />
        <div className="info">
          <h2>Jean Paul Rodr&iacute;guez Zerpa</h2>
          <span><i className='bi bi-geo-alt-fill'></i> Bogot&aacute;, Colombia</span>
          <div className="container-btns">
            <button onClick={handleCopy}><i className='bi bi-envelope-open-fill'></i> <span>Enviame un Correo!</span></button>
            <button onClick={handleDownload} ><i className='bi bi-file-earmark-text'></i> <span>Descarga mi CV</span></button>
            <a href='https://github.com/OctoverianSpark' onClick={e => handleLink(e)}><i className='bi bi-github'></i> <span>Mira mi GitHub!</span></a>
            <a href='https://www.linkedin.com/in/jean-paul-rodriguez-zerpa-6b3270258' onClick={e => handleLink(e)}><i className='bi bi-linkedin'></i> <span>Mi Linkedin</span></a>
          </div>
        </div>


      </div>
      <div className="about-me">
        <h2>Sobre m&iacute;</h2>
        <p>Soy un desarrollador Full Stack con más de tres años de experiencia, con un sólido dominio de diversas tecnologías que me permiten adaptarme y desempeñarme eficazmente en cualquier entorno de desarrollo.</p>
      </div>
      <hr />
      <div className="knowledge">

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

      </div>
      <h2>Idiomas</h2>

      <div className="langs">
        <button>Español (Nativo)</button>
        <button>Ingles (B2)</button>
      </div>

      <h2>Habilidades Blandas</h2>
      <div className="soft-skills">

        <div className="container-btns">

          <button>Trabajo en Equipo</button>
          <button>Flexibilidad</button>
          <button>Motivacion</button>
          <button>Comunicacion</button>

        </div>

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

      <hr />
      <h2>Proyectos</h2>



      <div className="project">
        <span className='xp-img'><i className='bi bi-bar-chart-line-fill'></i></span>
        <div className="description">

          <h3>SubPro</h3>
          <h4>Software Propiedad de GoXpert SAS</h4>
          <p>Herramienta de gestion de solicitudes realizadas al departamento de ATI de la empresa, facilitando asi su control, delegacion y atencion</p>


          <div className="tools">
            <span>PHP</span>
            <span>HTML</span>
            <span>SaaS</span>
            <span>JavaScript</span>
          </div>

          <div className="container-btns">
            <a href='https://github.com/OctoverianSpark/Sub-Productividad' onClick={e => handleLink(e)}><i className='bi bi-github'></i></a>
          </div>

        </div>


      </div>
      <hr />
        <div className="foot">
          <h2>Jean Paul Rodr&iacute;guez Zerpa</h2>
          <div className="container-btns">
            <button onClick={handleCopy}><i className='bi bi-envelope-open-fill'></i> <span>Enviame un Correo!</span></button>
            <button onClick={handleDownload} ><i className='bi bi-file-earmark-text'></i> <span>Descarga mi CV</span></button>
            <a href='https://github.com/OctoverianSpark' onClick={e => handleLink(e)}><i className='bi bi-github'></i> <span>Mira mi GitHub!</span></a>
            <a href='https://www.linkedin.com/in/jean-paul-rodriguez-zerpa-6b3270258' onClick={e => handleLink(e)}><i className='bi bi-linkedin'></i> <span>Mi Linkedin</span></a>
          </div>
        </div>



    </div>
  )
}

export default App
