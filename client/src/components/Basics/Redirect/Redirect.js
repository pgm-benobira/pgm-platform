import React from 'react'
import { Link } from 'react-router-dom'
import Bubble from '../Bubble'

import './Redirect.css'

export default function Redirect({ title, link, target }) {
  return (
    <Link to={link} target={target}>
        <div className='redirect'>
            <h1>{title}</h1>
            <Bubble addClass='arrow__container'>
                <svg className='arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.828 50.828"><path fill="none" stroke="#ff6e1f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m49.414 1.414-48 48m8-48h40v40" data-name="Icon akar-arrow-up-right"/></svg>
            </Bubble>
        </div>
    </Link>
  )
}
