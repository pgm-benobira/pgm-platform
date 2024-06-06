import React, { useContext } from 'react'
import GPLogo from '../../../assets/images/GP.svg'
import GPLogoLight from '../../../assets/images/GP-light.svg'
import { ROUTES } from '../../../routes/routes';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/ThemeContext';
import styles from './Logo.module.css'

export default function Logo() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <Link to={ROUTES.home.path} className={`${styles.logo__container} ${darkMode ? styles.dark : ''}`}>
      <div className={styles.logo}>
        <img src={darkMode ? GPLogoLight : GPLogo} alt="Logo" className={styles.logo__image} />
        <span className={`${styles.logo__text} ${darkMode ? styles.dark : ''}`}>Graduaat Programmeren</span>
      </div>
    </Link>
  )
}
