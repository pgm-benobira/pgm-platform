import React, { useContext } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext'
import styles from './Impression.module.css'

export default function Impression({ fileName, url }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`${styles.impression} ${darkMode ? styles.dark : ''}`}>
        <img src={url} alt={fileName || 'Sfeerbeeld'} />
    </div>
  )
}
