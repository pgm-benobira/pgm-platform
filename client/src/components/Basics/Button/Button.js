import React from 'react'
import { Link } from 'react-router-dom'

import './Button.css'
import Bubble from '../Bubble'

export default function Button({ text, link, target, type }) {
  return (
    <Bubble type={type} addClass='button'>
      <Link to={link} target={target}>
          {text}
      </Link>
    </Bubble>
  )
}
