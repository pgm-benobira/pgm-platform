import React, { useContext } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'
import Bubble from '../Bubble'

export default function Button({ text, link, target, type }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Bubble type={type} addClass={`${styles.button} ${darkMode ? styles.dark : ''}`}>
      <Link to={link} target={target}>
          {text}
      </Link>
    </Bubble>
  )
}
