import React from 'react';
import api from '../../services/api';

import iconPurpleHeart from '../../assets/images/icons/purple-heart.svg';
import iconWhatsapp from '../../assets/images/icons/whatsapp.svg';

import './styles.scss';

interface TeacherItemProps {
  classInfo: {
    "user_id": Number;
    "name": string;
    "avatar": string;
    "title": string;
    "bio": string;
    "subject": string;
    "cost": Number;
    "whatsapp": string;
  };
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = props => {
  function storeConnection() {
    api.post('connections', { user_id: props.classInfo.user_id });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/5047991?s=460&u=78793349fb74e7bb9178013f388337a05c4085f3&v=4" alt="Pedro Sanção"/>
        <div>
          <h3>{props.classInfo.name}</h3>
          <span>{props.classInfo.subject}</span>
        </div>
      </header>
      <p>
        <strong>{props.classInfo.title}</strong>
      </p>
      <p>{props.classInfo.bio}</p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ {props.classInfo.cost}</strong>
        </p>
        <div className="buttons-container">
          <button id="favorite-button">
            <img src={iconPurpleHeart} alt="Coração roxo"/>
          </button> 
          <a
            href={`https://wa.me/${props.classInfo.whatsapp}`} 
            id="contact-button" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={storeConnection}
          >
            <img src={iconWhatsapp} alt="Whatsapp"/>
            Entrar em contato
          </a>
        </div>
      </footer>
    </article>
  )
}

export default TeacherItem;
