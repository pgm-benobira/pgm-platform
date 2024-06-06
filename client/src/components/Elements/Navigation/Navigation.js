import React, { useContext } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext'
import Bubble from '../../Basics/Bubble'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes';
import styles from './Navigation.module.css'

export default function Navigation({ closeMenu }) {
    const { darkMode } = useContext(ThemeContext);

    return (
        <Bubble>
            <nav className={styles.navigation}>
                <NavLink onClick={closeMenu} className={`${styles.navigation__link} ${darkMode ? styles.dark : ''}`} to={ROUTES.home.path}>{ROUTES.home.title}</NavLink>
                <NavLink onClick={closeMenu} className={`${styles.navigation__link} ${darkMode ? styles.dark : ''}`} to={ROUTES.study.path}>{ROUTES.study.title}</NavLink>
                <NavLink onClick={closeMenu} className={`${styles.navigation__link} ${darkMode ? styles.dark : ''}`} to={ROUTES.program.path}>{ROUTES.program.title}</NavLink>
                <NavLink onClick={closeMenu} className={`${styles.navigation__link} ${darkMode ? styles.dark : ''}`} to={ROUTES.projects.path}>{ROUTES.projects.title}</NavLink>
                <NavLink onClick={closeMenu} className={`${styles.navigation__link} ${darkMode ? styles.dark : ''}`} to={ROUTES.blog.path}>{ROUTES.blog.title}</NavLink>
                <NavLink onClick={closeMenu} className={`${styles.navigation__link} ${darkMode ? styles.dark : ''}`} to={ROUTES.services.path}>{ROUTES.services.title}</NavLink>
                <NavLink onClick={closeMenu} className={`${styles.navigation__link} ${darkMode ? styles.dark : ''}`} to={ROUTES.team.path}>{ROUTES.team.title}</NavLink>
            </nav>
        </Bubble>
    )
}
