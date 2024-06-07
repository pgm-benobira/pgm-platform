import React, { useContext } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext'
import styles from './Hamburger.module.css'

export default function Hamburger({ menuStatus }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <button className={`${styles.menubutton} ${darkMode ? styles.dark : ''}`}>
      <svg className={`${styles.hamburger} ${menuStatus === 'open' ? `${styles.open}` : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path fill="none" stroke="#ff6e1f" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M1 1h24M1 13h24M1 25h24" data-name="Icon ion-menu-outline"/></svg>
      <svg className={`${styles.cross} ${menuStatus === 'open' ? `${styles.open}` : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.1 23.1"><path fill="none" stroke="#ff6e1f" strokeLinecap="round" strokeWidth="2" d="M21.686 21.686 1.414 1.414m20.272 0L1.414 21.686" data-name="Icon akar-cross"/></svg>
    </button>
  )
}
