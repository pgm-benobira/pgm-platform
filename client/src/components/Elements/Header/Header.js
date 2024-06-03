import React, { useState } from 'react'

import styles from './Header.module.css'

import Logo from '../Logo'
import Navigation from '../Navigation'
import Button from '../../Basics/Button'
import ThemeSwitcher from '../../Basics/ThemeSwitcher'
import Hamburger from '../../Basics/Hamburger'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
        <Logo />
        <div className={styles.animation}>
          <Button type='secondary' />
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          {menuOpen ? 'x' : <Hamburger/>}
        </div>
        <div className={`${styles.operations} ${menuOpen ? styles.open : ''}`}>
          <Navigation />
          <ThemeSwitcher />
          <div className={styles.actions}>
            <Button text="Inloggen" type='secondary' />
            <Button text="Inschrijven" link="https://www.arteveldehogeschool.be/node/3854" target='blank' />
          </div>
        </div>
    </header>
  )
}
