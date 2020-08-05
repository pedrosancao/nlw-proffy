import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import imageLogo from '../../assets/images/logo.svg';
import imageLanding from '../../assets/images/landing.svg';
import iconStudy from '../../assets/images/icons/study.svg';
import iconTeach from '../../assets/images/icons/teach.svg';
import iconPurpleHeart from '../../assets/images/icons/purple-heart.svg';

import './styles.scss';

export default function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(({ data }) => {
      setTotalConnections(data.total);
    });

  }, []);

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
          Total de {totalConnections} {totalConnections === 1 ? 'conexão já realizada' : 'conexões já realizadas'}
          <img src={iconPurpleHeart} alt="Coração roxo"/>
        </div>
      </div>
    </div>
  )
}
