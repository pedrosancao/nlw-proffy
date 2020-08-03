import React from 'react';

import iconPurpleHeart from '../../assets/images/icons/purple-heart.svg';
import iconWhatsapp from '../../assets/images/icons/whatsapp.svg';

import './styles.scss';

export default function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/5047991?s=460&u=78793349fb74e7bb9178013f388337a05c4085f3&v=4" alt="Pedro Sanção"/>
        <div>
          <h3>Pedro Sanção</h3>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        <strong>Sed velit quam, lacinia non metus sit amet, venenatis bibendum eros. Fusce pharetra interdum luctus. </strong>
      </p>
      <p>In a condimentum sem. Fusce iaculis sollicitudin iaculis. Maecenas vitae velit sed nisl facilisis euismod ornare non sapien. Praesent venenatis elementum pretium. Aenean tincidunt, lectus in ultrices gravida, justo nisi commodo metus, in venenatis ipsum nisi nec libero. Cras eu vulputate dolor, ac egestas leo. In consectetur lobortis eros, et finibus nunc pulvinar ut.</p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <div className="buttons-container">
          <button id="favorite-button">
            <img src={iconPurpleHeart} alt="Coração roxo"/>
          </button> 
          <button id="contact-button">
            <img src={iconWhatsapp} alt="Whatsapp"/>
            Entrar em contato
          </button>
        </div>
      </footer>
    </article>
  )
}