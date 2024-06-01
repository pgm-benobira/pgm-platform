import React, { useContext } from 'react'
import GPLogo from '../../../assets/images/GP.svg'
import GPLogoLight from '../../../assets/images/GP-light.svg'
import { ROUTES } from '../../../routes/routes';

import './Logo.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/ThemeContext';

export default function Logo() {
    const { darkMode } = useContext(ThemeContext);
  return (
    <Link to={ROUTES.home.path} className="logo__container">
      <div className="logo">
        <img src={darkMode ? GPLogoLight : GPLogo} alt="Logo" className="logo__image" />
        <span className="logo__text">Graduaat Programmeren</span>
      </div>
    </Link>
  )
}
