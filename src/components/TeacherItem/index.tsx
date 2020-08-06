import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

const TeacherItem = () => {
 return (
  <article className="teacher-item">
   <header>
    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFzZ2FDjlXR9w/profile-displayphoto-shrink_100_100/0?e=1602115200&v=beta&t=ybMhUAiFtyRlGlqU6vm-wLcVx_vx4RrfPS29OxCRjeo" />
    <div>
     <strong>Vinícius Catarino</strong>
     <span>Matemática</span>
    </div>
   </header>

   <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
       <br /><br />
      In metus ligula, auctor eget sapien eu, accumsan volutpat justo. Sed purus dui, lobortis ut lobortis eget, elementum vitae nibh. Duis placerat odio ut felis condimentum fringilla. Pellentesque vehicula dolor vel turpis ultrices tincidunt.
     </p>

   <footer>
    <p>
     Preço/hora
        <strong>R$80,00</strong>
    </p>
    <button type="button">
     <img src={ whatsappIcon } alt="whatsapp" />
       Entrar em contato
      </button>
   </footer>
  </article>
 )
}

export default TeacherItem;