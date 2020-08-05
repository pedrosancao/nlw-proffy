import React from 'react';
import { Link } from 'react-router-dom';

import imageLogo from '../../assets/images/logo.svg';
import iconBack from '../../assets/images/icons/back.svg';

import './styles.scss';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = props =>  {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={iconBack} alt="Voltar"/>
        </Link>
        <img src={imageLogo} alt="Proffy"/>
      </div>
      <div className="header-content container">
        <strong>{props.title}</strong>
        { props.subtitle && <p>{props.subtitle}</p> }
        {props.children}
      </div>
    </header>
  )
}

export default PageHeader;
