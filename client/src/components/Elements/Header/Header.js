import React, { useEffect, useState } from 'react'

import styles from './Header.module.css'

import Logo from '../Logo'
import Navigation from '../Navigation'
import Button from '../../Basics/Button'
import ThemeSwitcher from '../../Basics/ThemeSwitcher'
import Hamburger from '../../Basics/Hamburger'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [menuOpen])

  return (
    <header className={styles.header}>
        <Logo />
        <div className={styles.animation__container}><div className={styles.animation}></div></div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          {menuOpen ? <Hamburger menuStatus={'open'}/> : <Hamburger/>}
        </div>
        <div className={`${styles.operations} ${menuOpen ? styles.open : ''}`}>
          <Navigation closeMenu={toggleMenu} />
          <ThemeSwitcher />
          <div className={styles.actions}>
            <Button text="Inloggen" type='secondary' />
            <Button text="Inschrijven" type='primary' link="https://www.arteveldehogeschool.be/node/3854" target='blank' />
          </div>
        </div>
    </header>
  )
}
