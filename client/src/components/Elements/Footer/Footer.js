import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
    const githubLink = 'https://github.com/pgm-benobira'
  return (
    <footer className={styles.footer}>
        <p>2024 - Website gebouwd door <Link className={styles.link} to={githubLink} target='_blank'>Bénoît Biraguma</Link> in opdracht voor Arteveldehogeschool.</p>
    </footer>
  )
}
