import React from 'react'

import styles from './Header.module.css'

import Logo from '../Logo'
import Navigation from '../Navigation'

export default function Header() {
  return (
    <header className={styles.header}>
        <Logo />
        <Navigation />
    </header>
  )
}
