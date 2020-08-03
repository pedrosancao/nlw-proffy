import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import imageLogo from '../../images/logo.svg';
import imageLanding from '../../images/landing.svg';
import iconStudy from '../../images/icons/study.svg';
import iconTeach from '../../images/icons/teach.svg';
import iconPurpleHeart from '../../images/icons/purple-heart.svg';

export default function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={imageLogo} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img src={imageLanding} alt="Plataforma de estudos" className="hero-image"/>
        <div className="buttons-container">
          <Link to="/estudar" className="study">
            <img src={iconStudy} alt="Estudar"/>
            Estudar
          </Link>
          <Link to="/ensinar" className="teach">
            <img src={iconTeach} alt="Ensinar"/>
            Ensinar
          </Link>
        </div>
        <div className="total-connections">
          Total de 200 conexões já realizadas
          <img src={iconPurpleHeart} alt="Coração roxo"/>
        </div>
      </div>
    </div>
  )
}
