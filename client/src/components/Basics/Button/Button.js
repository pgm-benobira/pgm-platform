import React from 'react'
import { Link } from 'react-router-dom'

import './Button.css'

export default function Button({ text, link, target, type }) {
  return (
    <Link to={link} target={target} className={`button button--${type}`}>
        {text}
    </Link>
  )
}
