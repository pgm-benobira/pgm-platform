import React, { useContext } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext'
import styles from './Bubble.module.css'

export default function Bubble({ type='', children, addClass='', addContainer='', onClick}) {
  const { darkMode } = useContext(ThemeContext);

  const typeStyles = {
    'primary': styles['bubble--primary'],
    'secondary': styles['bubble--secondary'],
  };

  return (
    <div className={`${styles.bubble__container} ${darkMode ? styles.dark : ''} ${addContainer}`} onClick={onClick}>
      <div className={`${styles.bubble} ${typeStyles[type]} ${addClass}`}>
          {children}
      </div>
    </div>
  )
}
