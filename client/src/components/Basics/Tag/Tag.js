import React, { useContext } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext'
import styles from './Tag.module.css'

export default function Tag({ children }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`${styles.tag} ${darkMode ? styles.dark : ''}`}>
        {children}
    </div>
  )
}
