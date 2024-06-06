import React, { useContext } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext'
import { Link } from 'react-router-dom'
import Bubble from '../Bubble'
import styles from './Redirect.module.css'

export default function Redirect({ title, link, target, orientation }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Link to={link} target={target}>
        <div className={`${styles.redirect} ${darkMode ? styles.dark : ''}`}>
          {title && <h1>{title}</h1>}
          <Bubble addContainer={styles.arrow__container} addClass={styles.arrow}>
              <svg className={`${styles.svg} ${orientation ? styles.left : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.828 50.828"><path fill="none" stroke="#ff6e1f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m49.414 1.414-48 48m8-48h40v40" data-name="Icon akar-arrow-up-right"/></svg>
          </Bubble>
        </div>
    </Link>
  )
}
