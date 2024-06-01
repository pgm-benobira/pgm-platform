import React from 'react'
import Bubble from '../../Basics/Bubble'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes';

import './Navigation.css'

export default function Navigation() {
    return (
        <Bubble>
            <nav className='navigation'>
                <NavLink className='navigation__link' to={ROUTES.home.path}>{ROUTES.home.title}</NavLink>
                <NavLink className='navigation__link' to={ROUTES.study.path}>{ROUTES.study.title}</NavLink>
                <NavLink className='navigation__link' to={ROUTES.program.path}>{ROUTES.program.title}</NavLink>
                <NavLink className='navigation__link' to={ROUTES.projects.path}>{ROUTES.projects.title}</NavLink>
                <NavLink className='navigation__link' to={ROUTES.blog.path}>{ROUTES.blog.title}</NavLink>
                <NavLink className='navigation__link' to={ROUTES.services.path}>{ROUTES.services.title}</NavLink>
                <NavLink className='navigation__link' to={ROUTES.team.path}>{ROUTES.team.title}</NavLink>
            </nav>
        </Bubble>
    )
}