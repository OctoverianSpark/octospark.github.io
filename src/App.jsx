import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="container-name-and-info">
            <img src="/vite.svg" alt="s" />
            <div className="info">
              <h2>Jean Paul Rodriguez Zerpa</h2>
              <span>Localizacion</span>
              <div className="container-btns">
                <button className="mail-btn"><i className='bi bi-envelope-open-fill'></i> jeanpaul.hero2@gmail.com</button>
                <button><i className='bi bi-file-earmark-text'></i></button>
                <button><i className='bi bi-github'></i></button>
                <button><i className='bi bi-linkedin'></i></button>
              </div>
            </div>

            <div className="about-me">
              <h3>Sobre m&iacute;</h3>
              <p>Descripcion</p>
            </div>
            <hr />
            <h3>Tecnolog&iacute;a</h3>
            <div className="container-btns">
              <button><i className='bi bi-code-slash'></i> HTML5</button>
              <button><i className='bi bi-code-slash'></i> PHP</button>
              <button><i className='bi bi-code-slash'></i> Python</button>
              <button><i className='bi bi-code-slash'></i> MySQL</button>
              <button><i className='bi bi-code-slash'></i> C#</button>
            </div>


      </div>


    </>
  )
}

export default App
