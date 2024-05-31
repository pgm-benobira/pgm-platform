import React from 'react'

import styles from './Header.module.css'

import Logo from '../Logo'
import Navigation from '../Navigation'
import Button from '../../Basics/Button/Button'

export default function Header() {
  return (
    <header className={styles.header}>
        <Logo />
        <Navigation />
        <Button text="Inloggen" type='secondary' />
        <Button text="Inschrijven" link="https://www.arteveldehogeschool.be/node/3854" target='blank' />
    </header>
  )
}
