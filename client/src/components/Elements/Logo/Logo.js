import React from 'react'
import GPLogo from '../../../assets/images/GP.svg'
import { ROUTES } from '../../../routes/routes';

import styles from './Logo.module.css'
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to={ROUTES.home.path} className={styles.logo__container}>
      <div className={styles.logo}>
        <img src={GPLogo} alt="Logo" className={styles.logo__image} />
        <span className={styles.logo__text}>Graduaat Programmeren</span>
      </div>
    </Link>
  )
}
