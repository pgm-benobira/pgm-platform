import React from 'react'
import Bubble from '../../Basics/Bubble'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes';

import styles from './Navigation.module.css'

export default function Navigation() {
    return (
        <Bubble>
            <nav className={styles.navigation}>
                <NavLink to={ROUTES.home.path}>{ROUTES.home.title}</NavLink>
                <NavLink to={ROUTES.study.path}>{ROUTES.study.title}</NavLink>
                <NavLink to={ROUTES.program.path}>{ROUTES.program.title}</NavLink>
                <NavLink to={ROUTES.projects.path}>{ROUTES.projects.title}</NavLink>
                <NavLink to={ROUTES.blog.path}>{ROUTES.blog.title}</NavLink>
                <NavLink to={ROUTES.services.path}>{ROUTES.services.title}</NavLink>
                <NavLink to={ROUTES.team.path}>{ROUTES.team.title}</NavLink>
            </nav>
        </Bubble>
    )
}